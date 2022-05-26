class SessionsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found

    before_action :authorize
    skip_before_action :authorize, only: [:create]



    #POST /login
    def create
      user = User.find_by(username: params[:username])
      if user&.authenticate(params[:password])
          session[:user_id] = user.id
          render json: user, status: :created
      else
          render json: { errors: ["Invalid username or password"] }, status: :unauthorized
      end
    end


    #DELETE /logout
    def destroy
      if session.include? :user_id
        session.delete :user_id
        head :no_content
      end
    end

    private

    def record_not_found
      render json: { error: "User not found" }, status: :not_found
    end
  


end

