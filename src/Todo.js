import React from 'react';



const Todo = (props) => {

    return (
        <div className="todo">
            <div>
            {props.title}
            </div>
            
        </div>
        
    );
}

export default Todo;