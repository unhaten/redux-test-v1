import {FC, useEffect} from "react";
import {useTypedSelector} from "../hooks/useTypedSelector.ts";
import {useActions} from "../hooks/useActions.ts";

const TodoList: FC = () => {
    const {todos, page, loading, error, limit}
        = useTypedSelector(state => state.todo)
    const {fetchTodos, setTodoPage} = useActions()
    const pages = [1, 2, 3, 4, 5]

    useEffect(() => {
        fetchTodos(page, limit)
    }, [page])

    if (loading) {
        return <h1>Loading ...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <>
            <div>
                {todos.map(todo => <div key={todo.id}>{todo.id} - {todo.title}</div>)}
                <div style={{display: 'flex', justifyContent: 'center', marginTop: 10}}>
                    {pages.map(p => <div
                        onClick={() => setTodoPage(p)}
                        style={{border: p === page ? '2px solid green' : '1px solid gray', padding: 15}}>{p}</div>)}
                </div>
            </div>
        </>
    )
}

export default TodoList;