/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


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
      <p>${timeago.format(tweet.created_at)}</p>
    </div>
    <div class="icon">
      <i class="fa-solid fa-flag"></i>
      <i class="fa-solid fa-retweet"></i>
      <i class="fa-solid fa-heart"></i>
    </div>
  </footer>
</article>`;
  };
  //line 55 implement timeago, first need to add src or npm install

  // (form).submit see https://api.jquery.com/submit/
  $('form').submit(function(event) {
    event.preventDefault();
    let val = $(this).serialize();
    let content = $('#tweet-text').val();
    // see documentaion https://api.jquery.com/serialize/
    if (content.length === 0) {
      $('.alert.error.no-content').addClass('open');
      return false;
    }
    if (content.length > 140) {
      $('.alert.error.maximum').addClass('open');
      return false;
    }
    $('.alert.error.no-content').removeClass('open');
    $('.alert.error.maximum').removeClass('open');
    $.post("/tweets", val)
      .done(function(data) {
        $.get('/tweets', function(data) {
          const latest = data[data.length - 1];
          const latestTweet = createTweetElement(latest);
          $('.tweets').prepend(latestTweet);
          $('form').trigger("reset");
          $('output').text(140);
        });
      });
  });

  
  const loadTweets = function() {
    $.get('/tweets', function(data) {
      data.reverse();
      renderTweets(data);
    });
  };
  loadTweets();
  
});












