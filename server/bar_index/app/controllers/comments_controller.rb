class CommentsController < ApplicationController
  
  before_action :logged_in_user, only: [:destroy, :create]
  before_action :correct_user, only: :destroy
  
  def show
    render json: Comment.find(params[:id])
  end
  
  def create
    comment = current_user.comments.build(comment_params)
    if comment.save
      render json: comment
    else
      render json: { error: comment.errors.full_messages }
    end
  end
  
  def destroy
    @comment.nil? ? Comment.find(params[:id]).destroy : @comment.destroy
    render text: nil
  end
  
  private
  
    def comment_params
      params.require(:comment).permit(:content, :bar_id)
    end
    
    def correct_user
      @comment = current_user.comments.find_by(id: params[:id])
      if @comment.nil? && current_user.permission_level == 3
        render json: { error: "forbidden" }
      end
    end
  
end
