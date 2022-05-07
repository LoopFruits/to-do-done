class TodosController < ApplicationController

  #GET  /todos 
  def index
    render json: Todos.all
  end

  #POST
  def create
    todo = Todo.create(todo_params)
    render json: todo
  end

  #Put 
  def update
  end

  #DELETE 
  def destroy
  end


  private
    

  def todo_params
    params.permit(:title, :done)
  end

end
