import mongoose from "mongoose";

const ClassStreamSchema = mongoose.Schema({
  name: { type: String, required: true },
});

const ClassStream = mongoose.model("ClassStream", ClassStreamSchema);

export default ClassStream;
