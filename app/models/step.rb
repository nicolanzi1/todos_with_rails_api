# == Schema Information
#
# Table name: steps
#
#  id         :integer          not null, primary key
#  body       :string
#  done       :boolean
#  title      :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  todo_id    :integer
#
class Step < ApplicationRecord
    validates :title, presence: true
    validates :done, inclusion: { in: [true, false] }

    belongs_to :todo
end
