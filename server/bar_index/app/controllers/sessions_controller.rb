class SessionsController < ApplicationController
  
  def create
    user = User.find_by(email: params[:session][:email].downcase)
    if user && user.authenticate(params[:session][:password])
      if user.activated?
        log_in user
        params[:session][:remember_me] == '1' ? remember(user) : forget(user)
        render json: user.to_json
      else
        message = 'Account not activated. '
        message += 'Check your email for the activation link.'
        render json: { error: message }
      end
    else
      render json: { error: 'Invalid email/password combination' }
    end
  end
  
  def destroy
    log_out if logged_in?
    render json: nil
  end
  
  def current
    user = current_user
    render json: user.nil? ? nil : user.to_json
  end
  
end