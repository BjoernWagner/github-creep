#Github Creep v1.0

######A Makers Academy Project (Week 8: AngularJS)

####Authors
* Rebecca Piper
* Alain Lemaire
* David Parry
* Bjoern Wagner

##Description
A dynamic Github user look-up tool, offering the ability to search for users by name or username. Profiles are searched using Github's API and return users' number of followers, number of repositories and location.

##Technologies
* AngularJS
* HTML & CSS
* Node
* Protractor
* JSON

##Screenshots
A list of Github-members from MakersAcademy 
* ![alt tag](http://i.imgur.com/s9iCSyL.jpg)

##Search for Github-members
* ![alt tag](http://i.imgur.com/6hZhycs.jpg)

##Instructions
* Create a local version of the project by entering `git clone https://github.com/BjoernWagner/github-creep` in a shell application (e.g., Terminal).
* Access the development environment by starting a local server session (`npm start`) and directing your browser to `http://localhost:8000/app/index.html`.
* Run feature tests via the `npm start protractor` script.
* Run unit tests via the `npm test` script.

##Known Issues
* Excessive controller logic for building user lists needs to be refactored into a separate factory (included, but disabled [not working]).
* Test suite does not comprehensively cover controller logic.

## Implemented User Stories
```
As a hiring partner
So I can view information about Github users rapidly
I want a list of Github users
```
```
As a hiring partner
So I can find a specific user
I want to search for a particular user by username and view them in the list
```
```
As a hiring partner
So I can see what a user looks like
I want to view each user's avatar in the list

```
```
As a hiring partner
So I can see how popular a user is
I want to view the number of followers for each user in the list
```
```
As a hiring partner
So I can see how prolific a user is
I want to view the number of repos each user in the list has
```
```
As a hiring partner
So I can easily use this app
I want a beautiful frontend
```
