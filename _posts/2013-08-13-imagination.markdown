---
layout: post
title: Imagination 
modified:
categories: 
description: 
tags: []
excerpt: 
  <h3>Pacific Place Mall Interactive Kiosk</h3>
  <p>This was the first job that exposed me to the world of Web Design and Digital Agencies.</p>
  <p>Though I was not able to be in attendance of the project during launch due to my lack of experience at the time in the industry, visiting the kiosk gave me a sense of pride at being...</p>
datefrom: 2013-08-13T10:00:00+08:00
dateto:   2014-01-17T10:00:00+08:00

---

### Pacific Place Mall Interactive Kiosk

This was the first job that exposed me to the world of Web Design and Digital Agencies.
Though I was not able to be in attendance of the project during launch due to my lack of experience at the time in the industry, visiting the kiosk gave me a sense of pride at being able to work on something so influential to my career.

#### Details about the project:

The project is for Swire properties for shoppers to navigate through the Pacific Place Mall in Admiralty, Hong Kong. Within the time that I was involved with the project, the project required multiple touch-capacitive kiosks, which were all linked to a central server that stored shop information as well as any promotions that Swire Properties wished to show to the user. 

Information of each shop tenant should be presented alphabetically, by floor or by shop type. 

Another aspect of the project I remember was that the entire shopping mall had to be shown to the user, with the capability to allow the user to find any shop based on their position in the map according to kiosk and presenting a way finding path to arrive at their intended destination.


#### Rendering shop information through cards

I was very green in terms of experience, so I was only exposed to the CSS or styling of the project, which is shown in the following picture:

<figure>
  <img src="/images/imagination/image1.jpg" alt="">
  <figcaption></figcaption>
</figure>

Here, the selection buttons were rendered with CSS, _simplified by the use of SASS: a CSS preprocessor._
the unravelling animation for the buttons is done via CSS3 Animation keyframes.
The swiping action and the animation is done in javascript with THREE.js. (if using CSS, the maximum number of divs is around 50, with an upper limit of around 70... anything more will result with janky animations). 
This section was done by <a href="http://github.com/rusintez" target="_blank">Vladimir Popov</a>.

<figure>
  <img src="/images/imagination/image2.jpg" alt="">
  <figcaption></figcaption>
</figure>

The interactive 3D map was rendered on the canvas with STL files inside Three.JS. The code generated for way-finding and the animations between different levels should be credited to Stephen Beeson.

#### Takeaways

Overall this job was a very important and valuable experience early on in my career.
I ended up learning a lot about myself as well as the sort of working environment that I am most comfortable with.

