import mongoose, { connect } from "mongoose";

const connectToMongoDb = async () => {

  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`Successfully Connect to MONGODB ${conn.connection.host}`)
  } catch (error) {
     console.error(`Error while connection to MongoDb ${error.message}`);
     process.exit(1)
  }
}

export default connectToMongoDb;