import express from "express";
const router = express.Router();

const msgs = [];

router.post("/:user", function (req, res) {
  const msg = req.body;
  msg.id = Date.now();
  msgs.push(msg);
  res.send({ msg: "Your message has been received my guy " });
});

router.delete("/:user/:index", function (req, res) {
  const { id } = req.body;
  const index = msgs.findIndex((msg) => msg.id == id);
  if (msgs[index]) {
    const [msg] = msgs.splice(index, 1);

    res.send({ msg: `msg with id :${msg.id} has  been deleted` });
    return;
  }
});

router.put("/:user/", function (req, res) {
  const { id, newMsg } = req.body;
  const msg = msgs.find((msg) => msg.id == id);
  if (msg) {
    msg.msg = newMsg;
    res.send({ msg: "It's updated don't worry dude" });
  }
});

router.get("/:user/:msg?", function (req, res) {
  // the ? is to show that the parameter is optional

  res.send(msgs);
});

export default router;
