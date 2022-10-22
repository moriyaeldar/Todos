import { TodoPreview } from "./todo-preview.jsx";

export class TodoList extends React.Component {
  render() {
    const { todos } = this.props;
    return (
      <ul className="todo-list margin">
        {todos.map((todo) => (
          <TodoPreview
            key={todo.id}
            onRemoveTodo={this.props.onRemoveTodo}
            onEditTodo={this.props.onEditTodo}
            onCheckBox={this.props.onCheckBox}
            todo={todo}
          />
        ))}
      </ul>
    );
  }
}
