
interface IProps {
    todos: {
        id: number,
        title: string,
        isComplete: boolean
    }[];
    removeTodo: (id: number) => void
}

const TodoData = (props: IProps) => {
    const { todos, removeTodo } = props;

    const handleDeleteTodo = (id: number) => {
        removeTodo(id);
    }

    return (
        <div>
            {todos.map(item => {
                return (
                    <div key={item.id}>
                        <div style={{ padding: "10px 0" }}>
                            {item.id} - {item.title}
                            &nbsp;&nbsp;&nbsp;
                            <button
                                onClick={() => handleDeleteTodo(item.id)}
                            >
                                Delete
                            </button>
                        </div>

                    </div>
                )
            })}
        </div>
    )
}

export default TodoData