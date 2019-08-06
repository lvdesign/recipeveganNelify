## Vegan recipe version 2

-  rest server avec pipeline.


Deploy your changes
Make some changes to the code you just cloned and deploy them to Heroku using Git.

Install the Heroku CLI
Download and install the Heroku CLI.

If you haven't already, log in to your Heroku account and follow the prompts to create a new SSH public key.

$ heroku login
Clone the repository
Use Git to clone veganrecipeblv's source code to your local machine.

$ heroku git:clone -a veganrecipeblv
$ cd veganrecipeblv
Deploy your changes
Make some changes to the code you just cloned and deploy them to Heroku using Git.

$ git add .
$ git commit -am "make it better"
$ git push heroku master