Rails.application.routes.draw do

  root 'application#home'
  
  post 'users/create'       => 'users#create'
  post 'users/:id/update'   => 'users#update'
  post 'users/:id/destroy'  => 'users#destroy'
  post 'users'              => 'users#index'
  post 'users/:id'          => 'users#show'
  
  post 'users/login'        => 'sessions#create'
  post 'users/logout'       => 'sessions#destroy'
  post 'users/current_user' => 'sessions#current'
  
  resources :account_activations, only: [:edit]
  post 'password_resets/create'       => 'password_resets#create'
  post 'password_resets/:id'          => 'password_resets#update'
  post 'account_activations/:id/edit' => 'account_activations#edit'
  
  # match '*path', to: 'application#home', via: :all
  
end
