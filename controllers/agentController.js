import {
  registerAgentValidator,
  loginAgentValidator,
  updateAgentValidator,
} from "../validators/agentValidator.js";
import AgentModel from "../models/agentModel.js"; 
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerAgent = async (req, res, next) => {
  try {
    // Validate agent input
    const { error, value } = registerAgentValidator.validate(req.body);
    if (error) {
      return res.status(422).json(error.details[0].message);
    }
    // Check if agent already exists
    const agent = await AgentModel.findOne({ email: value.email });
    if (agent) {
      return res.status(409).json("Agent already exists!");
    }

    // Hash their password
    const hashedPassword = bcrypt.hashSync(value.password, 10);
    // Save agent into the database
    await AgentModel.create({
      ...value,
      password: hashedPassword,
    });

    res.json("Agent registered!");
  } catch (error) {
    next(error);
  }
};

export const loginAgent = async (req, res, next) => {
  try {
    // Validate agent input
    const { error, value } = loginAgentValidator.validate(req.body);
    if (error) {
      return res.status(422).json(error.details[0].message);
    }
    // Find one Agent with identifier
    const agent = await AgentModel.findOne({ email: value.email });
    if (!agent) {
      return res.status(404).json("Agent does not exist!");
    }
    // Compare their passwords
    const correctPassword = bcrypt.compareSync(value.password, agent.password);
    if (!correctPassword) {
      return res.status(401).json("Invalid credentials!");
    }
    // Sign a token for agent
    const token = jwt.sign({ id: agent.id }, process.env.JWT_SECRET, {
      expiresIn: "24h",
    });
    // Respond to request
    res.json({
      message: "Agent logged in!",
      accessToken: token,
    });
  } catch (error) {
    next(error);
  }
};

export const getProfile = async (req, res, next) => {
  try {
    // Find authenticated agent from database
    const agent = await AgentModel.findById(req.auth.id).select("-password");
    if (!agent) {
      return res.status(404).json("Agent not found!");
    }
    res.json(agent);
  } catch (error) {
    next(error);
  }
};

export const logoutAgent = (req, res) => {
  res.json("Agent logged out!");
};

export const updateProfile = async (req, res, next) => {
  try {
    // Validate Agent input
    const { error, value } = updateAgentValidator.validate(req.body);
    if (error) {
      return res.status(422).json(error.details[0].message);
    }
    // Update Agent
    await AgentModel.findByIdAndUpdate(req.auth.id, value, { new: true });
    res.json("Agent profile updated!");
  } catch (error) {
    next(error);
  }
};
