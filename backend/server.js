import express from "express"
import dotenv from "dotenv"
import connectToMongoDb from "./db/connectoMongoDb.js"
import authRoutes from "./routes/auth.route.js"




dotenv.config()
const app = express()
const port = process.env.PORT || 5000;


// console.log('PORT:', process.env.PORT);
// console.log('MongoDB:', process.env.MONGODB_URI);


app.get("/", (req, res) => {
   res.send("Hello Universe")
})

app.use("/api/auth", authRoutes)

app.listen(port, ()=> {
  console.log(`App is running of port http://localhost:${port}`)
  connectToMongoDb()
})