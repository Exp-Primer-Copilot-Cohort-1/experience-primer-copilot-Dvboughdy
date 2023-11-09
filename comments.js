// Crea una conexión con una base de datos de MongoDB y devuelve un modelo de comentario
// =============================================================================

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Modelo de Comentario
var CommentSchema = new Schema({
    ConstantSourceNode: String,
});