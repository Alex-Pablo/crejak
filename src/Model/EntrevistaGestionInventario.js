import mongoose from "mongoose";

const EntrevistaGestionInventario = mongoose.Schema(
  {
    pregunta1: String,
    pregunta2: String,
    pregunta3: String,
    pregunta4: String,
    pregunta5: String,
    pregunta6: String,
    pregunta7: String,
    pregunta8: String,
    pregunta9: String,
    idUser: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.EntrevistaGestionInventario || mongoose.model("EntrevistaGestionInventario", EntrevistaGestionInventario);