# Online Cook Book

Welcome on the path to create your very own online cooking book!
With this site you will be able to create, share and find recipes from all over the world!
You will have your own list of recipes that you can add recipes to by creating your own,
or you can find already made recipes by different users and add those to your list!

You also have the ability to browse your list of recipes by searching through them
Try typing: Breakfeast, lunch or dinner in the search bar to find those types of meals!
You can also look for cuisine types or recipe names!


## UX
The primary goal of Online Cook Book is to provide a easy clean way
to share and obtain more recipes that are kept in a clean list
that can be browsed through with ease to obtain whatever youre looking for!

### User goals
* Easy to navigate
* Create your own collection
* Find recipes made by others
* Have an easy time browsing your recipes


## Features

### existing Features
* Create your recipes with the new recipe option
* Look at your recipes by clicking the Profile option
* update and edit your recipes by clicking the edit button at the profile page
* Delete recipes from your list by clicking the delete button
* browse through your recipes to find a specific one using different search criteria:
*   * Recipe name: Allows search through the name of the recipe.
    * Meal type: Allows search through meal types like breakfast, lunch and dinner.
    * Cuisine type: Allows search through types of cuisine like italian, french, etc.
* Search and add Recipes created by others by clicking the search navigation item
and the corresponding Add button


## Technologies

### JQuery
* The project uses JQuery to simplify DOM manipulation
### Jinja
* The project includes Jinja to create HTML markup formates that are used with Python
### Materialize
* The project uses Materialize to have a user friendly and good looking styling to the site


## Testing

### Search button
* Click on the search button in the navbar
* type in what type of meal, type of cuisine or the recipe name
* click the search button to view the amount of recipes in the book

### Register and Log in
* register an account by inputting a username and password
* click the login button to log in with your account
* Look at your personalized profile with your recipes
* click the logout button to log out

### Create a recipe 
* Click on "New Recipe" in the navbar
* Pick the mealtype
* Input the name of the Recipe
* input the type of cuisine it is
* list the ingredients used for the recipe
* Add the tools that are required to make this recipe
* list the preparation steps to make the recipe
* click add recipe to add the recipe to your own cook book!


## Deployment

### Requirements
I made this project using Heroku, MongoDB and Github accounts.
The requirements this Project needs and uses are:
* click==7.1.2
* dnspython==2.0.0
* Flask==1.1.2
* Flask-PyMongo==2.3.0
* itsdangerous==1.1.0
* pymongo==3.11.1
* Werkzeug==1.0.1

#### Environment variables
Some of config vars needed on heroku are:
* IP
* MONGO_DBNAME
* MONGO_URI
* PORT
* SECRET_KEY


## Credits

### Acknowledgements
I recieved inspiration for this project and my site from the course lessons "Task manager" 