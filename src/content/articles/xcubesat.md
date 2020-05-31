---
title: X-CubeSat Data
subtitle: What we understood from the mission
comments: false
math: true
date: 2020-05-30
tag : XCubeSat
---

We got a lot of data, there are some.

The figures are generated with Bokeh, using JavaScript for the interactivity. You need the allow the third party sources to see them.

To add a figure in a similare static page, see [this guid](/tutorials/howto/howtoaddaplot).



# Temperature of the batterie

We measured the temperature of the satellites from our ground station. The most interesting one is the battery temperature.

<script src="/js/tbat_all.js" id="59e286ae-f060-4590-a82e-5382d49d87f7"></script>

The Ground station had some issues, hence the missing points.

We can see a surprising  variation of a few dozen of date.
This can accually be simply answered by looking at the time of the observation.

See by yourself.
<!-- If you want to update the figure, you need to update this line with the right id -->
<script src="/js/tbat_hour.js" id="45613fa5-5614-42fe-94bc-872577b9f737"></script>


Because of the natural precession of the orbital plan (due to the J2 term of Earth's gravity), there was an slow evolution of the hour in the day of the temperature measurement. 

The precession rate \\(\omega_p\\) is 

$$\omega_{p} = -\frac32 \cdot \frac{{R_\mathrm{E}}^2}{\left(a\left(1-e^2\right)\right)^2} J_2 \omega \cos i $$

with \\(R_\mathrm{E}\\) Earth equatiorial radius, \\(a\\) the semi-major axis of the satellite's orbit, \\(e\\) is the eccentricity, \\(\omega\\) is the angular velocity of the satellite and \\(i\\) is it's inclination.
