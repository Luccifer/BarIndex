class AddAddressCoverToBars < ActiveRecord::Migration
  def change
    add_column :bars, :address, :string
    add_column :bars, :cover, :integer
  end
end
