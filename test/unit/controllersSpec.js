'use strict';

describe('githubCreep controllers', function() {
  describe('userListCtrl', function() {
    var scope, ctrl, $httpBackend;

    beforeEach(module('githubCreep'));

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      //$scope.query.and.returnValue('drjparry');
      //_$httpBackend_.expectGET ...
      $httpBackend.expectGET('https://api.github.com/search/users?q=drjparry'/* + $scope.query */).respond(
        {
          "items":  [{
                      "login": "drjparry",
                      "id": 13313921,
                      "avatar_url": "https://avatars.githubusercontent.com/u/13313921?v=3"
                    }]
        }
      );

      scope = $rootScope.$new();
      ctrl = $controller('userListCtrl', {$scope: scope});
    }));

    it('stores result of API call in users', function() {

      $httpBackend.flush();

      expect(scope.users).toEqual([{
                                  "login": "drjparry",
                                  "id": 13313921,
                                  "avatar_url": "https://avatars.githubusercontent.com/u/13313921?v=3"
                                  }]);

    });
  });
});