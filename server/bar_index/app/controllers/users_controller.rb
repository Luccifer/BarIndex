class UsersController < ApplicationController
    
  before_action :logged_in_user, only: [:update, :destroy]
  before_action :correct_user,   only: [:update]
  before_action :admin_user,     only: :destroy
  
  def index
    render json: User.all.map { |user| user.to_json }
  end
  
  def show
    render json: User.find(params[:id]).to_json
  end
  
  def create
    photo_url_remote = params[:user][:photo_url_remote]
    if photo_url_remote.blank?
      user = User.new(user_params true)
    else
      user = User.new(user_params false)
      user.remote_photo_url_url = photo_url_remote
    end
    
    if user.save
      user.activate # TODO: remove
      user.send_activation_email
      render json: nil
    else
      render json: { error: user.errors.full_messages }
    end
  end
  
  def destroy
    User.find(params[:id]).destroy
    render text: nil
  end
  
  def update
    user = User.find(params[:id])
    
    photo_url_remote = params[:user][:photo_url_remote]
    user.remote_photo_url_url = photo_url_remote unless photo_url_remote.blank?
    
    if user.update_attributes(user_params_update photo_url_remote.blank?)
      render json: user.to_json
    else
      render json: { error: user.errors.full_messages }
    end
  end
  
  private
  
    def user_params(get_file)
      if get_file
        params.require(:user).permit(:name, :email, :password, :photo_url,
                                     :password_confirmation, :description)
      else
        params.require(:user).permit(:name, :email, :password,
                                     :password_confirmation, :description)
      end
    end
    
    def user_params_update(get_file)
      if get_file
        if current_user.permission_level != 1
          params.require(:user).permit(:name, :description, :photo_url)
        else
          params.require(:user).permit(:name, :description, :photo_url,
                                       :permission_level)
        end
      else
        if current_user.permission_level != 1
          params.require(:user).permit(:name, :description)
        else
          params.require(:user).permit(:name, :description, :permission_level)
        end
      end
    end
    
    # Confirms the correct user.
    def correct_user
      @user = User.find(params[:id])
      unless current_user?(@user) || current_user.permission_level == 1
        render json: { error: "forbidden" }
      end
    end
    
    # Confirms an admin user.
    def admin_user
      if current_user.permission_level != 1
        render json: { error: "forbidden" }
      end
    end
    
end
