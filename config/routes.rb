Rails.application.routes.draw do
  get 'todos/index'
  get 'todos/create'
  get 'todos/update'
  get 'todos/destroy'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  #testing configuration 
  get '/hello', to: 'application#hello_world'
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
