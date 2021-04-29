---
templateKey: feature
title: "Feature: Temporary Closure "
date: 2021-04-29T15:01:48.091Z
---
@bau-378 @dashboard 
Scenario: Closed venues shown on dashboard
Given some venues have been temporarily closed
When the Temporary Closure dashboard is reviewed
Then the closed venue House Ids are shown
And the closed venue pub names are shown

@bau-378 @dashboard 
Scenario Outline: Closed venues list updated
Given some venues have been temporarily closed
When the a venue is <addedOrRemoved> to the list of closed venues
Then the dashboard is updated
And the <addedOrRemoved> venue is <presentOrNot> on the dashboard
Examples:
| addedOrRemoved | presentOrNot |
| added | present |
| removed | not present |

@bau-380 @displayClosures 
Scenario: Closed venues show closed message in opening hours
Given a venue has been temporarily closed in the dashboard
When the venue page is reviewed
Then the opening hours in the Essentials module has been set to �Closed�
And the serving hours in the Essentials module has been set to �Closed�
And the opening hours in the header has been set to �Closed�

@bau-380 @displayClosures 
Scenario: Closed venues show closed message in pub finder results list
Given a venue has been temporarily closed in the dashboard
When the venue is search for in the pub finder module
Then the opening hours in the pub finder results card show the venue is closed

@bau-380 @displayClosures 
Scenario: Open venue is closed
Given a venue is open with standard opening hours
When the a venue is added to the list of closed venues
Then the opening hours are set to Closed

@bau-380 @displayClosures 
Scenario: Closed venue is opened
Given a venue is closed
And does not have any special opening hours
When the a venue is removed from the list of closed venues
Then the opening hours are set to the standard opening hours

@bau-380 @displayClosures 
Scenario: Special Opening hours venue is closed
Given a venue is open with special opening hours
When the a venue is added to the list of closed venues
Then the opening hours are set to Closed

@bau-380 @displayClosures 
Scenario: Closed venue is opened with Special Opening hours
Given a venue is closed 
And does have special opening hours set
When the a venue is removed from the list of closed venues
Then the opening hours are set to the Special opening hours previously set