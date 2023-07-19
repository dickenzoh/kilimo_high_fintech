import ClassStream from "../models/stream.model.js";

// ClassStream controller
export const saveClassStream = async (req, res) => {
  const { name } = req.body;
  const classStream = new ClassStream({ name });
  classStream.save((err) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error saving class stream");
    } else {
      console.log(`Class stream '${name}' saved successfully.`);
      res.status(200).send(`Class stream '${name}' saved successfully.`);
    }
  });
};

export const getAllClassStreams = async (req, res) => {
  ClassStream.find({}, (err, classStreams) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error retrieving class streams");
    } else {
      res.json(classStreams);
    }
  });
};

export const getClassStream = async (req, res) => {
  const { classStreamId } = req.params;
  ClassStream.findById(classStreamId, (err, classStream) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error retrieving class stream");
    } else if (!classStream) {
      res.status(404).send("Class stream not found");
    } else {
      res.json(classStream);
    }
  });
};

export const deleteClassStream = async (req, res) => {
  const { classStreamId } = req.params;
  ClassStream.findByIdAndDelete(classStreamId, (err, classStream) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error deleting class stream");
    } else if (!classStream) {
      res.status(404).send("Class stream not found");
    } else {
      console.log(`Class stream '${classStream.name}' deleted successfully.`);
      res.status(200).send("Class stream deleted successfully");
    }
  });
};
