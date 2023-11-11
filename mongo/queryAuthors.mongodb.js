use("multimedia")
/* Mostrar los autores compuestos dentro del Array */
db.media.find(
  { titulo: "Matrix" },
  { actores: 1, _id: 0 }
)