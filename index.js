const WPAPI = require("wpapi");
const apiPromise = WPAPI.discover(
  "https://8d32eeb4-e76a-4e02-9b37-5367d0ddc6ce.static.getshifter.net/wp-json/"
);

apiPromise.then(function (site) {
  site.posts().then(function (posts) {
    console.log(posts._paging);
  });
});
