const express = require('express');

var loginroute = express.Router();

function router(nav) {
    loginroute.route('/').
    get((req, res) => {
        res.render('login', { nav, tittle: "Login" })
    });
    return loginroute;
}

module.exports = router;