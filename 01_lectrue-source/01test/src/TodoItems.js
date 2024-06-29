import { useEffect } from "react";


function TodoItems({todos, setTodos}) {
    const removeTodo = id => {
        const removedList = todos.filter(todo => todo.id !== id);
        setTodos(removedList);
    }
    
    const onChangeHandler = e => {
        const changedIsDoneList = todos.map(todo => {
            if (todo.id === parseInt(e.target.id)) {
                todo.isDone = e.target.checked;
            }
            return todo;
        });
        setTodos(changedIsDoneList);
    }

    
    const modifyhandler = (e) => {
        const modfiycheck = todos.map(todo => {
            if(todo.id == e.target.id){
                todo.isModify = !todo.isModify
            }
            return todo;
        })
        setTodos(modfiycheck);
    }

    const modifytexthandler = e => {
        const modifytext = todos.map( todo => {
            if(todo.id == e.target.id){
                todo.description = e.target.value
            }
            return todo;
        })
        setTodos(modifytext);
    }

    
    return (
        <>
            { 
                todos.map(todo => (
                    <p key={todo.id}>
                        <input type="checkbox" id={todo.id} onChange={onChangeHandler}/>
                        <label
                            htmlFor={todo.id} 
                            style={{textDecoration: todo.isDone ? 'line-through' : 'none'}}
                        >
                            {todo.description}
                        </label>
                        <button onClick={() => removeTodo(todo.id)}>x</button>
                        <input id={todo.id} type="text" value={todo.description} onChange={modifytexthandler} style={{display : todo.isModify ? 'block' : 'none'}}/>
                        <button id={todo.id} onClick={modifyhandler}>수정하기</button>
                    </p>
                ))
            }
        </>
    );
}

export default TodoItems;