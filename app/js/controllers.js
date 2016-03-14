'use strict';

githubCreep.controller('UserListCtrl', ['$scope', '$http', function($scope, $http) {
  const USER_DISPLAY_COUNT = 10;

  var self = this;

  self.displayDefault = function() {
    $http.get('https://api.github.com/orgs/makersacademy/members').then(function(response) {
      let results = response.data.slice(0, USER_DISPLAY_COUNT);
      self._buildUserList(results);
    });
  };

  self.searchUser = function() {
    $http.get('https://api.github.com/search/users?q=' + $scope.query).then(function(response) {
      let results = response.data.items.slice(0, USER_DISPLAY_COUNT);
      self._buildUserList(results);
    });
  };

  self._buildUserList = function(results) {
    self.users = [];
    for (let result of results) {
      $http.get('https://api.github.com/users/' + result.login).then(function(response) {
       self.users.push(response.data);
        // self.users.push(new UserFactory(response.data));
      });
    };
  };
}]);