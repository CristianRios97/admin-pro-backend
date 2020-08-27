const jwt = require('jsonwebtoken');



const generarJWT = (uid) => {

    return new Promise((reolve, reject) => {

        const payload = {
            uid,

        };
        jwt.sign(payload, process.env.JWR_SECRET, {
            expiresIn: '12h'
        }, (err, token) => {
            if (err) {
                console.log(error);
                reject('No se pudo generar el jsonToken');
            } else {
                reolve(token);
            }


        });

    });


}


module.exports = {
    generarJWT

}
