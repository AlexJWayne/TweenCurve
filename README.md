    // Tweens!
    Tween.easeMethod(now, beginValue, valueChange, duration); // tweened value
    Tween.easeInSine(20, 100, 100, 30);                       // 150
    Tween.easeInOutExpo(10, 50, 10, 20);                      // 55

    // Curves!
    Curve.easeMethod(normalizedFloat);                        // curved value
    Curve.easeOutQuint(0.9);                                  // 0.99999
    Curve.easeInCubic(0.1);                                   // 0.001

See [http://squeegy.github.com/TweenCurve](http://squeegy.github.com/TweenCurve) for examples.