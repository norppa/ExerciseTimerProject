This is a step-by-step javascript project to build an exercise timer.

## Block 1 - Stopwatch

In this first block we will learn to create a modern web page. It is composed of an HyperText Markup Language (.html) file that contains the _structure_ of our app, a Cascading StyleSheet (.css) file that contains the _style_ of our app and a Javascript (.js) file that contains the _functionality_ of our app. 

The app will be a simple, but functional stopwatch that will show minutes and seconds. While creating this we will learn about html structure and simple css styling, but we will focus on the functional part of the javascript file. We will learn to use variables and constants, we get to know what are functions, we will format numbers into readable text and use some Javascript's inbuilt features to create events that repeat every second. 

This app will provide us with the necessary basics to proceed to the next block.

### Stage 1 - Init
We will begin by creating the files needed in this project and make sure they are properly connected.

- Create a web page (.html) that includes style (.css) and script (.js).
- The web page should have an appropriate title and a header.
- The style should change the background color to your liking.
- The script should log a message of your choice to the console.
- When you load the page, you should see the title in the browser bar, title in the page, the background colour of your choosing, and the message logged in the console.

### Stage 2 - Intervals in Javascript
In this stage we create a new function and execute it repeatedly.

- Create a new _function_ in the script file, that logs a message to the console.
- Add a line that _executes_ your new function.
- Set a new _interval_ so that your function is executed repeatedly each second.
- When you reload the page, the console should print your initial message from previous stage, the new message from the function execution, and then repeat the message every second after that.

### Stage 3 - Incrementing numbers
Next we will remove the message and replace it with an incrementing number.

- Declare a new _variable_ in the script that holds an initial number.
- Create a new function that will increase the number by one AND log it to the console.
- Change the interval code to execute the number incrementing function every second.
- When your reload the page, the console should print a new number every second.
- Clean your script file: remove all the code that is no longer used.

### Stage 4 - Changes to the web page
We are creating a web page, so let's make our changes visible in the actual web page instead of just logging them to the console.

- Add a new _div_ element to the web page and give it an unique _id_. You can leave the div empty.
- In the script file, get the element you created and store it to a _constant_.
- Optionally, log the constant to the console to make sure you got what you wanted
- Change your incrementing function so that instead of logging the number to the console, it sets the number as the div element's innerHTML.
- When you reload the page, the numbers should change in the web page.
- Clean your code again: remove unnecessary console logs and other code that is no longer needed.

### Stage 5 - Add some style with Flexbox
With a few easy changes we can make our app look much more appealing, and nicer to develop.

- In the style file, set your web page body to use flexbox _display_ style.
- Set the _flex-direction_ to be column so all elements are on top of each other.
- Set the _align-items_ to be center so everything is nice and centered.
- Change the font families, sizes, and colours to your liking
- Optionally you can also reset the background color and adjust spacing
- When you reload the page, everything should be centered, the running numbers should be below the header and everything should look _nice_!

