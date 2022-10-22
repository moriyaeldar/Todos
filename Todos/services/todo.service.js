import { storageService } from "./async-storage.service.js";

const STORAGE_KEY = "todo";
 
export const todoService = {
  query,
  getById,
  save,
  remove, 
};


function query() {  
return storageService.query(STORAGE_KEY)

}
function getById(todoId) {
  return storageService.get(STORAGE_KEY, todoId);
}
function remove(todoId) {
  return storageService.remove(STORAGE_KEY, todoId);
}
function save(todo) {
  if (todo.id) {
    return storageService.put(STORAGE_KEY, todo);
  } else {
    return storageService.post(STORAGE_KEY, todo);

  }
 
}


