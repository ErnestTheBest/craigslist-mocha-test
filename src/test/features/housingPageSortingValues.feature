Feature: Craigslist housing page.

  Scenario: Sorting should have correct sorting options before search is used.
    Given I open housing page
    Then I see correct sorting options before search is used

  Scenario: Sorting should have correct sorting options after search is used.
    Given I open housing page
    When I search for "a" on housing page
    Then I see correct sorting options after search is used
