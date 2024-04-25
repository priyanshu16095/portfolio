import React, { useState } from 'react'

function TodoList() {
    const[todos, setTodos] = useState([])
    const[todoInput, setTodoInput] = useState('')

    function handleAddTodo() {
        let arr = [...todos]
        if(todoInput) {
            arr.push(todoInput)
            setTodos(arr)
            setTodoInput('')
            return
        }
        alert('Enter something to add!')
    }
    function handleRemoveTodo(index) {
        let arr =[...todos]
        arr.splice(index, 1)
        setTodos(arr)        
    }

  return (
    <div className='todolist'>
        <div className="todolistBody flex-v">
            <p className="title">Todo List</p>
            <div className="todolistContainer bigContainer flex-v">
                <div className="inputBox">
                    <input value={todoInput} type="text" placeholder='Enter' onChange={e => setTodoInput(e.target.value)} />
                    <button onClick={handleAddTodo} className='button'>Add</button>
                </div>
                <div className="todos flex-v">
                {todos && todos.length ?
                todos.map((todo, index) => (
                    <div className='todo flex-h'>
                        <p key={index} className='key'>{todo}</p>
                        <button className='button' onClick={() => handleRemoveTodo(index)}>Remove</button>
                    </div>
                ))
                : null}
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default TodoList
