Feature: Craigslist housing page.

  Scenario: Sorting should have correct sorting options before search is used.
    Given I open housing page
    When I sort items ascending
    Then I see items are sorted ascending
    When I sort items descending
    Then I see items are sorted descending
