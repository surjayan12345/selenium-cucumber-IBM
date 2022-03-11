Feature: Return

  Background: Login
    Given User is on the site
    When User enters username and password
    And Clicks on login
    And Clicks on Sales and then Returns
    Then User is navigated to the Returns page

  @addNewRecord
  Scenario Outline: Add New
    Given user clicks on the add new button
    And User is on the Add Product Return
    When User enters "<order_ID>" "<first_name>" "<last_name>" "<email>" "<telephone>" "<Product>"
    And Clicks on save button
    Then Success message is displayed

    Examples: 
      | order_ID | first_name | last_name | email          | telephone | Product                 |
      |      222 | gojo       | satoro    | beta@gmail.com | 123456789 | FULL SLEEVS SWEAT SHIRT |

  @editRecord
  Scenario Outline: Edit
    Given User clicks  on the edit button
    When User edits the information "<order_ID>" "<first_name>" "<last_name>" "<email>" "<telephone>" "<Product>"
    And Clicks on save button
    Then Success message is displayed

    Examples: 
      | order_ID | first_name | last_name | email           | telephone  | Product                 |
      |      128 | naruto     | uzumaki   | Alpha@gmail.com | 7896302145 | FULL SLEEVS SWEAT SHIRT |

  @deleteRecord
  Scenario: Delete
    Given User selects one or multiple checkbox
    When User Clicks on the delete button and confirms
    Then Success message is displayed
