import React from "react";
import { useState} from "react";
import './Button.css'


const initalState = [
    {id: 1, header: 'do shopping ', done: false},
    {id: 2, header: 'pay the bills', done: false}
];

const Button = () =>{
    
    
    const[todos, setTodos] = useState(initalState);
    const[newTodo, setNewTodo] = useState('')
    

    const addNewTodo = () =>{
        setTodos([...todos,{id: Date.now(), header: newTodo, done:false}]);
             setNewTodo('');

    }

    const clear = () =>{
        setTodos(todos.filter(item => !item.done))
    }

    const markCompleted = (id) =>{
        setTodos(
            todos.map(item =>
                item.id === id ? {...item, done : !item.done} :item)
        )
        }



 return (

    <div className="Button">
        <h1> ToDo List </h1>
        <div className="input-form-container">
            <input className="input-form" value={newTodo}
            onChange={e =>setNewTodo(e.target.value)}
             placeholder=" listeye ekle..." />
            <button className="btn-list-add" onClick={ addNewTodo}> Add </button>
        </div>
        <div className="list">
            {todos.map((todo,index) =>(
                <div key={index} onClick={() =>markCompleted(todo.id)} className={todo.done ? 'yes' : 'no'}>{todo.header}</div>
            ))}
        </div>
        <button  onClick={clear}  className="btn-clear">Clear Dones</button>
    </div>
    
    
)};
export default Button;