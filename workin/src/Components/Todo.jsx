import React, { useState } from 'react'

const Todo = () => {
    const [list, setList] = useState([]);
    const [typed , setTyped] = useState('');
    const addlist = ()=>{
        setList(old => [...old , typed]);
        setTyped('')
    }

    const typing = (e)=>{
        setTyped(e.target.value);
    }
  return (
    <div>
        <h1>Todo</h1>
        <input type='text' placeholder='add to do' onChange={typing} value={typed}></input>
        <button onClick={addlist}> add</button>
        {list.map((elem)=>{
            return(
                <p>{elem}</p>
            )
        })}

    </div>
  )
}

export default Todo
