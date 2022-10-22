const { connect } = ReactRedux;

import { loadTodos, onAddTodo, onRemoveTodo,onChangeFilter,onCheckBox } from "../store/todo.actions.js";
import { TodoList } from "../cmps/todo-list.jsx";
import { todoService } from "../services/todo.service.js";
import { TodoFilter } from "../cmps/todo-filter.jsx";
class _TodoApp extends React.Component {
  state = {};
  componentDidMount() {
    this.props.loadTodos();
  }

  onRemoveTodo = (todoId) => {
    this.props.onRemoveTodo(todoId)
    this.props.loadTodos()

    }
 

  onAddTodo = () => {
    this.props.onAddTodo();
  };


  onChangeFilter = (value) => {
    this.props.onChangeFilter(value)
    
  };

  onCheckBox = (todo) => {
    this.props.onCheckBox(todo)
  };

  render() {
    var { todos,filterBy} = this.props;
    console.log(todos,filterBy);
    if (filterBy === "Done") {
      todos = todos.filter((todo) => todo.status==='Done');
    } else if (filterBy === "Active") {
      todos = todos.filter((todo) => todo.status==='Active');
    }
    return !todos? (
      <img src="../img/loading.gif" alt="" />
    ) : (
      <div>
        <h3 >Todos App</h3>
        <main>
          <TodoFilter
            onChangeFilter={this.onChangeFilter}
          />
          <button
            type="button"
            className="btn btn-outline-primary margin"
            onClick={this.onAddTodo}
          >
            Add todo 🖊
          </button>
          <TodoList
            onRemoveTodo={this.onRemoveTodo}
            onCheckBox={this.onCheckBox}
            todos={todos}
          />
        </main>
      </div>
    );
  }
}

function mapStateToProps( state ) {
  return {
    todos: state.todoModule.todos,
    filterBy:state.todoModule.filterBy
  };
}
const mapDispatchToProps = {
  loadTodos,
  onAddTodo,
  onRemoveTodo,
  onChangeFilter,
  onCheckBox
};
export const TodoApp = connect(mapStateToProps, mapDispatchToProps)(_TodoApp);
