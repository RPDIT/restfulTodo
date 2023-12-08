const allTodos = "SELECT * FROM todos;";
const aTodo = "SELECT * FROM todos WHERE id = $1;"

const byName = "SELECT * FROM todos WHERE name = $1"
const newTodo = "INSERT INTO todos (name, date ,completed) VALUES ($1, $2, $3);";
const deleteTodo = "DELETE FROM todos WHERE ID = $1;";
const changeName = "UPDATE todos SET name = $1 WHERE ID = $2;";
const changeStatus = "UPDATE todos SET completed = NOT completed WHERE ID = $1;";
export default {
    allTodos, 
    aTodo, 
    newTodo,
    deleteTodo, 
    changeName, 
    changeStatus,
    byName
};
