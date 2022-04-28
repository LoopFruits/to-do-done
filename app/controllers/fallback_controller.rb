class FallbackController < ApplicationController::Base 

    # renders the HTML file four react application 
    def index 
        render file: 'public/index.html'
    end
end
