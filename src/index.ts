import express from 'express';

const app = express();

app.get("/", (req, res) => res.send("Tis Worken"));

app.listen(3001);