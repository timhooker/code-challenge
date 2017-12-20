class RemoveTitleFromCars < ActiveRecord::Migration[5.1]
  def change
    remove_column :cars, :title, :string
  end
end
