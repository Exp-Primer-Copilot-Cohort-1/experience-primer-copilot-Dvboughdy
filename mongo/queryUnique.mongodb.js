use("matrix")
db.media.find(
  { titulo: "Matrix" },
  { tipo: 1, titulo: 1, _id: 0 }
)