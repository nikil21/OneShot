import express from "express"
import cors from "cors"
import colleges from "./api/colleges.route.js"

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/v1/colleges", colleges)
app.use("*", (req, res) => res.status(404).json({error: "not found"}))

export default app 