# My-Movies

### GA WDI London - Project 2

### Brief

This is an example RESTful App with several models being stored in a mongo database.

As a huge movies fan, I decided to create my own collection which contains a list of my favorites movies selected by their directors.
The user in addition to visit this app, can also add new movies and new directors based on his preferences.

You can find it [here](https://mycollectionmovies.herokuapp.com/)

### Featuces
- Authentication with BCrypt
- Login redirects to previously viewd page (see `controller/sessions.js` )
- User can add movies and directors and favorite movies
- Users can only modify data they have added themselves
- Users ca add comments and rating to the movies
- User's movies populated with a virtual (see `models/user.js`)
- Frontend form validation with HTML5 and [jQuery Validate Plugin](https://jqueryvalidation.org/)


#### Run Locally

You will need [node](https://nodejs.org/) and [mongodb](https://www.mongodb.com/) set up on your local environment.

If you do not have them, I would advise installing them with [homebrew](https://brew.sh/) (Mac only).


- Download or clone the [Github repo](https;//github.com/Gio85/WDI-project2)
- Run `yarn install` or `npm install` in the terminal to install all the dependencies
- Run `yarn seed` or `node db/seeds` to seed the database
- Run `node index.js` (or simply `nodemon` if you have nodemon installed) to start the app.

### Technologies

To create this project I used the following technologies:

- HTML5
- SCSS
- Bulma
- JavaScript (ECMAScript 6)
- jQuery
- Node.js
- Express.js
- EJS
- MongoDB
- Mongoose
- BCrypt
- Gulp
- Yarn

### Challenges faced


### Wins
 

### Future Features
There are few improvements that I would love to add.

- Improve the code and fixing the bugs.
- Improve the UI which is not perfect at the moment.
- Adding an Admin user in order to check and approve movies.

![BestMovie](https://user-images.githubusercontent.com/20437891/30336323-bf94103e-97dc-11e7-8989-b98c4142b4b3.png)

![BestMovie](https://user-images.githubusercontent.com/20437891/30336425-132ce3ba-97dd-11e7-8128-b61044a67d44.png)

![BestMovie](https://user-images.githubusercontent.com/20437891/30336371-e52ee2a6-97dc-11e7-8470-5a93f61a5da7.png)

![BestMovie](https://user-images.githubusercontent.com/20437891/30336479-2fc40e2c-97dd-11e7-8970-d3c9acc4cc4c.png)

### Notes

- Feel free to create an account and add movies and directors
- All images and synopsis taken from [IMDb](http://www.imdb.com/?ref_=nv_home), [Wikipedia](https://en.wikipedia.org/wiki/Main_Page)
- Styled with [Bulma](http://bulma.io/)
