import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  secondName: { type: String, required: true },
  age: { type: Number, required: true },
  classStream: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ClassStream",
  },
});

const Student = mongoose.model("Student", studentSchema);

export default Student;
