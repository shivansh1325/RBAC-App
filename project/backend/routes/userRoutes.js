const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/userModel");
const { generateToken } = require("../utils/jwtUtils");
const { protect, authorize } = require("../middleware/authMiddleware");

const router = express.Router();

// Register
router.post("/register", async (req, res) => {
    const { username, password, role } = req.body;

    try {
        const user = await User.create({ username, password, role });
        res.status(201).json({ message: "User registered successfully", userId: user.id });
    } catch (error) {
        res.status(400).json({ message: "Error registering user", error });
    }
});

// Login
router.post("/login", async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const token = generateToken(user.id, user.role);
        res.json({ token, message: "Login successful" });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
});

// Admin-Only Endpoint
router.get("/admin", protect, authorize(["Admin"]), (req, res) => {
    res.json({ message: "Welcome Admin, this is a protected endpoint." });
});

module.exports = router;
