@Web
Feature: Google Search

  @WebSearch
  Scenario: Search Quantum
    Given Add report comment "Add comment"
    Given I go to the "GooglePage" page
    Then The device timezone should be "blabla"
    #Then The device timezone must be "cho cho"
    When I search for "quantum perfecto"
    Then It should have "Introducing Quantum Framework" in search results


