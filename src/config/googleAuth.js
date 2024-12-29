const { OAuth2Client } = require('google-auth-library');
const config = require('./config');
const User = require('../module/users/entity/model');
const client = new OAuth2Client(config.google.clientId);

// Function to verify Google token
async function verifyGoogleToken(token) {
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: config.google.clientId,  // The client ID of the app
  });
  const payload = ticket.getPayload();  // Get the user info from Google
  return payload;
}

// Google authentication middleware
async function googleAuth(req, res, next) {
  const token = req.body.token;  // Google token sent from client
  if (!token) {
    return res.status(400).send('Token is required');
  }

  try {
    const payload = await verifyGoogleToken(token);

    // Find or create a user in the database
    let user = await User.findOne({ googleId: payload.sub });
    if (user) {
      // User found, pass the user object to the next middleware
      req.user = user;
      return next();
    } else {
      // If the user does not exist, create a new user
      user = new User({
        googleId: payload.sub,
        email: payload.email,
        fullName: payload.name,
        photoPath: payload.picture,
      });
      await user.save();
      req.user = user;
      return next();
    }
  } catch (error) {
    console.error('Google authentication error:', error);
    res.status(401).send('Invalid Google token');
  }
}

module.exports = googleAuth;
