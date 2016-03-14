'use strict';

/* jasmine specs for controllers go here */
describe('githubCreep controllers', function() {

  describe('userListCtrl', function(){
    var scope, ctrl, $httpBackend;

    beforeEach(module('githubCreep'));
    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('users/users.json').respond('Hello FU');

      scope = $rootScope.$new();
      ctrl = $controller('userListCtrl', {$scope: scope});
    }));


    it('stores result of API call in users', function() {
      expect(scope.users).toBeUndefined();
      $httpBackend.flush();

      expect(scope.users).toEqual([
            {
              "login": "drjparry",
              "avatar_url": "https://avatars.githubusercontent.com/u/13313921?v=3"
            }]);
    });


  });
});




// 'use strict';

// describe('githubCreep controllers', function() {
//   describe('userListCtrl', function() {
//     var scope, ctrl, $httpBackend;

//     beforeEach(module('githubCreep'));

//     it('stores result of API call in users', inject(function(_$httpBackend_, $rootScope, $controller) {
      
//       $httpBackend = _$httpBackend_;
//       //$scope.query.and.returnValue('drjparry');
//       //_$httpBackend_.expectGET ...
//       $httpBackend.expectGET('bower.json').respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);
//       scope = $rootScope.$new();
//       ctrl = $controller('userListCtrl', {$scope: scope});
    
//       $httpBackend.flush();

//       expect(scope.users).toEqual([{
//                                   "login": "drjparry",
//                                   "id": 13313921,
//                                   "avatar_url": "https://avatars.githubusercontent.com/u/13313921?v=3"
//                                   }]);
//     }));
//   });
// });


    //    [{
    //       "items":  [{
    //                   "login": "drjparry",
    //                   "id": 13313921,
    //                   "avatar_url": "https://avatars.githubusercontent.com/u/13313921?v=3"
    //                 }]
    //     }]
    // 