class TodosController < ApplicationController
  # before_action :authorize

  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

  #GET  /todos 
  def index
    todos = Todo.all
    render json: todos, status: :created, include: :user
  end

  #POST
  def create
    todo = Todo.create!(title: params[:title], description: params[:description], user_id: session[:user_id])
    render json: todo
  end

  #Put 
  def update
    todo = find_todo
    todo.update(todo_params)
    render json: todo
  end

  #DELETE 
  def destroy
    todo = Todo.find(id: params[:id])
    todo.destroy 
    head :no_content
  end


  private
    

  def todo_params
    params.permit(:title, :description)
  end

  def find_todo
    Todo.find(params[:id])
  end

  def render_not_found_response
    render json: {error: "No Todo Around Here"}, status: :not_found
end

  # authorizing user 
  # def authorize
  #   return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
  # end

end
