'use strict';


describe('GithubCreep', function() {

  describe('github users list view', function() {

    beforeEach(function() {
    browser.get('index.html');

    });

    it('should display a list of github users', function() {
        var userList = element.all(by.repeater('user in users'));
        var query = element(by.model('query'));
        var button = element(by.id('button'));

        query.sendKeys('drjparry');
        button.click();

        expect(userList.count()).toBe(1);
    });

  });

});

