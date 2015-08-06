class BarPhoto < ActiveRecord::Base
  belongs_to :bar
  
  mount_uploader :url, BarPhotoUploader
  
  validates :url, presence: true
  validates :bar_id, presence: true
  validate  :picture_size

  
  private
  
    # Validates the size of an uploaded picture.
    def picture_size
      if url.size > 5.megabytes
        errors.add(:url, "should be less than 5MB")
      end
    end
  
end
