/*

'/api/hospitales'

*/

const { Router } = require('express');
const { validarCampos } = require('../middlewares/validar-campos')
const { crearMedico, getMedicos, actualizarMedico, borrarMedico } = require('../controllers/medicos');
const { check } = require('express-validator');
const { validarJWT } = require('../middlewares/validar-jwt');
const router = Router();


router.get('/', getMedicos);
router.post('/', [
        // validar campos si no es un id valido de mongo db
        validarJWT,
        check('nombre', 'El nombre del medico es necesario').not().isEmpty(),
        check('hospital', 'El hospital id debe de ser válidado ').isMongoId(),

        validarCampos
    ],
    crearMedico);


router.put('/:id', [

        validarJWT,
        check('nombre', 'El nombre del médico es necesario').not().isEmpty(),
        check('hospital', 'El hospital id debe de ser válidado ').isMongoId(),
        validarCampos
    ],

    actualizarMedico);



router.delete('/:id',
    validarJWT,
    borrarMedico);
module.exports = router;