class CreateBarPhotos < ActiveRecord::Migration
  def change
    create_table :bar_photos do |t|
      t.string :url
      t.references :bar, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
