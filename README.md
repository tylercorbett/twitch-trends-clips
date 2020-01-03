# Twitch Trends
## Created by Tyler Corbett (https://tylercorbett.me/)

### Goal of project:

As a hobby I run an Instagram page (@twitchtrends) that posts video game highlights. 
In order to find clips to post on my Instagram page, I'd have to filter through clips
one by one on Twitch's website. This took a REALLY long time, so I built this web app to help 
me watch multiple clips at the same time. I can easily download them and then upload them into
Hootsuite (posts on Instagram automatically for you.)


### Features:

* Watch multiple clips at the same time

* Filter by what game you want to see

* Filter by how many clips you want to load (if you're on a slow computer you can load less clips)

* Delete clips that you're watching if they're clearly not worth posting

* Easily download a clip directly with one of the two download links provided


### Challenges:

1. The download button

The hardest part of this project was creating a simple button to click and download the clip. After spending a couple days
wrestling with how Amazon protects its video footage, the best solution I could come up with is two different buttons.
These buttons use different URLs, at least one of which will take you to a page you can directly download the video from. 
While its not ideal, I couldn't find a better solution anywhere online. For my purposes, it's something that I can live with.

I always use the middle mouse button when clicking on the download buttons in case it takes you to a dead end.

1. Twitch's API is new

Twitch just updated their API and now there's all sorts of documentation that isn't relevant anymore. It was a pain trying
to filter through the old docs to find stuff that isn't deprecated.

After finding the pages I wanted, I bookmarked them.


### What's next:

#### Integrate with Hootsuite API

With the push of a button, I can have a clip download, and then upload
itself into Hootsuite automatically. It can schedule itself, create a caption, and hashtags. This would save me a lot of time
doing something that's pretty repetitive. 


