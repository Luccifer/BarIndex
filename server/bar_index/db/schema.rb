# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150805195622) do

  create_table "bars", force: :cascade do |t|
    t.string   "name"
    t.text     "description"
    t.string   "website_url"
    t.string   "social_url_vk"
    t.string   "social_url_fb"
    t.string   "social_url_twtr"
    t.string   "social_url_inst"
    t.integer  "price_vodka"
    t.integer  "price_long"
    t.integer  "price_shot"
    t.integer  "price_avg"
    t.float    "eval_param1_avg", default: 0.0
    t.integer  "eval_param1_yes", default: 0
    t.integer  "eval_param1_no",  default: 0
    t.float    "eval_param2_avg", default: 0.0
    t.integer  "eval_param2_yes", default: 0
    t.integer  "eval_param2_no",  default: 0
    t.float    "eval_param3_avg", default: 0.0
    t.integer  "eval_param3_yes", default: 0
    t.integer  "eval_param3_no",  default: 0
    t.float    "eval_param4_avg", default: 0.0
    t.integer  "eval_param4_yes", default: 0
    t.integer  "eval_param4_no",  default: 0
    t.datetime "created_at",                    null: false
    t.datetime "updated_at",                    null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "name"
    t.string   "email"
    t.text     "description"
    t.string   "photo_url"
    t.integer  "permission_level",  default: 3
    t.integer  "vk_id"
    t.string   "password_digest"
    t.string   "remember_digest"
    t.string   "reset_digest"
    t.datetime "reset_sent_at"
    t.string   "activation_digest"
    t.boolean  "activated",         default: false
    t.datetime "activated_at"
    t.datetime "created_at",                        null: false
    t.datetime "updated_at",                        null: false
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true

end
