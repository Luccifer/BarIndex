class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  # protect_from_forgery with: :exception
  include SessionsHelper
  
  def home
    render file: 'public/index.html'
  end
  
  private
  
    # Confirms a logged-in user.
    def logged_in_user
      unless logged_in?
        render json: { error: "forbidden" }
      end
    end
    
    # Confirms an admin user.
    def admin_user
      if current_user.permission_level != 1
        render json: { error: "forbidden" }
      end
    end
    
    # Confirms an moderator user.
    def moderator_user
      if current_user.permission_level == 3 
        render json: { error: "forbidden" }
      end
    end
  
end
