class Evaluation < ActiveRecord::Base
  belongs_to :user
  belongs_to :bar
  
  validates :bar_id, presence: true
  validates :user_id, presence: true
  validate :evaluation_exists
  validate :bar_exists
  
  private
  
    def evaluation_exists
      if eval_param1.nil? && eval_param2.nil? && eval_param3.nil? &&
         eval_param4.nil?
         
        errors.add(:evaluation, "should have at least one score")
      end
    end
    
    def bar_exists
      unless Bar.exists?(bar_id)
        errors.add(:bar_id, "does not exist")
      end
    end
  
end
