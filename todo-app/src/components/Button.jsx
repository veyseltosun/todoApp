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
    console.log(newTodo)
 return (

    <div className="Button">
        <h1> Yapılacaklar Listesi</h1>
        <div className="input-formu">
            <input value={newTodo}
            onChange={e =>setNewTodo(e.target.value)}
             placeholder="listeye ekle" />
            <button>Ekle</button>
        </div>
        <div className="liste">
            {todos.map((todo,index) =>(
                <div key={index} onClick={() =>{
                    setTodos(
                        todos.map(item =>
                            item.id === item.id ? {...item, done : !item.done} :item)
                    )
                }} className={todo.done ? 'yes' : 'no'}>{todo.header}</div>
            ))}
        </div>
        <button className="temizle">Tamamlananları Temizle</button>
    </div>
    
    
)};
export default Button;