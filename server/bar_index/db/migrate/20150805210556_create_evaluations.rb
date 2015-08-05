class CreateEvaluations < ActiveRecord::Migration
  def change
    create_table :evaluations do |t|
      t.references :user, index: true, foreign_key: true
      t.references :bar, index: true, foreign_key: true
      t.boolean :eval_param1
      t.boolean :eval_param2
      t.boolean :eval_param3
      t.boolean :eval_param4

      t.timestamps null: false
    end
    
    add_foreign_key :evaluations, :bars
    add_foreign_key :evaluations, :users
    add_index :evaluations, [:user_id, :bar_id], unique: true
  end
end
