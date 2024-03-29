(function() {
  var Curve, Tween, fn, name, scope, _fn,
    __hasProp = Object.prototype.hasOwnProperty;

  Tween = {
    linear: function(t, b, c, d) {
      return c * t / d + b;
    },
    easeInQuad: function(t, b, c, d) {
      t /= d;
      return c * t * t + b;
    },
    easeOutQuad: function(t, b, c, d) {
      t /= d;
      return -c * t * (t - 2) + b;
    },
    easeInOutQuad: function(t, b, c, d) {
      t /= d / 2;
      if (t < 1) {
        return c / 2 * t * t + b;
      } else {
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      }
    },
    easeInCubic: function(t, b, c, d) {
      t /= d;
      return c * t * t * t + b;
    },
    easeOutCubic: function(t, b, c, d) {
      t /= d;
      t--;
      return c * (t * t * t + 1) + b;
    },
    easeInOutCubic: function(t, b, c, d) {
      t /= d / 2;
      if (t < 1) {
        return c / 2 * t * t * t + b;
      } else {
        t -= 2;
        return c / 2 * (t * t * t + 2) + b;
      }
    },
    easeInQuart: function(t, b, c, d) {
      t /= d;
      return c * t * t * t * t + b;
    },
    easeOutQuart: function(t, b, c, d) {
      t /= d;
      t--;
      return -c * (t * t * t * t - 1) + b;
    },
    easeInOutQuart: function(t, b, c, d) {
      t /= d / 2;
      if (t < 1) {
        return c / 2 * t * t * t * t + b;
      } else {
        t -= 2;
        return -c / 2 * (t * t * t * t - 2) + b;
      }
    },
    easeInQuint: function(t, b, c, d) {
      t /= d;
      return c * t * t * t * t * t + b;
    },
    easeOutQuint: function(t, b, c, d) {
      t /= d;
      t--;
      return c * (t * t * t * t * t + 1) + b;
    },
    easeInOutQuint: function(t, b, c, d) {
      t /= d / 2;
      if (t < 1) {
        return c / 2 * t * t * t * t * t + b;
      } else {
        t -= 2;
        return c / 2 * (t * t * t * t * t + 2) + b;
      }
    },
    easeInSine: function(t, b, c, d) {
      return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
    },
    easeOutSine: function(t, b, c, d) {
      return c * Math.sin(t / d * (Math.PI / 2)) + b;
    },
    easeInOutSine: function(t, b, c, d) {
      return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
    },
    easeInExpo: function(t, b, c, d) {
      return c * Math.pow(2, 10 * (t / d - 1)) + b;
    },
    easeOutExpo: function(t, b, c, d) {
      return c * (-Math.pow(2, -10 * t / d) + 1) + b;
    },
    easeInOutExpo: function(t, b, c, d) {
      t /= d / 2;
      if (t < 1) {
        return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
      } else {
        t--;
        return c / 2 * (-Math.pow(2, -10 * t) + 2) + b;
      }
    },
    easeInCirc: function(t, b, c, d) {
      t /= d;
      return -c * (Math.sqrt(1 - t * t) - 1) + b;
    },
    easeOutCirc: function(t, b, c, d) {
      t /= d;
      t--;
      return c * Math.sqrt(1 - t * t) + b;
    },
    easeInOutCirc: function(t, b, c, d) {
      t /= d / 2;
      if (t < 1) {
        return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
      } else {
        t -= 2;
        return c / 2 * (Math.sqrt(1 - t * t) + 1) + b;
      }
    }
  };

  Tween.low = Tween.easeInSine;

  Tween.high = Tween.easeOutSine;

  Tween.ease = Tween.easeInOutSine;

  Tween.low2 = Tween.easeInQuad;

  Tween.high2 = Tween.easeOutQuad;

  Tween.ease2 = Tween.easeInOutQuad;

  Tween.low3 = Tween.easeInCubic;

  Tween.high3 = Tween.easeOutCubic;

  Tween.ease3 = Tween.easeInOutCubic;

  Tween.low4 = Tween.easeInQuart;

  Tween.high4 = Tween.easeOutQuart;

  Tween.ease4 = Tween.easeInOutQuart;

  Tween.low5 = Tween.easeInQuint;

  Tween.high5 = Tween.easeOutQuint;

  Tween.ease5 = Tween.easeInOutQuint;

  Curve = {};

  _fn = function(name, fn) {
    return Curve[name] = function(n) {
      return fn(n, 0, 1, 1);
    };
  };
  for (name in Tween) {
    if (!__hasProp.call(Tween, name)) continue;
    fn = Tween[name];
    _fn(name, fn);
  }

  scope = typeof window !== "undefined" && window !== null ? window : exports;

  scope.Tween = Tween;

  scope.Curve = Curve;

}).call(this);
