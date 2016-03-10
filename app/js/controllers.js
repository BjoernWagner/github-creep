
githubCreep.controller('userListCtrl', ['$scope', '$http',


  function($scope, $http) {

    $http.get('https://api.github.com/search/users?q=followers:%3E7500').success(function(data) {
      $scope.users = data.items.slice(0,20);
    });

    $scope.searchUser=function(){
      $http.get('https://api.github.com/search/users?q='+$scope.query).success(function(data) {
      $scope.users = data.items;
    });
  };

}])


// .controller('gitHubDataController', ['$scope','$http', function($scope,$http) {

// $scope.username = "pdsullivan";
// $http.get("https://api.github.com/users/"+$scope.username)
//         .success(function(data) {
//             $scope.userData = data;
//         });
// }]);