Integrating Node With The Twitter Feed
======================================

In this project, we began to extend our understanding of Node.js and NPM modules.  Together with [Attila](https://github.com/Tr1ckX), I decided to try to integrate the [Twit NPM Module](https://www.npmjs.com/package/twit).   This task deepened our understanding of the Twitter API, route parameters, and the Node ExpressJS Server.  

###Basic Functionality & Lessons Learned
Twitter is integrated to take its search cure from a route parameter in the URI.  For example, `twitter/bbc` would return tweets labelled "bbc" by Twitter.  We have chosen to subsequently display the text from the most recently returned tweet on a page, along with the time and user ID number.  In the course of testing with Mocha-Casper-JS, we learnt that the tweets Twitter returns does not solely depend on the content of the tweet.  For example, a tweet from user @bbc could be returned, even if the tweet itself does not specifically mention the term "bbc."  In addition, Twitter seems to check URI links such that a t.co/string link that ultimately points to bbc.com would also be returned.  Our tests could be improved; for example, mocks/spies/doubles could be integrated.

###A Working Example
A working example [can be found here](https://benandattila.herokuapp.com/twitter/bbc).  The feed is based on the "bbc" search parameter, as is shown in the URI.  Another example [can be found here](https://benandattila.herokuapp.com/twitter/lufc).  This feed instead is based on the "lufc" search parameter, also shown in the URI.

###Core Technologies
- Twit NPM Module
- Node.js
- Express Server
- EJS Templating
- Basic HTML/CSS