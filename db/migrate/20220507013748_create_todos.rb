class CreateTodos < ActiveRecord::Migration[7.0]
  def change
    create_table :todos do |t|
      t.belongs_to :user, null: true, foreign_key: true
      t.string :title
      t.boolean :done
      

      t.timestamps
    end
  end
end
