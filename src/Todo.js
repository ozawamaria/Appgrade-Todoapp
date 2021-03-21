import React, { useState } from 'react';

import TodoItem from './components/TodoItem';

const getKey = () => Math.random().toString(32).substring(2);

const Todo = () => {

    const [items, setItems] = React.useState([
        { key: getKey(), text: 'Learn JavaScript', done: false },
        { key: getKey(), text: 'Learn React', done: false },
        { key: getKey(), text: 'Get some good sleep', done: false },
    ]);

    const handleCheck = checked => {
        const newItems = items.map(item => {
            if (item.key === checked.key) {
                item.done = !item.done;
            }
            return item;
        });
        setItems(newItems);
    };

    return (
        <div className="panel">
            <div className="panel-heading">
                ⚛️React Todo App
            </div>
            {items.map(item => (
                <TodoItem
                    key={item.text}
                    item={item}
                    onCheck={handleCheck}
                />
            ))}
            <div className="panel-block">
                {items.lemgth} items
            </div>
        </div>
    );
}

export default Todo;
