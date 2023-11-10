import mongoose from "mongoose";

export default async function connect() {
  await mongoose.connect(
    "mongodb+srv://admin:admin123@quiz.5wjdpxp.mongodb.net/?retryWrites=true&w=majority"
  );
  console.log("Database Connected");
}
