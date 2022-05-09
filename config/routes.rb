Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  #testing configuration 
  resources :todos 
  resources :users, only: [:show, :create]
  get '/hello', to: 'application#hello_world'
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
