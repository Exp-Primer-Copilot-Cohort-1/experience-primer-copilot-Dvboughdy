use("multimedia")
/* Mostrar el documento con valore especificos */
db.media.find(
  { titulo: "Matrix" },
  { tipo: 1, titulo: 1, _id: 0 }
)