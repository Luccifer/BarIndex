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
  
end
