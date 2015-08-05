class CreateBars < ActiveRecord::Migration
  def change
    create_table :bars do |t|
      t.string :name
      t.text :description
      t.string :website_url
      t.string :social_url_vk
      t.string :social_url_fb
      t.string :social_url_twtr
      t.string :social_url_inst
      t.integer :price_vodka
      t.integer :price_long
      t.integer :price_shot
      t.integer :price_avg
      t.float :eval_param1_avg, default: 0
      t.integer :eval_param1_yes, default: 0
      t.integer :eval_param1_no, default: 0
      t.float :eval_param2_avg, default: 0
      t.integer :eval_param2_yes, default: 0
      t.integer :eval_param2_no, default: 0
      t.float :eval_param3_avg, default: 0
      t.integer :eval_param3_yes, default: 0
      t.integer :eval_param3_no, default: 0
      t.float :eval_param4_avg, default: 0
      t.integer :eval_param4_yes, default: 0
      t.integer :eval_param4_no, default: 0

      t.timestamps null: false
    end
  end
end
