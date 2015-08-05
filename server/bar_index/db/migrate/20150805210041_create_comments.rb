class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.references :user, index: true, foreign_key: true
      t.references :bar, index: true, foreign_key: true
      t.text :content

      t.timestamps null: false
    end
    
    add_index :comments, [:bar_id, :created_at]
  end
end
