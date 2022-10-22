const { NavLink } = ReactRouterDOM;
const { connect } = ReactRedux;

import { UserMsg } from "./user-msg.jsx";

class _AppHeader extends React.Component {
  getTodosPer() {
    const { todos } = this.props;
    let todosDone = 0;
    todos.forEach((todo) => {
      if (todo.status==='Done') todosDone++;
    });
    return (todosDone / todos.length) * 100;
  }
  render() {
    return (
      <header>
        <nav className="link-info margin">
          <NavLink className="link-info margin" to="/">
            Home
          </NavLink>{" "}
          |
          <NavLink className="link-info margin" to="/todo">
            Todos
          </NavLink>
        </nav>
        <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: `${this.getTodosPer()}%` }}
            aria-valuenow={this.getTodosPer()}
            aria-valuemin="0"
            aria-valuemax="100"
          >
            {this.getTodosPer()}%
          </div>
        </div>
        <UserMsg />
      </header>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.userModule.user,
    todos: state.todoModule.todos,
  };
}
export const AppHeader = connect(mapStateToProps)(_AppHeader);
