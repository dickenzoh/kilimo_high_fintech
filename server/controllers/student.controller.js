import ClassStream from "../models/stream.model.js";
import Student from "../models/student.model.js";

// Student controller
export const saveStudent = (req, res) => {
  const { firstName, secondName, age, classStreamId } = req.body;
  const student = new Student({
    firstName,
    secondName,
    age,
    classStream: classStreamId,
  });
  student.save((err) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error saving student");
    } else {
      console.log(`Student '${firstName}' saved successfully.`);
      res.status(200).send("Student saved successfully");
    }
  });
};

export const editStudent = (req, res) => {
  const { studentId } = req.params;
  const { firstName, secondName, age, classStreamId } = req.body;
  console.log(req.body);
  Student.findByIdAndUpdate(
    studentId,
    { firstName, secondName, age, classStream: classStreamId },
    (err, student) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error updating student");
      } else if (!student) {
        res.status(404).send("Student not found");
      } else {
        console.log(
          `Student '${student.firstName}' data updated successfully.`
        );
        res
          .status(200)
          .send(`Student '${student.firstName}' data updated successfully.`);
      }
    }
  );
};

export const deleteStudent = (req, res) => {
  const { studentId } = req.params;
  Student.findByIdAndDelete(studentId, (err, student) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error deleting student");
    } else if (!student) {
      res.status(404).send("Student not found");
    } else {
      console.log(`Student '${student.firstName}' deleted successfully.`);
      res
        .status(200)
        .send(`Student '${student.firstName}' deleted successfully.`);
    }
  });
};

export const getStudent = (req, res) => {
  const { studentId } = req.params;
  Student.findById(studentId, (err, student) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error retrieving student");
    } else if (!student) {
      res.status(404).send("Student not found");
    } else {
      res.json(student);
    }
  });
};

export const getAllStudents = (req, res) => {
  Student.find({}, (err, students) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error retrieving students");
    } else {
      res.json(students);
    }
  });
};

export const getStudentsByClassStream = (req, res) => {
  const { classStreamId } = req.params;
  Student.find({ classStream: classStreamId })
    .populate("classStream")
    .exec((err, students) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error retrieving students");
      } else {
        res.json(students);
      }
    });
};
