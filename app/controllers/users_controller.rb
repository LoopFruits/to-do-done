class UsersController < ApplicationController

    #Post /singup
    def create 
        #saving users id in session hash 
        user = User.create!(create_user_params)
        session[:user_id] ||= user.id
        #return json response with info stored in create_user_params, and HTTP status code of 201
        render json: user, status: :created
        #if user is not valid, retuns JSON resp with error msg 422
    rescue ActiveRecord::RecordInvalid => invalid 
        render json: { errors: [invalid.record.errors] }, status: :unprocessable_entity
    end

    #GET  
    def show
        user_id = session[:user_id]
        #if user is logged return json resp with user info and https satus 201 (created)
        if user_id
            user = User.find(:user_id)
            render json: user, status: :created
        #if not logged in return json resp of 401(unauthorized)
        else
            render json: { error: "New User Whose's This?" }, status: :unauthorized
        end
    end

    private 

    def create_user_params 
        params.permit(:first_name, :last_name, :username, :password )
    end

end
