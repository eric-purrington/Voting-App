# Vote Goat

Alyssa Hellrung, Joanna Preston, Eric Purrington, Sabah Syed

![image](https://user-images.githubusercontent.com/57811605/89361054-18979780-d67f-11ea-8ab4-69cfa94b3dc1.png)

## Description

A web app that provides users with information about when, where, and how to vote in their area and gives them access to contact information about their representatives.

## Table of Contents

- [User Story](#user-story)

- [Technologies Used](#technologies-used)

- [NPM Packages](#npm-packages)

- [How to Use](#how-to-use)

- [Link to Presentation](#link-to-presentation)

- [Deployed Application](#deployed-application)

- [GitHub Repo](#github-repo)

- [Directions for Future Development](#directions-for-future-development)

## User Story

As a USER,
I WANT a web application that allows me to easily find information about voting in my area
So THAT I can be a well-informed citizen who participates in the democratic process.

## Technologies Used  

Built in Visual Studio with    
HTML    
CSS    
UIkit  
Javascript  
Node.js    
Express    
MongoDB  
Mongoose   
React  
Auth0     

## Npm Packages  

Axios  
React-Calendar  
React-countdown-now

## APIs  

Google Civic API  
MapQuest Geocoding API (with Eric's custom distance measurements using the Haversine formula)    

## How to Use  
Navigate to https://vote-goat.herokuapp.com/. On the Home page, you will see a countdown to the next general election, a link to register to vote, and three choices of pages to visit: "When", "Where", and "Who". Click "When" to see a calendar and list of upcoming elections all over the United States. Click "Where" and enter a complete home address to see all of polling places and ballot drop-off locations near that address. Click "Who" and enter a zip code to see all of the elected representatives for citizens in that zip code, from local officals like city councilmembers all the way to federal officials like president and vice president of the United States.
    
Go to the menu and click "Signup" or "Login" to have access to bonus features. You will be directed to Auth0 to create an account or sign in using an existing Gmail account. Then you will arrive back at Vote Goat and be able to save upcoming election dates, polling locations, and representatives' contact information to your personal dashboard.  

![image](https://media.giphy.com/media/mF5rJefLZbMPG8vBAL/giphy.gif)
    
When you are all finished, log out and go vote!  

## Link to Presentation  

[Presentation Slides](https://docs.google.com/presentation/d/1dlZHA3vzadiruMZRbysk-JjpTdYnFAogLtp9jg1xuaY/edit#slide=id.p)  

## Deployed Application:  

https://vote-goat.herokuapp.com/  

## GitHub Repo:

https://github.com/eric-purrington/Voting-App

## Directions for Future Development

--Email reminders about important registration and voting dates  
--Maps that show where polling places and ballot drop-off boxes are located   