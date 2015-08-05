class Bar < ActiveRecord::Base
  
  has_many :bar_photos, dependent: :destroy
  has_many :comments, dependent: :destroy
  has_many :evaluations, dependent: :destroy
  
  validates :name, presence: true, length: { maximum: 150 }
  validates :description, presence: true
  validates :price_vodka, presence: true
  validates :price_long, presence: true
  validates :price_shot, presence: true
  
  before_save :set_price_avg

  
  # Calculate price_avg
  def set_price_avg
    # TODO: actually implement this
    self.price_avg = (price_shot + price_long + price_vodka) / 3
  end
  
end
