# cl-snap-seed

# Prerequisites 

Node Js v.4.4.7 or higher [https://nodejs.org/en/](https://nodejs.org/en/)


# Getting Started

You are not required to build a UI component to complete this test, however you need to install Node JS and npm to run the application. To get started we have provided a sample app.js file written in ES6 (though you are free to use any Javascript based language you like e.g typescript.

From your command line or git bash, clone the repository by running 

```git clone https://github.com/rwagstaff/cl-snap-seed.git```

or Download from [https://github.com/rwagstaff/cl-snap-seed/archive/master.zip](https://github.com/rwagstaff/cl-snap-seed/archive/master.zip)

Navigate to the package.json directory and run **npm install** then **npm start**. You should see message Starting game Snap, you can edit the src/app.js file to complete the test. To recompile from ES6 to ES5 run the command **npm run build**

# Scenario

This test is intended to help us gauge your competency with JavaScript as well as how you design/structure your code.
 
Please attempt the following, but do not spend more than 90 minutes on it. It doesn't matter if you complete the task or not; just do as much as you can in the time allowed. Once you've completed the test and sent your source code back, we'd appreciate it if you could follow it up with some notes on how you thought the test went and anything you'd do differently, given more time.
 
When complete just zip the source code and send (please reply all). Please note when sending via gmail/Hotmail, any files (or zips containing files) with the extension .js will be blocked. Please rename them before sending 

https://nakedsecurity.sophos.com/2017/02/17/gmail-now-blocks-all-javascript-email-attachments/

 
Simulate a simplified game of "Snap!" between two computer players using N packs of cards (standard 52 card, 4 suit packs). The "Snap!" matching condition can be the face value of the card, the suit, or both. The program should ask:
 
(i)                  How many packs to use (i.e. define N)
(ii)                Which of the three matching conditions to use
 
Run a simulation of the cards being shuffled, then played one card at a time from the top of the common pile.
 
When two matching cards are played sequentially, a player is chosen randomly as having declared "Snap!" first and takes ownership of all cards played in that run. Play continues until the pile is completely exhausted (any cards played without ending in a "Snap!" at the time the pile is exhausted are ignored).
 
Tally up the total number of cards each player has accumulated and declare the winner/draw.



