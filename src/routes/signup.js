const express = require('express');

var signuprouter = express.Router();

function router(nav) {
    signuprouter.route('/').
    get((req, res) => {
        res.render('sign-up', { nav, tittle: "Signup" })
    });
    return signuprouter;
}

module.exports = router;