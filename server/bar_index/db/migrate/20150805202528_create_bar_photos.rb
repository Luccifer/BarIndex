class CreateBarPhotos < ActiveRecord::Migration
  def change
    create_table :bar_photos do |t|
      t.string :url
      t.references :bar, index: true, foreign_key: true

      t.timestamps null: false
    end
    
    add_foreign_key :bar_photos, :bars
  end
end
