class TodosController < ApplicationController

  #GET  /todos 
  def index
    render json: Todos.all
  end

  #POST
  def create
  end

  #Put 
  def update
  end

  #DELETE 
  def destroy
  end
end
