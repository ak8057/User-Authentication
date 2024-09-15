import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import createError from "../utils/appError.js";

//!REGISTER USER
const signup = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (user) {
      return next(new createError("User already exists!", 400));
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 12);
    const newUser = await User.create({
        ...req.body,
        password: hashedPassword,
    });

    //!assign jwt token to user(json web token)
    const token = jwt.sign({ _id: newUser._id }, "secretkey123", {
        expiresIn: "90d",
    });

    res.status(201).json({
      status: "success",
      message: "User registered succesfully",
      token,
    });
  } catch (error) {
    next(error);
  }
};


const login = async (req, res, next) => {
 
};

export default {signup, login}