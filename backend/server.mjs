import express from 'express';
import { listTasks } from './db.mjs';
import { postTask } from './db.mjs';
import { putTask } from './db.mjs';
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

app.post('/tasks',async(req, res)=> {
    try{
        const {title, description} = req.body;
        await postTask(title,description);
        res.status(201).json({message:"Tarea creada"});

    }catch(error){
        res.status(404).json({error:"No se puedo crear la tarea"})
    }

});

app.put('/tasks/:id',async(req, res)=>{

    try{
        const {title, description,completed} = req.body;
        const {id} = req.params;
        await putTask(title,description,completed,id);
        res.status(201).json({message :"Tarea editada"});
    }catch(error){
        res.status(404).json({error:"No se pudo editar la tarea"});
    }

});

app.delete('/tasks/:id',(req, res)=>{

});
app.listen(3000,'127.0.0.1',()=>{
    console.log('listening on 127.0.0.1:3000')
});