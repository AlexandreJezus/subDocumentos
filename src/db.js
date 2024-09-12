import mongoose from "mongoose";

const mongoDB =
  "mongodb+srv://alexandrejezusp:SulJckJqv9Sn4LGe@cluster0.yklln.mongodb.net/";

const database = "armario";

const main = async () => {
  mongoose.connect(mongoDB + database);
};

main()
  .then(() => console.log("Conectado com sucesso"))
  .catch((err) => console.log(err));

export default mongoose;
