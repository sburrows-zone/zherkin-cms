---
templateKey: feature
title: Show Pubs as Closed
date: 2021-04-29T15:01:39.440Z
---
Feature: Show Pubs as closed



@bau-181
Scenario Outline: Closed Pub is shown as Closed
Given the pub opening hours have been set to Closed in Heart
When the <openingHoursLocation> is loaded
Then the opening hours show the pub is closed
Examples:
| openingHoursLocation |
| Venue Landing Page |
| Legacy Pub finder search results page |
| GraphQL Pub finder search results page |




@bau-181
Scenario Outline: Open Pub shows opening hours
Given the pub opening hours have been set to Not Closed in Heart
When the <openingHoursLocation> is loaded
Then the opening hours show the pub opening hours
Examples:
| openingHoursLocation |
| Venue Landing Page |
| Legacy Pub finder search results page |
| GraphQL Pub finder search results page |




@bau-181
Scenario Outline: Pubs are closed on a case by case basis
Given the Heart data for the <venue> is set to <HeartOpenOrClosed>
When the venue landing page is opened
Then the <venue>�s opening hours are set to <openOrClosed>
Examples:
| venue | HeartOpenOrClosed | openOrClosed |
| Shakespear pub | Open | Standard opening hours |
| Lodekka pub | Closed | Closed |




@bau-181
Scenario Outline: Closed message can be changed in the CMS
Given the <brand> closed message is in the CMS
When this message is changed by the user
Then the new closed message is shown on the appropriate <brand> venues
Examples:
| Greene King |
| Hungry Horse |
| Belhaven Inns |
| Chef and Brewer |
| Farmhouse Inns |