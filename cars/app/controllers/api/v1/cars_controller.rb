module Api
  module V1
    class CarsController < ApplicationController
      before_action :fetch_car, only: %i[show update]
      protect_from_forgery with: :null_session

      def index
        render json: { data: Car.last(10) }
      end

      def show
        render json: { data: @car }
      end

      def create
        car = Car.create(car_params)
        render json: { data: car }
      end

      def update
        @car.update_attributes(car_params)
      end

      private

      def car_params
        params.require(:car).permit(:make, :model, :year, :color)
      end

      def fetch_car
        @car = Car.find(params[:id])
      end
    end
  end
end
