class AccountActivationsController < ApplicationController
  
  def update
    
    user = User.find_by(email: params[:email])
    if user && !user.activated? && user.authenticated?(:activation, params[:id])
      user.activate
      log_in user
      render json: nil
    else
      render json: { error: "Invalid activation link" }
    end
    
  end
  
end
