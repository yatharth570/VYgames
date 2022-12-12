module.exports = (req, res, next) => {
    if (!req.session.isLoggedIn) {
        console.log(req.session)
        return res.redirect('/login');
    }
    next();
}