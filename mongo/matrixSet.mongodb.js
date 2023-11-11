use("matrix")

//coleccion de medicamentos
db.media.insertMany([
  {
    "tipo": "libro",
    "titulo": "Java para todos",
    "ISBN": "987-1-2344-5334-8",
    "editorial": "Anaya",
    "autores": ["Pepe Caballero", "Isabel Sanz", "Timoteo Marino"],
    "capitulos": [
      {
        "capitulo": 1,
        "titulo": "Primeros pasos en Java",
        "longitud": 20
      },
      {
        "capitulo": 2,
        "titulo": "Primeros pasos en Java",
        "longitud": 25
      }
    ]
  },
  {
    "tipo": "CD",
    "artista": "Los piratas",
    "titulo": "Recuerdos",
    "canciones": [
      {
        "cancion": 1,
        "titulo": "Adiós mi barco",
        "longitud": "3:20"
      },
      {
        "cancion": 2,
        "titulo": "Pajaritos",
        "longitud": "4:15"
      }
    ]
  },
  {
    "tipo": "DVD",
    "titulo": "Matrix",
    "estreno": 1999,
    "actores": [
      "Keanu Reeves",
      "Carry-Anne Moss",
      "Laurence Fishburne",
      "Hugo Weaving",
      "Gloria Foster",
      "Joe Pantoliano"
    ]
  }
]
)
db.media.find()



