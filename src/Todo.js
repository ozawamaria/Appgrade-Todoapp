import React, { useState } from 'react';

const Todo =()=>{
    const getKey = () => Math.random().toString(32).substring(2);

    const [items,setItems]=React.useState([
        { key: getKey(), text: 'Learn JavaScript', done: false },
        { key: getKey(), text: 'Learn React', done: false },
        { key: getKey(), text: 'Get some good sleep', done: false },
    ]);
  
    return(
        <div className="panel">
            <div className="panel-heading">
            ⚛️React Todo App
            </div>
            {items.map(item=>(
                <label className="panel-block">
                    <input type="checkbox" />
                    {item.text}
                </label>
            ))}
        </div>
    );
}

export default Todo;
