import db from "../db.js";
import Student from "./student_model.js";

const Schema = db.Schema;

const lockerSchema = new Schema({
  height: {
    type: Number,
    required: true,
    min: 0,
  },
  width: {
    type: Number,
    required: true,
    min: 0,
  },
  lenght: {
    type: Number,
    required: true,
    min: 0,
  },
  student: {
    type: Schema.Types.ObjectId,
    ref: "Student",
  },
});

const Locker = db.model("Locker", lockerSchema);

const estudante = new Student({
  name: "Pedro",
  birthdate: "2000/10/10",
  zipCode: "8888 8888",
  email: "pedro@email.com",
});

estudante.save();

console.log(estudante);

const armario = new Locker({
  height: 0.3,
  width: 0.3,
  lenght: 0.3,
  student: estudante._id,
});

armario.save();

const busca = async () => {
  return Locker.findById(armario._id).populate("student");
};

const buscaArmario = await busca();

console.log(buscaArmario);

export default Locker;
