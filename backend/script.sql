CREATE TABLE IF NOT EXISTS TASKS (
  Id INTEGER PRIMARY KEY AUTOINCREMENT,
  Title VARCHAR(20) NOT NULL,
  Description_ VARCHAR(100) NOT NULL,
  Completed BOOLEAN NOT NULL,
  CreateDate DATE NOT NULL
);

INSERT INTO TASKS (Title, Description_, Completed, CreateDate)
VALUES ('Tarea inicial', 'Tarea ejemplo', 0, DATE('now'));
