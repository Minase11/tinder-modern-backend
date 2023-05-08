import mongoose from "mongoose";

const schema = mongoose.Schema({
  name: String,
  imgUrl: String,
});

export default mongoose.model("cards", schema);
