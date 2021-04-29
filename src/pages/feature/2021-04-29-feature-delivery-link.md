---
templateKey: feature
title: "Feature: Delivery Link"
date: 2021-04-29T13:29:10.328Z
description: /
featuredpost: true
featuredimage: https://gifted-poincare-daf56c.netlify.app/static/ad53658d229612b8d23d0307be253419/0b3e1/chemex.jpg
---
@bau-390
Scenario: Delivery link is present in navigation
Given a delivery URL has been added to a venue in the CMS
When the venue website is viewed
Then there is a Delivery link on the navigation

@bau-390
Scenario: Delivery link opens in a new tab
Given a venue has a Delivery link in the navigation
When the link is selected
Then a new tab is opened
And the Delivery page is shown

@bau-390
Scenario: Delivery link is not present if not in the CMS
Given a delivery URL has NOT been added to a venue in the CMS
When the venue website is viewed
Then there is no Delivery link in the navigation

@bau-390
Scenario: Delivery link can be toggled off by Brand
Given a venue has a Delivery link in the navigation
When that venue's Brand has the delivery links toggled off
Then there is no Delivery link in the navigation of that venue