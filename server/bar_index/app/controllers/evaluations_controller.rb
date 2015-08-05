class EvaluationsController < ApplicationController
  
  before_action :logged_in_user, only: [:update, :create]
  before_action :correct_user, only: :update
  
  def show
    render json: Evaluation.find(params[:id])
  end
  
  def create
    evaluation = current_user.evaluations.build(evaluation_params)
    if evaluation.save
      render json: evaluation
    else
      render json: { error: evaluation.errors.full_messages }
    end
  end
  
  def update
    evaluation = Evaluation.find(params[:id])
    if evaluation.update_attributes(evaluation_params_update)
      render json: evaluation
    else
      render json: { error: evaluation.errors.full_messages }
    end
  end
  
  private
  
    def evaluation_params
      params.require(:evaluation).permit(:eval_param1, :eval_param2,
                                         :eval_param3, :eval_param4, :bar_id)
    end
    
    def evaluation_params_update
      params.require(:evaluation).permit(:eval_param1, :eval_param2,
                                         :eval_param3, :eval_param4)
    end
    
    def correct_user
      @evaluation = current_user.evaluations.find_by(id: params[:id])
      if @evaluation.nil? && current_user.permission_level != 1
        render json: { error: "forbidden" }
      end
    end
  
end
