Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/', to: 'cars#index'
  resources :cars
  namespace :api do
    namespace :v1 do
      resources :cars, defaults: { format: :json }
    end
  end
end
