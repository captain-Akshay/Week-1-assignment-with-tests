/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
  - `npm run test-todo-list`
*/

class Todo {
  constructor(){
    this.todo=[];
  }
  add(to){
    this.todo.push(to);
  }
  remove(index){
    if(index>=this.todo.length){
      return;
    }
    this.todo.splice(index, 1);
  }
  update(index,update){
    if (index >= 0 && index < this.todo.length) {
      this.todo[index] = update;
    }else{
      return null;
    }
  }
  getAll(){
    return this.todo;
  }
  get(to){
    if (to >= 0 && to < this.todo.length) {
    return this.todo[to];}
    else return null;
  }
  clear(){
    this.todo=[];
  }
}

module.exports = Todo;
