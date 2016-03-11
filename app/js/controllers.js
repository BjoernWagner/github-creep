



githubCreep.controller('userListCtrl', ['$scope', '$http', function($scope, $http) {


    $http.get('https://api.github.com/orgs/makersacademy/members').success(function(data) {
      $scope.users = data.slice(0,10);

      var arrlength = $scope.users.length;
      $scope.followers = [];
      for (var i = 0; i < arrlength; i++) {
        $http.get('https://api.github.com/users/'+$scope.users[i].login).success(function(data){
          $scope.followers.push(data);
        });
      };

    });


    $scope.searchUser=function(){
      $http.get('https://api.github.com/search/users?q='+$scope.query).success(function(data) {
        $scope.users = data.items.slice(0,5);
        var arrlength = $scope.users.length;
        $scope.followers = [];
        for (var i = 0; i < arrlength; i++) {
        $http.get('https://api.github.com/users/'+$scope.users[i].login).success(function(data){
          $scope.followers.push(data);
        });
      };



    });

  };


}]);

