require 'test_helper'

class CarsControllerTest < ActionDispatch::IntegrationTest
  test 'It can display up to 10 cars in json' do
    get api_v1_cars_url
    assert_equal 'application/json; charset=utf-8', @response.header['Content-Type']
  end
  test 'It can retrieve a car by id and return in json' do
    car = Car.first
    get api_v1_car_url(car)
    assert_equal 'application/json; charset=utf-8', @response.header['Content-Type']
    car_data = JSON.parse(@response.body)['data']
    assert_equal car.make, car_data['make']
    assert_equal car.model, car_data['model']
    assert_equal car.color, car_data['color']
    assert_equal car.year, car_data['year'].to_i
  end
  test 'It can create a new car' do
    car = { make: 'Nissan', model: 'Versa', year: 2007, color: 'gray' }
    post api_v1_cars_url, params: { car: car }
    new_car = Car.where(model: 'Versa').last
    assert_equal(new_car.make, car[:make])
    assert_equal(new_car.year, car[:year])
    assert_equal(new_car.color, car[:color])
  end
  test 'It can update a car' do
    car = Car.last
    put api_v1_car_url(car), params: { car: { model: 'Gremlin' } }
    car.reload
    assert_equal(car.model, 'Gremlin')
  end
end
