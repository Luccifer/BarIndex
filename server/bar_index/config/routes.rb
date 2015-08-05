Rails.application.routes.draw do

  root 'application#home'
  
  post   'users'       => 'users#create'
  put    'users/:id/update'   => 'users#update'
  delete 'users/:id/destroy'   => 'users#destroy'
  get    'users'       => 'users#index'
  get    'users/:id'   => 'users#show'
  
  post 'users/login'        => 'sessions#create'
  post 'users/logout'       => 'sessions#destroy'
  post 'users/current'      => 'sessions#current'
  
  # resources :account_activations, only: [:edit]
  post 'password_resets'         => 'password_resets#create'
  put  'password_resets/:id/update'     => 'password_resets#update'
  put  'account_activations/:id/update' => 'account_activations#update'
  
  # match '*path', to: 'application#home', via: :all
  
end
