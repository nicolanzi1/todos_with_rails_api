Rails.application.routes.draw do
  get 'steps/create'
  get 'steps/index'
  get 'steps/destroy'
  get 'steps/update'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'
  namespace :api, defaults: { format: :json } do
    resources :todos, only: [:index, :show, :create, :destroy, :update] do
      resources :steps, only: [:index, :create]
    end

    resources :steps, only: [:update, :destroy]
  end
end
