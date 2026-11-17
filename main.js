// SeatRota — progressive enhancement only. The page works without this file.
(function () {
  'use strict';

  // Pause the rota loop while it is off screen, so it costs nothing.
  var board = document.querySelector('.board');
  if (board && 'IntersectionObserver' in window) {
    new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        board.classList.toggle('is-off', !e.isIntersecting);
      });
    }).observe(board);
  }
})();
