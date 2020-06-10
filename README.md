# Brew Finder 

## Abstract 

In our last week of our third quarter at Turing School of Software & Design, we were given a solo project (to do on our own), where we were told to find a public API to use, choose a specific audience, and create an application centered around it. After some research, I found a great API called Open Brewery DB - an API for breweries around the United States. They have endpoints for searching by city, state, or zip code. Each brewery dataset comes with a name, street address, type of brewery, etc. For my project, I decided to create a mobile application called Brew Finder - it is geared towards beer lovers who are likely traveling. It is an on-the-go application where a user can log on, enter in what city, state, or zip code they'd like to search within, and then see popular breweries within that location. A user is able to favorite certain breweries, and add them to an upcoming visit list, where they can check them off and then rate them from 1-5. 

## Specific Objectives

1. Display a strong understanding of React architecture using lightweight components. 
2. Utilize React Router to allow a user to use the forward and back buttons on their browser, and have different URLs for each page. 
3. Build out a robust testing suite using the React Testing Library with integration tests and unit tests. 
4. Utilize the Fetch API to pull in data from another, brand new API. 
5. Make strong use of asynchronous JavaScript, within individual components while fetching, and within testing suites. 
6. Refactor code into clean, empathetic code. 

## Installation

> Clone down this repo into an empty directory on your local machine
>
> Run `npm install` in your teminal to install the project's dependencies
>
> Run `npm start` to run the application in development mode
>
> Visit [http://localhost:3000](http://localhost:3000) to view it in the browser
>
> In your developer tools, click "Toggle device toolbar" and choose the setting for iPhone 6/7/8 Plus to view in the intended format
>
> This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Challenges & Looking Ahead

This project was a wonderful project to test out our abilities in React and the React Testing Library, especially after only working in groups for the past few weeks. One major challenge that proved to be highly beneficial in the end was getting more well-acquainted with conditional rendering - I had only watched group members do this in other projects, so getting a chance to implement it myself was pretty challenging but it is a great skill to know. Another challenge was testing - throughout this quarter at Turing, the learning curve has been steep with understanding their testing library, but with each project, it's gotten a bit easier. My integration tests were definitely the hardest, and asynchronous testing (mocking out a fetch as well) was pretty difficult. Looking forward, I understand that this project is truly only designed for mobile (I didn't put in any media queries for desktop so it looks awful when a user expands the screen). So I would like to spend some time adding in some media queries to make the project a bit more versatile. Another thing I would have loved to implement into this project was local storage, so that a user's favorites and to-visits would save past refresh, but I unfortunately didn't have much time. The last thing that I was hoping to implement was bringing in the Google Maps API to add a bit more visual stimulation to the application, but I've never used this API and didn't have time to pick it up. 

## Brew Finder - In Action 

<img src="https://i.imgur.com/HgtqBkP.png" alt="Home Screen" width=300/>
<img src="https://i.imgur.com/W4gZeji.png" alt="Filled out Form" width=300/>
<img src="https://i.imgur.com/uBdoFsF.png" alt="Breweries Page" width=300/>
<img src="https://i.imgur.com/OxwOhVf.png" alt="Favorites Page" width=300/>
<img src="https://i.imgur.com/J7rUya2.png" alt="Pubs to Visit" width=300/>
<img src="https://i.imgur.com/RY1vFmu.png" alt="Rating Form" width=300/>
