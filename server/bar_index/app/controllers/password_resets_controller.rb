class PasswordResetsController < ApplicationController
  
  before_action :get_user, only: [:update]
  before_action :valid_user, only: [:update]
  before_action :check_expiration, only: [:update]
  
  def create
    @user = User.find_by(email: params[:email].downcase)
    if @user
      @user.create_reset_digest
      @user.send_password_reset_email
      render json: nil
    else
      render json: { error: "Email address not found" }
    end
  end

  def update
    if password_blank?
      render json: { error: "Password can't be blank" }
    elsif @user.update_attributes(user_params)
      log_in @user
      render json: @user.to_json
    else
      # add helpful message
      render json: { error: "error" }
    end
  end
  
  private
  
    def user_params
      params.require(:user).permit(:password, :password_confirmation)
    end
    
    # Returns true if password is blank.
    def password_blank?
      params[:user][:password].blank?
    end
    
    def get_user
      @user = User.find_by(email: params[:email])
    end
    
    # Confirms a valid user.
    def valid_user
      unless (@user && @user.activated? &&
              @user.authenticated?(:reset, params[:id]))
              
        render json: { error: "Invalid reset token" }
      end
    end
    
    # Checks expiration of reset token.
    def check_expiration
      if @user.password_reset_expired?
        render json: { error: "Password reset has expired" }
      end
    end
  
end
