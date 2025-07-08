import express from 'express';
import { listTasks } from './db.mjs';
const app = express();


app.use(express.json());

app.get('/tasks', async(req, res) =>{
    try{
        const tasks = await listTasks();
        res.status(200).json(tasks);
    }catch(error){
        res.status(404).json({error:"no hay tareas"})
    }
    

});

app.post('/tasks',(req, res)=> {

});

app.put('/tasks/:id',(req, res)=>{

});

app.delete('/tasks/:id',(req, res)=>{

});
app.listen(3000,'127.0.0.1',()=>{
    console.log('listening on 127.0.0.1:3000')
});