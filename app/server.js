import express from "express";
import bookRouter from "./routers/BookRouter.js";

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Successful Response');
});

app.use("/book", bookRouter);

app.listen(port, ()=> console.log('listening on port ', port));