require 'test_helper'

class ApiControllerTest < ActionDispatch::IntegrationTest
  test "should get ensure_logged_in" do
    get api_ensure_logged_in_url
    assert_response :success
  end

end
