class CreateTodos < ActiveRecord::Migration[7.0]
  def change
    create_table :todos do |t|
      t.belongs_to :user, foreign_key: true
      t.string :title
      t.boolean :description
      

      t.timestamps
    end
  end
end
