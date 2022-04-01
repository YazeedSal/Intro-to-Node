const auth = function (req, res, next) {
    const user = req.params.user
    if (user == 'yazeed') {
        next()
    }
    res.send({ msg: "You're not that guy bro" })
}

export default auth