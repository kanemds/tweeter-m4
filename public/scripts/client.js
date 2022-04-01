/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
];

$(document).ready(function() {

  const renderTweets = function(tweets) {
    let html = "";
    for (const tweet of tweets) {
      html += createTweetElement(tweet);
    }
    $('.tweets').append(html);
  };

  const createTweetElement = function(tweet) {
    return `<article class="tweet">
  <header class="tweet-user flex">
    <div class="name">
      <i class="fa-regular fa-face-grin-wide"></i>
      ${tweet.user.name}
    </div>
    <div class="ip">${tweet.user.handle}</div>
  </header>
  <div class="message">
    <p>${tweet.content.text}</p>
  </div>
  <footer class="tweet-footer flex">
    <div class="time">
      <p>${tweet.created_at}</p>
    </div>
    <div class="icon">
      <i class="fa-solid fa-flag"></i>
      <i class="fa-solid fa-retweet"></i>
      <i class="fa-solid fa-heart"></i>
    </div>
  </footer>
</article>`;

  };
  renderTweets(data);
});










