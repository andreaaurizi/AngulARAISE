class ScegliController < ApplicationController

	def select
		@user = User.find(current_user.id)
	end



  def help

  end

end
