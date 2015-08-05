class BarPhotosController < ApplicationController
  
  before_action :logged_in_user, only: [:destroy, :create]
  before_action :moderator_user, only: [:destroy, :create]
  
  def new
    @bar_photo = BarPhoto.new
  end
  
  def show
    render json: BarPhoto.find(params[:id])
  end
  
  # untested
  def create
    bar = Bar.find(params[:bar_photo][:bar_id])
    bar_photo = bar.bar_photos.build(url: params[:bar_photo][:url])
    if bar_photo.save
      render json: bar_photo
    else
      render json: { error: bar_photo.errors.full_messages }
    end
  end
  
  def destroy
    BarPhoto.find(params[:id]).destroy
    render text: nil
  end
  
end
