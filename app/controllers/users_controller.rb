class UsersController < ApplicationController
    before_action :authorize
    skip_before_action :authorize, only: [:create]
    
    #Post /singup
    # def create 
    #     #saving users id in session hash 
    #     user = User.create!(create_user_params)
    #     session[:user_id] = user.id
    #     #return json response with info stored in create_user_params, and HTTP status code of 201
    #     render json: user, status: :created
    #     #if user is not valid, retuns JSON resp with error msg 422
    # rescue ActiveRecord::RecordInvalid => e
    #     render json: {errors: e.record.errors.full_messages}, status: :unprocessable_entity
    # end
    

    def create
        if (params[:password] != nil) && (params[:password] === params[:password_confirmation])
            user = User.create!(create_user)
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: { errors: ["Password can't be blank"] }, status: :unprocessable_entity
        end
    end

    #GET  
    # def show
    #     if session[:user_id]
    #         render json: User.find(session[:user_id]), status: :ok
    #     else
    #         render json: {error: "New user whose this?"}, status: :unauthorized
    #     end
    # end

    # def show
    #     user_id = session[:user_id]
    #     if user_id
    #         user = User.find(user_id)
    #         render json: user, status: :created
    #     else
    #         render json: { error: "Unauthorized" }, status: :unauthorized
    #     end
    # end

    def show
        user = User.find_by(id: session[:user_id])
        render json: user
    end

    private 

    def create_user
        params.permit(:username, :password,:password_confirmation )
    end

end
