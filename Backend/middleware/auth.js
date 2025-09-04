// middleware/auth.js
import jwt from "jsonwebtoken";

const authUser = async (req, res, next) => {
  try {
    const token = req.headers.token;
    if (!token) {
      return res.json({
        success: false,
        message: "Unauthorized Access. Please Login Again.",
      });
    }
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = token_decode.id; // Add the user ID to the request object
    next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error with authentication" });
  }
};

export default authUser;