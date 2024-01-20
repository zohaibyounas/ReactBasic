import React,{useReducer} from "react";
const todoReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return [...state, { id: Date.now(), text: action.text, completed: false }];
      case 'TOGGLE_TODO':
        return state.map(todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        );
      default:
        return state;
    }
  };
  
  const TodoReducer = () => {
    const [todos, dispatch] = useReducer(todoReducer, []);
  
    return (
      <div>
        <ul>
          {todos.map(todo => (
            <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.text}
              <button onClick={() => dispatch({ type: 'TOGGLE_TODO', id: todo.id })}>
                Toggle
              </button>
            </li>
          ))}
        </ul>
        <input
          type="text"
          onChange={e => dispatch({ type: 'ADD_TODO', text: e.target.value })}
          value=""
        />
      </div>
    );
  };
  export default TodoReducer
  