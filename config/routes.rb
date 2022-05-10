Rails.application.routes.draw do
  get 'sessions/create'
  get 'sessions/destroy'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  #testing configuration 
  resources :todos 
  # resources :users, only: [:show, :create]
  post '/login', to: "sessions#create"
  post '/logout', to: "session#destroy"
  post "/signup", to: "users#create"
  get "/me", to: "users#show"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
