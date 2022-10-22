const { Link } = ReactRouterDOM;
import { TodoEdit } from "../pages/todo-edit.jsx";
import { TodoDetails } from "../pages/todo-details.jsx";
export class TodoPreview extends React.Component {
  render() {
    const { todo } = this.props;
    return (
      <li key={todo.id} className="todo-preview margin">
        <input
          type="checkbox"
          name="status"
          id="status"
          value="isDone"
          onClick={() => this.props.onCheckBox(todo)}
        />
        <h6 className={(todo.status === 'Done')? 'Done':'Active'}>{todo.title}</h6>
        <Link className="link-info margin" to={`/todo/${todo.id}`}>
          more details
        </Link>

        <div>
          <button
            type="button"
            className="btn btn-outline-danger margin"
            onClick={() => {
              this.props.onRemoveTodo(todo.id);
            }}
          >
            x
          </button>
          <Link className="link-info margin" to={`/todo/edit/${todo.id}`} >
            <button type="button" className="btn btn-outline-success margin">
              Edit
            </button>
          </Link>
        </div>
      </li>
    );
  }
}
