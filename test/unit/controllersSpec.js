'use strict';

describe('githubCreep controllers', function() {

  describe('UserListCtrl', function(){
    var scope, ctrl, $httpBackend;

    beforeEach(module('githubCreep'));
    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;


      scope = $rootScope.$new();
      ctrl = $controller('UserListCtrl', {$scope: scope});
    }));


    it('stores result of API call in users', function() {
      expect(scope.users).toBeUndefined();
      $httpBackend.expectGET('https://api.github.com/orgs/makersacademy/members').respond([
  {
    "login": "Adrian1707"}]);
      ctrl.displayDefault()
      $httpBackend.expectGET('https://api.github.com/users/Adrian1707').respond('Hello Frank Underwood');
       $httpBackend.flush();
      expect(ctrl.users).toEqual(["Hello Frank Underwood"]);
    });
  });
});

