import express from 'express'
import mongoose from 'mongoose'
import data from './data.js'
import videos from './dbModel.js'
import cors from 'cors'

const app=express()
const port=9000
const connection__url='mongodb+srv://lobo:Redondos2@cluster0.iloc7.mongodb.net/tiktok?retryWrites=true&w=majority'

mongoose.connect(connection__url,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
})

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())



app.get('/',(req,res) => res.status(200).send('holis chiques'))
app.get('/posts',(req,res)=>res.status(200).send(data))
app.get('/v2/posts',(req,res)=>{
    videos.find((err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    })
})

app.post('/v2/posts',(req,res)=>{
    const dbVideos=req.body
    videos.create(dbVideos,(err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    })
})


app.listen(port,()=>console.log(`listening on localhost:${port}`))