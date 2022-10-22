import { todoService } from "../services/todo.service.js";
export class TodoDetails extends React.Component {
  state = {
    todo: null,
  };
  componentDidMount() {
    const id = this.props.match.params.id;
    let currTodo = todoService.getById(id)
    .then((currTodo) => {
      this.setState({ todo: currTodo });
    });
  }

  render() {
    const { todo } = this.state;
    return !todo ? (
      <img src="../img/loading.gif" alt="" />
    ) : ( 
      <div>
        <h6>{todo.title}</h6>

        <h5>📋</h5>
        <p>{todo.date}</p>
        <p>
          creator: <span>{todo.creator && todo.creator.username}</span>
        </p>
      </div>
    );
  }
}
