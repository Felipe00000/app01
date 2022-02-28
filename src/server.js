const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.get("/", (req, res) => {
    res.json({ msg: "Olá" });
});
app.get("/users", (req, res) => {
    const user = [{ name: "Bruno" }, { name: "Carla" }]
    res.status(200).json({ msg: "Listagem de usuários.", user });
});
app.post("/users/newUser", (req, res) => {
    const user = req.body.user;
    if (user != undefined)
    res.status(200).json({ msg: "Usuário adicionado com sucesso" });
    else res.status(400).json({ msg: "Preencha o campo usuário" });
});
app.listen(3333, ()=>{
  console.log("Servidor na porta 3333");
});