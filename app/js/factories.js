githubCreep.factory("UserFactory", function() {
  UserFactory = function() {
    this.name = rawObject.name;
    this.repos = rawObject.public_repos;
    this.followers = rawObject.followers;
    this.location = rawObject.location;
  };

  return UserFactory;
});