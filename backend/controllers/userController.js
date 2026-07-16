import userModel from "../models/userModel.js";
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const salt = await bcrypt.genSalt(10);

// Generate JWT token using user ID
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

// -------------------- User Login --------------------
const loginUser = async (req, res) => {
  try {
    // Get email and password from request body
    const { email, password } = req.body;

    // Check if user exists
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "User doesn't exist" });
    }

    // Compare entered password with stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);

    // Generate token if password is correct
    if (isMatch) {
      const token = createToken(user._id);
      return res.json({ success: true, token });
    }

    res.json({ success: false, message: "Incorrect password" });
  } catch (error) {
    console.log(error);
  }
};

// -------------------- User Registration --------------------
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check whether user already exists
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({
        success: false,
        message: "User already exists, try logging in",
      });
    }

    // Validate email format
    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Enter a valid email",
      });
    }

    // Validate password length
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Password must be at least 8 characters",
      });
    }

    // Hash password before storing in database
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create and save new user
    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
    });

    const user = await newUser.save();

    // Generate token for newly registered user
    const token = createToken(user._id);

    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// -------------------- Admin Login --------------------
const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (
      email === process.env.ADMIN_MAIL &&
      password === process.env.ADMIN_PASS
    ) {
      const token = jwt.sign(email + password, process.env.JWT_SECRET);
      res.json({ success: true, token });
    } else {
      res.json({ success: false, message: "Invalid credentials" });
    }
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export { loginUser, registerUser, adminLogin };
