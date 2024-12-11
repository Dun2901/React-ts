interface IProps {
    todos: {
        id: number,
        title: string,
        isComplete: boolean
    }[];
    isDeveloper: string
}

// type TProps = {
//     todos: {
//         id: number,
//         title: string,
//         isComplete: boolean
//     }[];
//     isDeveloper: string
// }

const TodoData = (props: IProps) => {
    const { todos } = props;

    return (
        <div>
            {todos.map(item => {
                return (
                    <div key={item.id}>
                        <div>{item.title}</div>
                    </div>
                )
            })}
        </div>
    )
}

export default TodoData