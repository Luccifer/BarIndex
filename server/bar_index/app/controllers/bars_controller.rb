class BarsController < ApplicationController
  
  before_action :logged_in_user, only: [:destroy, :create, :update]
  before_action :moderator_user, only: [:destroy, :create, :update]
  
  def index
    render json: Bar.all
  end
  
  def show
    render json: Bar.find(params[:id])
  end
  
  def create
    bar = Bar.new(bar_params)
    if bar.save
      render json: bar
    else
      render json: { error: bar.errors.full_messages }
    end
  end
  
  def destroy
    Bar.find(params[:id]).destroy
    render text: nil
  end
  
  def update
    bar = Bar.find(params[:id])
    if bar.update_attributes(bar_params)
      render json: bar
    else
      render json: { error: bar.errors.full_messages }
    end
  end
  
  def bar_photos
    render json: Bar.find(params[:id]).bar_photos
  end
  
  def comments
    render json: Bar.find(params[:id]).comments
  end
  
  def evaluations
    render json: Bar.find(params[:id]).evaluations
  end
  
  private
  
    def bar_params
      params.require(:bar).permit(:name, :price_vodka, :price_long,
                                  :price_shot, :description, :website_url,
                                  :social_url_fb, :social_url_vk,
                                  :social_url_twtr, :social_url_inst, 
                                  # TODO: change
                                  :lat, :lng, :price_avg)
    end
  
end
