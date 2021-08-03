import {createConnection} from "typeorm";
import {Post} from "./entity/Post";
import {Category} from "./entity/Category";
import Express from 'express'
const app=Express()
createConnection().then(connection=>{
    const postRepo = connection.getRepository(Post);
    app.get('/',async(req,res)=>{
        let result=await postRepo.find()
        res.send(result)
    })
})
app.listen(3555,()=>{
    console.log("Listening")
})

