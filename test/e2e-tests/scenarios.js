'use strict';


describe('GithubCreep', function() {

  describe('github users list view', function() {

    beforeEach(function() {
    browser.get('index.html');

    });

    it('should search by username', function() {
        var userList = element.all(by.repeater('user in users'));
        var query = element(by.model('query'));
        var button = element(by.id('button'));

        query.sendKeys('drjparry');
        button.click();

        expect(userList.count()).toBe(1);
    });

    it('should display top 20 github users by default', function(){
        var defaultList = element.all(by.repeater('user in users'));
        expect(defaultList.count()).toBe(20);
    });

  });

});

