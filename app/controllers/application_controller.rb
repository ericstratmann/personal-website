class ApplicationController < ActionController::Base
    protect_from_forgery

    rescue_from ActionController::RoutingError, :with => :render_404

    def render_404
        render :text => "hello"
    end
end
