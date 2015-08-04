Rails.application.routes.draw do

  root 'application#home'
  
  post 'users/create'      => 'users#create'
  post 'users/:id/update'  => 'users#update'
  post 'users/:id/destroy' => 'users#destroy'
  post 'users'             => 'users#index'
  post 'users/:id'         => 'users#show'
  
  post 'login'             => 'sessions#create'
  post 'logout'            => 'sessions#destroy'
  
  resources :account_activations, only: [:edit]
  post 'account_activations/:id/edit' => 'account_activations#edit'
  
  match '*path', to: 'application#home', via: :all
  
end
