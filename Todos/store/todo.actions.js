import { todoService } from "../services/todo.service.js";
import { showSuccessMsg, showErrorMsg } from "../services/event-bus.service.js";
import { userService } from "../services/user.service.js";
export function loadTodos() {
  return (dispatch) => {
    todoService.query().then((todos) => {
      dispatch({
        type: "SET_TODOS",
        todos
      });
      console.log("Todos from DB:", todos);
    });
  };
}

export function onRemoveTodo(todoId) {
  return (dispatch) => {
    todoService
      .remove(todoId)
      .then(() => {
        console.log("Deleted Succesfully!");
        dispatch({
          type: "REMOVE_Todo",
          todoId
        });
        showSuccessMsg("todo removed");
      })
      .catch((err) => {
        showErrorMsg("Cannot remove todo");
      });
  };
}

export function onAddTodo() {
  return (dispatch) => {
    const todo = {
      date:new Date(Date.now() * 1000),
      status: 'Active',
      title: prompt("what do you need to be done?"),
      creator: userService.getLoggedinUser()
    };
    console.log(todo);
    todoService
      .save(todo)
      .then((savedTodo) => {
        console.log("Added todo", savedTodo);
        dispatch({
          type: "ADD_TODO",
          todo: savedTodo
        });
        showSuccessMsg("todo added");
      })
      .catch((err) => {
        showErrorMsg("Cannot add todo");
      });
  };
}

export function onEditTodo(todo) {
  return (dispatch) => {
    const title = prompt("what do you need to be done?");
    const todoToSave = { ...todo, title };
    todoService
      .save(todoToSave)
      .then((savedTodo) => {
        console.log("Updated todo:", savedtodo);
        dispatch({
          type: "UPDATE_TODO",
          todo: savedTodo,
        });
        showSuccessMsg("todo updated");
      })
      .catch((err) => {
        showErrorMsg("Cannot update todo");
      });
  };
}


export function onChangeFilter(value)  {
  return (dispatch) => {
  const newFilterBy = value;
  dispatch({
    type: "CHANGE_FILTER",
    newFilterBy,
  });
  console.log('value:',value);
}};

export function onCheckBox (todo)  {
  return (dispatch) => {
  const status = 'Done';
  const todoToSave = { ...todo, status };
  todoService.save(todoToSave).then((savedTodo) => {
   dispatch({
      type: "UPDATE_TODO",
      savedTodo
    });
  });
}};