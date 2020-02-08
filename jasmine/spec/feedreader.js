/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some giof these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(
  (function() {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe("RSS Feeds", function() {
      /* This is our first test - it tests to make sure that the
       * allFeeds variable has been defined and that it is not
       * empty. Experiment with this before you get started on
       * the rest of this project. What happens when you change
       * allFeeds in app.js to be an empty array and refresh the
       * page?
       */
      it("are defined", function() {
        expect(allFeeds).toBeDefined();
        expect(allFeeds.length).not.toBe(0);
      });

      /* TODO: Write a test that loops through each feed
       * in the allFeeds object and ensures it has a URL defined
       * and that the URL is not empty.
       */
      it("each feed should have a url defined", function() {
        allFeeds.forEach(function(feed) {
          expect(feed.url).toBeDefined();
          expect(feed.url.length).not.toBe(0);
        });
      });
    });

    /* TODO: Write a test that loops through each feed
     * in the allFeeds object and ensures it has a name defined
     * and that the name is not empty.
     */
    it("each feed should have a name defined", function() {
      allFeeds.forEach(function(feed) {
        expect(feed.name).toBeDefined();
        expect(feed.name.length).not.toBe(0);
      });
    });

    /* TODO: Write a new test suite named "The menu" */
    describe("The Menu", function() {
      /* TODO: Write a test that ensures the menu element is
       * hidden by default. You'll have to analyze the HTML and
       * the CSS to determine how we're performing the
       * hiding/showing of the menu element.
       */
      it("Menu should be hidden by default", function() {
        let htmlBody = document.querySelector("body");
        let menuHidden = htmlBody.classList.contains("menu-hidden");
        expect(menuHidden).toBe(true);
      });

      /* TODO: Write a test that ensures the menu changes
       * visibility when the menu icon is clicked. This test
       * should have two expectations: does the menu display when
       * clicked and does it hide when clicked again.
       */
      it("Display menu on first click and hide on second", function() {
        let menuIcon = document.querySelector(".icon-list");
        menuIcon.click();
        expect(document.body.classList.contains("menu-hidden")).toBe(false);
        menuIcon.click();
        expect(document.body.classList.contains("menu-hidden")).toBe(true);
      });
    });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe("Initial Entries", function() {
      /* TODO: Write a test that determines when the loadFeed
       * function is called and completes its work, there is at least
       * a single .entry element within the .feed container.
       * Remember, loadFeed() is asynchronous so this test will require
       * the use of Jasmine's beforeEach and asynchronous done() function.
       */
      beforeEach(function(done) {
        loadFeed(0, function() {
          done();
        });
      });
      it("Load at least one news feed before loadFeed function is called", function(done) {
        feeds = document.body.querySelector(".feed");
        expect(feeds.childElementCount).toBeGreaterThan(0);
        done();
      });
      /* TODO: Write a new test suite named "New Feed Selection" */
      describe("New Feed Selection", function() {
        let feedOne;
        let feedTwo;
        beforeEach(function(done) {
          loadFeed(2, function() {
            let feed = document.body.querySelector(".feed");
            feedTwo = feed.children[1];
            done();
          });
          loadFeed(1, function() {
            let feed = document.body.querySelector(".feed");
            feedOne = feed.children[2];
            done();
          });
        });
        /* TODO: Write a test that makes sure when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        it("Should check if feeds loaded differently", function(done) {
          expect(feedOne).not.toBe(feedTwo);
          done();
        });
      });
    });
  })()
);
