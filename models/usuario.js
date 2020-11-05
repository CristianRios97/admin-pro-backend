const { Schema, model } = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');




const UsuarioSchema = Schema({
    nombre: {
        type: String,
        requiere: true

    },
    email: {
        type: String,
        requiere: true,
        unique: true
    },
    password: {
        type: String,
        requiere: true
    },
    img: {
        type: String
    },
    role: {
        type: String,
        requiere: true,
        default: 'USER_ROLE'

    },
    google: {
        type: Boolean,
        default: false

    }

});
UsuarioSchema.method('toJSON', function() {
    const { __v, _id, password, ...object } = this.toObject();
    object.uid = _id;
    return object;
})
UsuarioSchema.plugin(mongoosePaginate);
module.exports = model('Usuario', UsuarioSchema);
