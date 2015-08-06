class Comment < ActiveRecord::Base
  belongs_to :user
  belongs_to :bar
  
  default_scope -> { order(created_at: :desc) }
  
  validates :bar_id, presence: true
  validates :user_id, presence: true
  validate :bar_exists
  
  private
  
    def bar_exists
      unless Bar.exists?(bar_id)
        errors.add(:bar_id, "does not exist")
      end
    end
  
end
