CREATE TABLE IF NOT EXISTS todos (
  id SERIAL PRIMARY KEY,
  todo_body TEXT
);
INSERT INTO TODOS (todo_body) VALUES ('Todo added to make sure DB cononection is good');
INSERT INTO TODOS (todo_body) VALUES ('Lookup what happens when no index.html file is in public folder');
