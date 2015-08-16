Rails.application.routes.draw do

  root 'application#home'
  
  # USER METHODS
  post   'api/users/login'                    => 'sessions#create'
  delete 'api/users/logout'                   => 'sessions#destroy'
  get    'api/users/current'                  => 'sessions#current'
  
  post   'api/users'                          => 'users#create'
  put    'api/users/:id'                      => 'users#update'
  delete 'api/users/:id'                      => 'users#destroy'
  get    'api/users'                          => 'users#index'
  get    'api/users/:id'                      => 'users#show'
  
  # resources :account_activations, only: [:edit]
  # PASSWORD RESET METHODS
  post   'api/users/reset_password'           => 'password_resets#create'
  put    'api/users/reset_password/:id'       => 'password_resets#update'
  
  # ACCOUNT ACTIVATION METHODS
  put    'api/users/activate/:id'             => 'account_activations#update'
  
  # BAR METHODS
  post   'api/bars'                           => 'bars#create'
  put    'api/bars/:id'                       => 'bars#update'
  delete 'api/bars/:id'                       => 'bars#destroy'
  get    'api/bars'                           => 'bars#index'
  get    'api/bars/:id'                       => 'bars#show'
  
  get    'api/bars/:id/photos'                => 'bars#bar_photos'
  get    'api/bars/:id/comments'              => 'bars#comments'
  get    'api/bars/:id/evaluations'           => 'bars#evaluations'
  
  # BAR_PHOTOS METHODS
  post   'api/bar_photos'                     => 'bar_photos#create'
  delete 'api/bar_photos/:id'                 => 'bar_photos#destroy'
  get    'api/bar_photos/:id'                 => 'bar_photos#show'
  
  # COMMENT METHODS
  post   'api/comments'                       => 'comments#create'
  delete 'api/comments/:id'                   => 'comments#destroy'
  get    'api/comments/:id'                   => 'comments#show'
  
  # EVALUATION METHODS
  post   'api/evaluations'                    => 'evaluations#create'
  put    'api/evaluations/:id'                => 'evaluations#update'
  get    'api/evaluations/:id'                => 'evaluations#show'
  
  resources :bar_photos
  get 'test' => 'bar_photos#new'
  
end
