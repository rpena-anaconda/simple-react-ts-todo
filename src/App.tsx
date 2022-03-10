
import { useState } from "react";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";
import { Todo } from './models/todo.model';

const App: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const handleAddingItem = (text: string) => {
        setTodos(prevTodos => [
            ...prevTodos,
            {
                id: Math.random().toString(),
                text: text
            }
        ]);
    };

    return (
        <div className="App">
            <NewTodo cb={handleAddingItem}></NewTodo>
            <TodoList items={todos} />
        </div>
    );
}

export default App;
