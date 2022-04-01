import express from 'express'
import auth from './services/Auth.js'


const app = express()

const PORT = 8080
const msgs = []

app.use('/greet/:user/', auth)

app.post('/greet/:user/:msg?', function (req, res) {
    const msg = req.params.msg
    msgs.push(msg)
    res.send({ msg: "Your messege has been recived my guy" })
})

app.delete('/greet/:user/:index', function (req,res) {
    const index = req.params.index
    const msg = msgs.splice(index,1)
    res.send({msg:msg+ ' has been killed'})
})


app.put('/greet/:user/:oldMsg/:newMsg', function (req, res) {
    const newMsg = req.params.newMsg
    const oldMsg = req.params.oldMsg
    msgs[oldMsg] = newMsg
    res.send({ msg: "It's updated don't worry dude" })
})

app.get('/greet/:user/:msg?', function (req, res) { // the ? is to show that the parameter is optional

    res.send(msgs)

})




app.listen(PORT, function () {
    console.log('Up and running on port:' + PORT);
})

