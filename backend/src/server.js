import express from "express"
import cors from "cors"
import {serve} from "inngest/express"
import { ENV } from './lib/env.js'
import { connectDB } from "./lib/db.js"
import { functions, inngest } from "./lib/inngest.js"
import {clerkMiddleware} from "@clerk/express"
import chatRoutes from "./routes/chatRoutes.js"

const app = express()

//Middleware
app.use(express.json())
app.use(cors({origin:ENV.CLIENT_URL, credentials: true})) //get url from deployed app//credentials: true meaning => Server allows a browser to include cookies on request
app.use(clerkMiddleware()) //this add auth field to request object: req.auth()

app.use("/api/inngest", serve({client: inngest, functions}))
app.use("/api/chat", chatRoutes)

app.get("/health1", (req, res) => {
    res.status(200).json({ msg: "success from health" })
})

const startServer = async () => {
    try {
        await connectDB()
        app.listen(ENV.PORT, () => {console.log("Server is running on port:", ENV.PORT)})
    } catch (error) {
        console.error("Erro staring the server", error)
    }
}

startServer()

// const __dirname = path.resolve()
// import path from "path"
//make ready for deployment
// if (ENV.NODE_ENV === "production") {
//     app.use(express.static(path.join(__dirname, "../frontend/dist")))

//     app.get("/{*any}", (req, res) => {
//         res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"))
//     })
// }
