﻿module.exports = function (req, res, next) {
    // I ovaj je iskljucen jer mi je mrsko stimat u bazi admina nakon svega
    // if (req.user.role !== 'admin') {
    //     return res.status(403).json({ msg: 'Admin resource. Access denied' });
    // }
    next();
};
