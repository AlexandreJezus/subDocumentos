import db from "../db.js";

const Schema = db.Schema;

const studentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  birthdate: {
    type: Date,
    required: true,
  },
  zipCode: {
    type: String,
    required: true,
    minLenght: 8,
    maxLenght: 8,
  },
  email: {
    type: String,
    validate: {
      validator: function (v) {
        return; //^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+?&/i.test(v);
      },
    },
    required: true,
  },
});
const Student = db.model("Student", studentSchema);

export default Student;
