import cors from 'cors';
 import express from 'express';
 import { connectToDB, db } from "./db.js";

 const app = express()
 app.use(cors())
 app.use(express.json())
 app.get('/', (req, res) => {
     res.json("server is running successfully!");
 })
//  app.post('/insert', async(req, res) => {
//      await db.collection("day5").insertOne({Name:req.body.name,Team:req.body.team})
//      .then((result)=>{
//          res.json(result)
//      })
//      .catch((e)=>console.log(e))
//  })
//  app.post('/insertmany', async(req, res) => {
//      await db.collection("day5").insertMany([req.body])
//      .then((result)=>{
//          res.json(result)
//      })
//      .catch((e)=>console.log(e))
//  })
//  app.post('/findone', async(req, res) => {
//      await db.collection("day5").findOne({Name:"Kousik"})
//      .then((result)=>{
//          res.json(result)
//      })
//      .catch((e)=>console.log(e))
//  })
//  app.post('/find', async(req, res) => {
//      await db.collection("day5").find().toArray()
//      .then((result)=>{
//          res.json(result)
//      })
//      .catch((e)=>console.log(e))
//  })
//  app.post('/deleteone', async(req, res) => {
//      await db.collection("day5").deleteOne({Name:"Hari",gender:"male"})
//      .then((result)=>{
//          res.json(result)
//      })
//      .catch((e)=>console.log(e))
//  })
//  app.post('/deletemany', async(req, res) => {
//      await db.collection("day5").deleteMany()
//      .then((result)=>{
//          res.json(result)
//      })
//      .catch((e)=>console.log(e))
//  })
//  app.post('/updateone', async(req, res) => {
//      await db.collection("day5").updateOne({Name:"Hari"},{$set:{salary:"20k"}})
//      .then((result)=>{
//          res.json(result)
//      })
//      .catch((e)=>console.log(e))
//  })
//  app.post('/updatemany', async(req, res) => {
//      await db.collection("day5").updateMany({Name:"Hari"},{$set:{grade:"A",hike:"2k"}})
//      .then((result)=>{
//          res.json(result)
//      })
//      .catch((e)=>console.log(e))
//  })

 app.post('/updatelte', async(req, res) => {
    await db.collection("day5").updateMany({Age:{$lte:20}}, {$set: {demotion:"late submission of project"}})
    .then((result)=>{
        res.json(result)
    })
    .catch((e)=>console.log(e))
})


app.post('/updategte', async(req, res) => {
    await db.collection("day5").updateMany({Age:{$gte:25}}, {$set: {points:83}})
    .then((result)=>{
        res.json(result)
    })
    .catch((e)=>console.log(e))
})


app.post('/updateeq', async(req, res) => {
    await db.collection("day5").updateMany({Name:{$eq:"Aparna"}}, {$set: {points:83}})
    .then((result)=>{
        res.json(result)
    })
    .catch((e)=>console.log(e))
})


app.post('/updatene', async(req, res) => {
    await db.collection("day5").updateMany({Name:{$ne:"Aparna"}}, {$set: {points:83}})
    .then((result)=>{
        res.json(result)
    })
    .catch((e)=>console.log(e))
})
 
 connectToDB(() => {
     app.listen(9002, () => {
         console.log("server running at 9002");
     })
 }) 