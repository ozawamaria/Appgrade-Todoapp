import React from 'react';

const TodoItem = ({ props, onCheck }) => {
    const handleChange = () => {
        onCheck(props);
    };

    return (
        <label className="panel-block">
            <input type="checkbox" checked={props.done} onChange={handleChange} />
            {props.text}
        </label>
    );
};

export default TodoItem;