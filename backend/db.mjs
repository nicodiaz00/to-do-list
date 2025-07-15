import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

const db = await open({
    filename: 'tasks_db.sqlite',
    driver: sqlite3.Database
});

export async function listTasks() {

    return await db.all('Select * from TASKS');

    
}

export async function postTask(title, description) {
        await db.run(`
    INSERT INTO TASKS (Title, Description_, Completed, CreateDate)
    VALUES (?, ?, 0, DATE('now'))`,[title,description]);

 
}

export async function putTask(title, description,completed,id){
    await db.run(`UPDATE TASKS set Title = ?, Description_ = ?, Completed = ? where Id = ?`,[title,description,completed,id]);
}

export async function deleteTask(id) {
    await db.run(`DELETE FROM TASKS WHERE Id = ?`,[id])
    
}