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