const jwt = require("jsonwebtoken");

const { FORBIDDEN } = require("../constants/statusCodes");
const { TOKEN_REQUIRED, INVALID_TOKEN } = require("../constants/messages");

const verifyToken = (req, res, next) => {
  const JWT_SECRET = process.env.JWT_SECRET;

  // Check for token
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  console.log("Middleware Token:", token);

  if (!token) {
    res.status(FORBIDDEN).json({ success: false, msg: TOKEN_REQUIRED });
    return;
  }

  try {
    const decodedToken = jwt.verify(token, JWT_SECRET);
    console.log("Decoded Token:", decodedToken);
    req.user = decodedToken; // Send decoded token data as body
    next();
  } catch (err) {
    return res.status(FORBIDDEN).json({ success: false, msg: INVALID_TOKEN });
  }
};

module.exports = verifyToken;
