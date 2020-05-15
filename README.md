# Natours

Built using modern technologies: node.js, express, mongoDB, mongoose and friends 😁

## Index

- [Demo](#demo)
- [Features](#features)
- [Installation](#installation)
- [Author](#author)

## Demo<a name="demo"></a>

Check [Demo](https://infinite-sierra-01777.herokuapp.com/)

## Features<a name="features"></a>

- Use [Express](https://expressjs.com/) as the application Framework.
- Use [MongoDB](https://www.mongodb.com/) as the database.
- Use [SendGrid](https://sendgrid.com/) for send email to the client.
- Use [Stripe](https://stripe.com/en-fi) for online payment processing

## Installation<a name="installation"></a>

### Running Locally

Make sure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.

1.  Clone or Download the repository

    ```
    $ git clone https://github.com/anhminh10a2hoa/Natours
    ```

2.  Install Dependencies

    ```
    $ npm install
    ```

3.  Create your config.env and add

    ```
    NODE_ENV=development
    PORT=3000
    DATABASE=your-database
    DATABASE_PASSWORD=your-database-password
    JWT_SECERT=your-seceret-jsonwebtoken
    JWT_EXPIRES_IN=your-expiration-time
    JWT_COOKIE_EXPIRES_IN=your-expiration-time

    EMAIL_USERNAME=username-of-mailtrap
    EMAIL_PASSWORD=password-of-mailtrap
    EMAIL_HOST=host-of-mailtrap
    EMAIL_PORT=port-of-mailtrap

    EMAIL_FROM=your-email

    SENDGRID_USERNAME=your-sendgrid-username
    SENDGRID_PASSWORD=your-sendgrid-password

    STRIPE_SECRET_KEY=your-stripe-secret-key

    ```

4.  Start the application

        ```
        $ npm start
        ```

    Your app should now be running on [localhost:3000](http://localhost:3000/).

### Deploying to Heroku

Make sure you have the [Heroku Toolbelt](https://toolbelt.heroku.com/) installed.

1. Create a new Heroku application, and push your chat application to a Git remote repository

   ```
   $ heroku create
   $ git push heroku master
   ```

   or

   [![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

2. Now, you need to set up configuration variables on Heroku.

   1. Go to Settings -> Reveal Config Vars.
   2. Add configuration variables. All needed variables are inside _app/config/index.js_.
      Typically, these are the configuration variables you need to assign:
      `{ dbURI, sessionSecret, facebookClientID, facebookClientSecret, twitterConsumerKey, twitterConsumerSecret }`(see [Setup Configurations](#configurations)).

3. One last step is to add [Redis](http://redis.io/) as an Add-on on Heroku.
   1. Go to Resources -> Add-ons
   2. Select Heroku Redis
      > You need to setup a billing account even if the add-on is free.
4. Open your chat application in the browser

   ```
   $ heroku open
   ```

## Author<a name="author"></a>

Name: Hoang Anh Minh <br>
Email: hoanganhminh10a2hoa@gmail.com
