# MyMovies:
###GA WDI London - Project 2

This is an example RESTful Express App with EJS for a project at General Assembly.

You can find it [here](https://bestmovies88.herokuapp.com/)

![BestMovie](https://user-images.githubusercontent.com/20437891/30335930-7f07ee42-97db-11e7-8466-51855bbca997.png)

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

![BestMovie](https://user-images.githubusercontent.com/20437891/30336323-bf94103e-97dc-11e7-8989-b98c4142b4b3.png)

![BestMovie](https://user-images.githubusercontent.com/20437891/30336425-132ce3ba-97dd-11e7-8128-b61044a67d44.png)

- Users can add directors

![BestMovie](https://user-images.githubusercontent.com/20437891/30336371-e52ee2a6-97dc-11e7-8470-5a93f61a5da7.png)

- Users can only modify data they have added themselves
- Users can add comments and rating to the movies

![BestMovie](https://user-images.githubusercontent.com/20437891/30336479-2fc40e2c-97dd-11e7-8970-d3c9acc4cc4c.png)

- User's movies populated with a virtual (see `models/user.js`)
- Frontend form validation with HTML5 and [jQuery Validate Plugin](https://jqueryvalidation.org/)

#### The build

* HTML 5, CSS, jQuery, Express, NodeJs were used to create this project. 
 
## Notes

- Feel free to create an account and add movies and directors
- All images and synopsis taken from [IMDb](http://www.imdb.com/?ref_=nv_home), [Wikipedia](https://en.wikipedia.org/wiki/Main_Page)
- Styled with [Bulma](http://bulma.io/)
