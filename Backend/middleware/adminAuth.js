import jwt from 'jsonwebtoken';

const adminAuth = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.json({ success: false, message: 'Not Authorized Login Again' });
    }

    const token = authHeader.split(' ')[1]; // ✅ Extract token from Bearer format

    const token_decode = jwt.verify(token, process.env.JWT_SECRET);

    // You seem to be storing email+password inside the token
    const expected = process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD;
    if (token_decode !== expected) {
      return res.json({ success: false, message: 'Not Authorized Login Again' });
    }

    next();
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
};

export default adminAuth;
