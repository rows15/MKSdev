import express from 'express';

const app = express();

app.get("/", (req, res) => {res.send("Tis Worken")});
/* app.get('/',(req, res) =>{
    res.send("Funfando");
}) */
app.listen(3001,()=> {
    console.log("rodando ")
});