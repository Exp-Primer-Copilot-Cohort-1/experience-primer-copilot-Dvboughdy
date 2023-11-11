use("multimedia")
/* Mostrar el documento sin el Array */
db.media.find(
  { titulo: "Matrix" },
  { actores: 0, _id: 0 }
)