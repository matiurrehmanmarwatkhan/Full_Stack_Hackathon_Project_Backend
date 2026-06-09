import express from "express";
import cors from "cors";
import { config } from "dotenv";
import connectDB from "./connection/db_connection.js";
import allRoutes from "./routes/index.js";

// Database Connection
config();

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 2000;
app.use(
  cors({
    origin: ["https://full-stack-hackathon-project-fronte.vercel.app","http://localhost:5173"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

connectDB();
// routes all
app.use("/api", allRoutes);

app.get("/", (req, res) => {
  res.send("Server Running");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
