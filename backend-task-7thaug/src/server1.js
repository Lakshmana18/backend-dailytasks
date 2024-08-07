import cors from 'cors';
import express from 'express';
import { connectToDB } from "./db.js";

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.json("Em chestunav ra buddoda rey nuvvey itu chudu bey arey itu chudamantey em pikutunav ra ohoo neeeeku 83 marks vachayi ani pogaru aaa? sare nuvvey team ni nadipinchu neeee abaya hasthalutho nadipichu mowa😘");
})


connectToDB(() => {
    app.listen(9000, () => {
        console.log("server running at 9000");
    })
})