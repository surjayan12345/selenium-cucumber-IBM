Feature: Information

  Background: Login
    Given User is on the site
    When User enters username and password
    And Clicks on login
    And Clicks on catalog and Information
    Then User is navigated to the Information page

  @addNewInformation
  Scenario Outline: Add New
    Given user clicks on the add new button
    And User is on the Add Information page
    When User enters "<infoTitle>" "<description>" "<megaTag>"
    And Clicks on save button
    Then Success message is displayed

    Examples: 
      | infoTitle | description    | metaTag |
      | mobile    | android mobile | samsung |
  #@editInformation
  #Scenario Outline: Edit
    #Given User clicks  on the edit button
    #When User edits the information "<infoTitle>" "<description>" "<megaTag>"
    #And Clicks on save button
    #Then Success message is displayed and edit is confirmed
#
    #Examples: 
      #| infoTitle | description    | metaTag     |
      #| laptop    | windows laptop | hp pavilion |
#
  #@deleteInformation
  #Scenario: Delete
    #Given User selects one or multiple checkbox
    #When User Clicks on the delete button and confirms
    #Then Success message is displayed and delete is confirmed
