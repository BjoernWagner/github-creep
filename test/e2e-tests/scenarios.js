'use strict';


describe('GithubCreep', function() {

  describe('github users list view', function() {

    beforeEach(function() {
    browser.get('index.html');

    });

    it('should search by username', function() {
        var userList = element.all(by.repeater('user in list.users'));
        var query = element(by.model('query'));
        var button = element(by.id('button'));

        query.sendKeys('drjparry');
        button.click();

        expect(userList.count()).toBe(1);
    });

    it('should display top 10 github users by default', function() {
        var defaultList = element.all(by.repeater('user in list.users'));
        expect(defaultList.count()).toBe(10);
    });

    it('should display user avatar', function() {
        var defaultList = element(by.id('avatar'));
        expect(defaultList.getAttribute('src')).toMatch("https://avatars.githubusercontent.com/");
    });

    it('should display user followers', function(){
        var defaultList = element(by.id('followers'));
        expect(defaultList.getText()).toMatch(/Followers: \d+/)
    });

    it('should display user repos', function(){
        var defaultList = element(by.id('repos'));
        expect(defaultList.getText()).toMatch(/Repositories: \d+/)
    });
  });
});

