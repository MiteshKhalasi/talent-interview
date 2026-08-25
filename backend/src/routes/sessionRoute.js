import express from "express"

import { protectRoute } from "../middleware/protectRoute.js"

import {
    createSession,
    getActiveSessions,
    getMyRecentSessions,
    getSessionById,
    joinSession,
    endSession
} from "../controllers/sessionController.js"

const router = express.Router()

// Create session
router.post("/", protectRoute, createSession)

// Get active sessions
router.get("/active", protectRoute, getActiveSessions)

// Get my recent sessions
router.get("/my-recent", protectRoute, getMyRecentSessions)

// Get single session
router.get("/:id", protectRoute, getSessionById)

// Join session
router.post("/:id/join", protectRoute, joinSession)

// End session
router.post("/:id/end", protectRoute, endSession)

export default router