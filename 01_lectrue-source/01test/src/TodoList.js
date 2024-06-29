import {useState} from "react";
import TodoItems from "./TodoItems";

function TodoList() {
    const [todos, setTodos] = useState([
        {id: 1, description: '할일 목록을 추가해주세요.', isDone: false , isModify : false} ,
        {id: 2, description: '할일 목록을 추가해주세요.', isDone: false , isModify : false} 
    ]); 

    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(2);
    
    const onChangeHandler = e => setInputText(e.target.value);

    const onClickHandler = () => {
        const changeTodos = todos.concat({
            id: nextId,
            description: inputText,
            isDone: false
        });

        setInputText('');
        setNextId(nextId + 1);
        setTodos(changeTodos);
    }

    const onKeyPressHandler = e => {
        if (e.key === 'Enter') {
            onClickHandler();
        }
    }

    return (
        <>
            <h3>ToDo-List</h3>
            <div className="todo-list">
                <TodoItems todos={todos} setTodos={setTodos}/>    
            </div>
            <div className="append-list">
                <input 
                    type="text"
                    value={inputText}
                    onChange={onChangeHandler}
                    onKeyPress={onKeyPressHandler}
                />
                <button onClick={onClickHandler}>추가하기</button>
            </div>
        </>
    );
}

export default TodoList;