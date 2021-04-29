---
templateKey: feature
title: "Feature: Emergency Delivery hours"
date: 2021-04-29T14:52:32.482Z
---
@serving-times; @bau-113
Scenario: Serving hours are present on menu pages
Given a venue has a menu page
And the venue has valid serving hours in Heart
When the page is reviewed
Then the serving hours are shown on the page

@serving-times; @bau-113
Scenario Outline: Serving hours on desktop and mobile views
Given a venue has a menu page
And the venue has valid serving hours in Heart
When the page is reviewed on a <desktopOrMobile> device
Then the serving hours are shown <location>
Examples:
| desktopOrMobile | location |
| desktop | on the left hand navigation under dietary needs |
| mobile | at the top of the page under the �Select Category� box |

@serving-times; @bau-113
Scenario Outline: Serving hours not shown if there are no serving hours available
Given a venue has a menu page
And the venue has no valid serving hours in Heart
When the page is reviewed on a <desktopOrMobile> device
Then the serving hours are not shown 
Examples:
| desktopOrMobile |
| desktop |
| mobile |

@serving-times; @bau-113
Scenario: Venue can have two sets of Serving hours
Given a venue has a menu page
And the venue has two sets of valid serving hours in Heart
When the page is reviewed
Then the serving hours are shown on the page
And it is clear there are two sets of serving hours in a day

@serving-times; @bau-113
Scenario: Serving hours box can open to show whole week
Given a venue has a menu page
And the venue has valid serving hours in Heart
When the serving hours module is opened
Then the serving hours for the whole week are shown

@serving-times; @bau-113
Scenario: Serving hours show Special Opening Hours if applicable
Given a venue has a menu page
And the venue has updated serving hours via the special opening hours function
When the page is reviewed
Then the serving hours are shown on the page
And these serving hours match those from the Special Opening hours

@serving-times; @bau-113
Scenario: Serving hours show on all menu sub-pages
Given a venue has a menu page
And the venue has valid serving hours in Heart
When the menu subpages are reviewed
Then the serving hours are shown on the page