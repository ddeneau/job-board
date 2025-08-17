import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";

const divClass = "flex flex-row"
const gridClass = "justify-items-center grid md:grid-cols-3 sm:grid-cols-1"
const headerClass = "font-family-sans text-2xl font-bold";

const client = generateClient<Schema>();

function Example() {
    const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);

    useEffect(() => {
        client.models.Todo.observeQuery().subscribe({
            next: (data) => setTodos([...data.items]),
        });
    }, []);

    function createTodo() {
        client.models.Todo.create({ content: window.prompt("Todo content") });
    }

    return (
        <main>
            <div className={divClass}>
                <div className={gridClass}>
                    <h1 className={headerClass}>Jobs</h1>
                    <button onClick={createTodo}>+ new</button>
                    <ul>
                        {todos.map((todo) => (
                            <li key={todo.id}>{todo.content}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </main>
    );
}

export default Example;