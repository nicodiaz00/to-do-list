import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

const db = await open({
    filename: 'tasks_db.sqlite',
    driver: sqlite3.Database
});