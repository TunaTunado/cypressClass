Feature: End to end Ecommerce validation

    application regression
    @Regression
    Scenario: Ecommerce products delivery
    Given I open ECommerce page
    When I add items to cart
    And Validate the total prices
    Then Select the country submit and verify Thank you


    @Smoke
    Scenario: Filling the form shop
    Given I open ECommerce page
    When I fill the form details
        |name | gender |
        |tunadoo | Female |
        |tutu | Female |
    Then Validate the forms behaviour
    And Select the shop page
