const { connect } = ReactRedux;

import { onEditTodo } from "../store/todo.actions.js";
import { todoService } from "../services/todo.service.js";

class _TodoEdit extends React.Component {
  state = {
    todo: null,
  };
  componentDidMount() {
    const id = this.props.match.params.id;
    var currTodo = todoService.getById(id)
    .then((currTodo) => {
      this.setState({ todo: currTodo });
      console.log(this.state.todo);
    });
  }
  onEditTodo = (todo) => {
    this.props.onEditTodo(todo);
  };
  render() {
    const { todo } = this.state;
    if (!todo)<img src="../img/loading.gif" alt="loading.." />
    
    return (
      <div>
        <button
          type="button"
          className="btn btn-outline-success margin"
          onClick={() => {
            this.onEditTodo(todo);
          }}
        >
          Edit
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todoModule.todos,
  };
}
const mapDispatchToProps = {
  onEditTodo,
};

export const TodoEdit = connect(mapStateToProps, mapDispatchToProps)(_TodoEdit);
