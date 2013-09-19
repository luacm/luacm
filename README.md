# Getting Started
## Installing Software
To start contributing to the ACM website, you'll need to first get your dev environment setup. That means you'll need to install the following things:

1. Node.js
2. MongoDB
3. Heroku Toolbelt

### Installing Node.js
To install node, simply go to [nodejs.org](http://nodejs.org/). From there, just click the download button and follow the step-by-step instructions in the installer.

You can verify your node installation is working by typing ```node --version``` in the terminal. It should give you some number.

### Installing MongoDB
This [tutorial](http://www.mkyong.com/mongodb/how-to-install-mongodb-on-mac-os-x/) does a fantastic job getting you setup on Mac OSX. It should be an identical process on Linux.

### Installing the Heroku Toolbelt
You can grab the installer [here](https://toolbelt.heroku.com/).

In the end, you should be able to use the command ```mongod``` to start a local mongo database, and then use ```mongo``` to connect to that locally-running database.

## Running the Site Locally (For the First Time)
Now that you have the necessary software installed, you can run the site locally. Do the following from the root project directory:

1. ```npm install```: Installs all of the required node modules for the project.
2. ```mongod```: Starts the local mongo database. 
3. ```make db```: Makes a local copy of the remote database, then runs the site. 

You can now visit the site by navigating to ```localhost:5000``` in a web browser.

## Running the Site Locally (After the First Time)
Since you've already installed the node modules, if you already have ```mongod``` running, then you only have to run ```make``` to start the site. If you want to update your local copy of the database, you can run ```make db```. Note, however, that this will cause you to lose all local modifications to your database.

