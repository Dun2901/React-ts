
interface IProps {
    name?: string;
}

const TodoInput = (props: IProps) => {
    const { name = "Please type your todo" } = props;

    return (
        <div style={{ display: "flex", gap: 15, marginBottom: 20 }}>
            <input value={name} type="text" />
            <button>Add todo</button>
        </div>
    )
}

export default TodoInput