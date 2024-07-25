import express from "express"
import dotenv from "dotenv"
import connectToMongoDb from "./db/connectoMongoDb.js"
import authRoutes from "./routes/auth.route.js"
import bodyParser from "body-parser"
import cookieParser from "cookie-parser";
import postRoutes from "./routes/post.route.js"

dotenv.config()
const app = express()
const port = process.env.PORT || 5000;


// console.log('PORT:', process.env.PORT);
// console.log('MongoDB:', process.env.MONGODB_URI);

app.use(express.json()) // // it is a middleware or regular function which runs btw req and res.
// parse the req.body  

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(cookieParser())
app.use(express.urlencoded({extended: true}))

app.get("/", (req, res) => {
   res.send("Hello Universe")
})

app.use("/api/auth", authRoutes)
app.use("/api/posts", postRoutes)

app.listen(port, ()=> {
  console.log(`App is running of port http://localhost:${port}`)
  connectToMongoDb()
})