### Stage 6 - Seconds into minutes
We do not want to show a count of seconds to the user. Stopwatches usually have a time divided to minutes and seconds (and possibly fractions of a second, but we won't go there today), separated by a colon.

- Create a new function that will (eventually) format the seconds to a _string_ in the form of mm:ss. The function should take one parameter, the number of seconds that is to be formatted. The function will _return_ the formatted _string_.
    - Inside the functin, create a new constant for the number of full minutes in the given number of seconds.
    - Also create a new constant with the number of remaining seconds after full minutes are taken into account.
    - Return a _concatenated_ string that combines the minutes, a colon and the seconds.
- Update your incrementer function to use the result of the formatter as the innerHTML of the div instead of the unformatted number.
- When you reload the page, the numbers should be in correct time format, almost
- The seconds should have always two numbers (as in 01 instead of just 1)
- Update your formatter function to check if the number is less than 10 and to concatenate a zero in front of the seconds if that is the case. You can do the same to the minutes if you wish.
- When you reload the page, all the running numbers should be formatted as desired

### Stage 7 - Interactivity
Now we have a working timer. Hooray! But most users would probably want to start the timer themselves instead of pressing reload when they want the timer to start.

- At the moment the timer starts automatically. Create a function startTimer and update your code so that the timer starts when the function is executed.
- Add a _button_ to the web page that will start the timer. Give it a unique id and a descriptive text.
- In the script file, store the button element you created in a constant.
- Set the button's _onclick_ parameter to point to the startTimer function.
- Add an initial value (if you haven't already done so) to the timer div, so that it is not empty when the page is first loaded.
- When you reload the page, it should show the initial value and the button you created. When you press the button, the timer should start. Make sure the initial value is replaced with the 00:00 immediately when the button is pressed and not after the first second.

### Stage 8 - Stop it!
It sure would be nice if we could also stop that timer.

- Create a new function stopTimer that will stop the timer and reset the default value number value
- Add a stop button to the web page. Make sure it's in the same row as the start button.
- Now if you reload the page and try this out, you notice that the timer starts from where it stopped. Fix your code so that the timer starts from zero every time it is started.
- Optional: there still exists a bug in the code. Can you find it and fix it?

### Stage 9 - Combine functionality
The bug mentioned in the previous stage is the fact that if you start the timer and press "start" again, it will create another timer that messes up our program, since now there are two timers running and they both increment the same variable. We will fix this bug by making sure you can not press start when the timer is running. 

- Create a new _boolean_ variable called timerIsRunning and set it to false.
- Update your startTimer function so that it sets timerIsRunning to true
- Update your stopTimer function so that it sets timerIsRunning to false
- Create a new function that checks if timer is running and executes startTimer if it is not and stopTimer if it is.
- Change your start button's onclick to point to the new function.
- Since the start button now starts and stops the timer, we don't need the stop button. Remove the stop button and all the code that is no more needed.
- Make sure that the startTimer and stopTimer update the start button text accordingly.

### Stage 10 - Add pause
Sometimes it would be handy to pause the timer. Let's doe it!

- Create functions pauseTimer and unPauseTimer that do what they say, but do not change the incrementing counter or the web page text.
- As in stage 9, create a boolean variable timerIsPaused and set it initially to false. Update the variable in pauseTimer and unPauseTimer accordingly.
- Create a function that checks if timer is paused or unpaused and executes pauseTimer or unPauseTimer accordingly. 
- Add a pause/unpause button to your web page. Get it to a constant and set its onclick to the pause/unpause function you created. 
- Change the button's text appropriately as with start/stop button.
- When your reload the page you should see the start/stop button working as before, but next to it should be a pause/resume button that, well, pauses or resumes the timer.
- There is still a problem in our user interface that we fix in stage 11. Can you spot it?

### Stage 11 - Concise UX
Our timer can at the moment be paused when it is not yet running. This is a bad user experience.

- Update the code so that when the page is initially loaded, the pause button is _disabled_.
- Update the code so that when the timer is started it is no longer disabled and when the timer is stopped it is again disabled.
- Now if you start the timer, pause the timer and then stop the timer, the pause button is stuck in the disabled state. Fix this as you see fit. 
- The two-button interface should now be bug-free. Test it: try different combinations and try to get it to break. If you find a problem, fix it, and repeat until the timer works perfectly.
- When you reload the page, you should have the header, placeholder time, and two buttons: start and pause, latter disabled. When you press start, the timer should start and the pause button should activate and the start button should become a stop button. When you press pause, the timer should pause and the pause button should become resume button. When you press resume, the timer should resume and the resume button should become pause button again. When you press stop, the timer should be replaced with the placeholder time, the pause button should become disabled and the stop button should become start button. If you press stop while paused, it should work as if stop had been pressed while unpaused. After pressing stop the timer should work repeatedly in the same manner, so pressing stop should restore it to the initial state.

### Stage 12 - Final touches
Our Block One is pretty much done. What is left is tweaking the outlook of the user interface and _refactoring_.

- Look at the page you have created. Does it need fixing somehow? Are the colours good, is there enough space around items, are the font sizes appropriate? If you find something to fix, do it in the style file. You might need to do something to the html file too, but do not touch the script at this stage.
- When you are happy with the results, it's time to _refactor_ our code. This means cleaning up, rearranging so that it is logical to read, renaming poorly named variables and overall making it neat.
- Also remove all possible console loggings that are there to help you develop and debug. Check that when you use the app, there are no warnings or errors in the console. If there are, fix them.
- Do a final check of your product. Does everything still work as supposed after you shuffled everything around? If so, congrats, you have finished the first block.


## Block 2 - Exercise Timer

### Stage 2.1 - Init
We will start the second block again by initializing our project. This stage is identical to previous stage 1. Repetitio est matre studiorum. Let's add the styles from 1.5 so that our project skeleton uses centered column layout.

### Stage 2.2 - Super Simple Timer
Let's start by building an extremely simple timer that counts down from 10 to zero and then stops, logging everything to console.

- Create a new variable 'time' and set it to 10
- Create a new function that willl be executed every second. That function should reduce the time by one and log the result to the console.
- Set a new interval that executes the function every second.
- Add a condition to the function that checks if the time is zero and if so, clears the interval and logs a message to the console.
- Your app should now log numbers from 10 to 0 to console, followed by a message.

### Stage 2.3 - Repeated Timer
Our exercise timer needs to go through multiple time spans, so let's add some more times to our simple timer.

- Create a new _list_ constant 'times' and store there five values.
- Create a new variable 'index' and set it to 0.
- Log to the console the first value of the list using the index variable.
- Update your code so that instead of setting your time to 10, set it to the first item in the times list.
- Update your interval method so that whenever the timer reaches zero, instead of finishing, it moves to the next item in the list by increasing the index by one and setting the time to be the number in the list to where the index points to.
- To finish the execution, add a condition that checks if the index is big enough and if it is, clear the interval and print a finishing message to the console.
- When you reload the page the console should log the numbers running down from each of the times in your times list to one, and then the finishing message.
- Clean up your code: remove unnecessary log messages and refactor if needed.
