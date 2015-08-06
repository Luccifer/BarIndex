Rails.application.routes.draw do

  root 'application#home'
  
  # USER METHODS
  post   'users/login'                    => 'sessions#create'
  delete 'users/logout'                   => 'sessions#destroy'
  get    'users/current'                  => 'sessions#current'
  
  post   'users'                          => 'users#create'
  put    'users/:id/update'               => 'users#update'
  delete 'users/:id/destroy'              => 'users#destroy'
  get    'users'                          => 'users#index'
  get    'users/:id'                      => 'users#show'
  
  # resources :account_activations, only: [:edit]
  # PASSWORD RESET METHODS
  post   'password_resets'                => 'password_resets#create'
  put    'password_resets/:id/update'     => 'password_resets#update'
  
  # ACCOUNT ACTIVATION METHODS
  put    'account_activations/:id/update' => 'account_activations#update'
  
  # BAR METHODS
  post   'bars'                           => 'bars#create'
  put    'bars/:id/update'                => 'bars#update'
  delete 'bars/:id/destroy'               => 'bars#destroy'
  get    'bars'                           => 'bars#index'
  get    'bars/:id'                       => 'bars#show'
  
  get    'bars/:id/photos'                => 'bars#bar_photos'
  get    'bars/:id/comments'              => 'bars#comments'
  get    'bars/:id/evaluations'           => 'bars#evaluations'
  
  # BAR_PHOTOS METHODS
  post   'bar_photos'                     => 'bar_photos#create'
  delete 'bar_photos/:id/destroy'         => 'bar_photos#destroy'
  get    'bar_photos/:id'                 => 'bar_photos#show'
  
  # COMMENT METHODS
  post   'comments'                       => 'comments#create'
  delete 'comments/:id/destroy'           => 'comments#destroy'
  get    'comments/:id'                   => 'comments#show'
  
  # EVALUATION METHODS
  post   'evaluations'                    => 'evaluations#create'
  delete 'evaluations/:id/update'         => 'evaluations#update'
  get    'evaluations/:id'                => 'evaluations#show'
  
end
