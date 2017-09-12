# BestMovie: A WDI Project

This is an example RESTful Express App with EJS for a project at General Assembly.

![BestMovie](https://user-images.githubusercontent.com/20437891/30335771-216a5e50-97db-11e7-97f6-0130a88b208e.png)

## Setup

Clone or download the repo

- run `yarn install` or `npm install` to install the dependencies
- run `yarn seed` or `node db/seeds` to seed the database
- run `node index.js` (or simply `nodemon` if you have nodemon installed) to start the app

You will need [node](https://nodejs.org/) and [mongodb](https://www.mongodb.com/) set up on your local environment.

If you do not have them, I would advise installing them with [homebrew](https://brew.sh/) (Mac only).

## Features

- Authentication with BCrypt
- Login redirects to previously viewed page (see `controllers/sessions.js`)
- Users can add and favourite movies

- Users can add directors

- Users can only modify data they have added themselves
- Users can add comments and rating to the movies

- User's movies populated with a virtual (see `models/user.js`)
- Frontend form validation with HTML5 and [jQuery Validate Plugin](https://jqueryvalidation.org/)

## Notes

- Feel free to create an account and add movies and directors
- All images and synopsis taken from [IMDb](http://www.imdb.com/?ref_=nv_home), [Wikipedia](https://en.wikipedia.org/wiki/Main_Page)
- Styled with [Bulma](http://bulma.io/)
