// Test via a getter in the options object to see if the passive property is accessed
// @preserve Guglielmo Saggiorato <astyonax@gmail.com> (c) 2017
// @preserve adapted from https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md#feature-detection
var supportsPassive = false;
try {
  var opts = Object.defineProperty({}, 'passive', {
    get: function() {
      supportsPassive = true;
    }
  });
  window.addEventListener("test", null, opts);
} catch (e) {}

// Use our detect's results. passive applied if supported, capture will be false either way.
window.addEventListener('touchstart', null, supportsPassive ? { passive: true } : false);
window.addEventListener('wheel', null, supportsPassive ? { passive: true } : false);
