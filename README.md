This is a step-by-step javascript project to build an exercise timer.

## Block 1

### Stage 1 - Init
In this stage we create the files needed in this project and make sure they are connected.

- create a web page that includes style and script
- the web page should have a title and a header
- the style should change the background color
- the script should log a message to the console
- when you load the page, you should see the title in the browser bar, title in the page, the background colour of your choosing, and the message logged in the console.

### Stage 2 - Intervals in Javascript
In this stage we create a new function and execute it repeatedly.

- create a new _function_ in the script file, that logs a message to the console
- add a line that _executes_ your new function
- set a new _interval_ so that your function is executed repeatedly each second
- when you reload the page, the console should print your initial message from previous stage, the new message from the function execution, and then repeat the message every second after that.

### Stage 3 - Incrementing numbers
In this stage we will remove the message and replace it with an incrementing number.

- declare a new _variable_ in the script that holds an initial number.
- create a new function that will increase the number by one AND log it to the console.
- change the interval code to execute the number incrementing function every second.
- when your reload the page, the console should print a new number every second.
- clean your script file: remove all the code that is no longer used.

### Stage 4 - Changes to the web page
In this stage we will make the console logs visible in the web page

- add a new _div_ element to the web page and give it an unique _id_. You can leave the div empty.
- in the script file, get the element you created and store it to a _constant_.
- optionally, log the constant to the console to make sure you got what you wanted
- change your incrementing function so that instead of logging the number to the console, it sets the number as the div element's innerHTML.
- when you reload the page, the numbers should change in the web page.
- clean your code: remove unnecessary console logs and other code that is no longer needed.

### Stage 5 - Add some style with Flexbox
In this stage we style the element a bit further.

- in the style file, set your web page body to use flexbox _display_ style.
- set the _flex-direction_ to be column so all elements are on top of each other.
- set the _align-items_ to be center so everything is nice and centered.
- change the font families, sizes, and colours to your liking
- optionally you can also reset the background color and adjust spacing
- when you reload the page, everything should be centered, the running numbers should be below the header and everything should look _nice_!

### Stage 6 - Seconds into minutes
In this stage we format our running seconds to a more user-friendly format

- create a new function that will (eventually) format the seconds to a _string_ in the form of mm:ss. The function should take one parameter, the number of seconds that is to be formatted. The function will _return_ the formatted _string_.
    - inside the functin, create a new constant for the number of full minutes in the given number of seconds.
    - also create a new constant with the number of remaining seconds after full minutes are taken into account.
    - return a _concatenated_ string that combines the minutes, a colon and the seconds.
- update your incrementer function to use the result of the formatter as the innerHTML of the div instead of the unformatted number.
- when you reload the page, the numbers should be in correct time format, almost
- the seconds should have always two numbers (as in 01 instead of just 1)
- update your formatter function to check if the number is less than 10 and to concatenate a zero in front of the seconds if that is the case. You can do the same to the minutes if you wish.
- when you reload the page, all the running numbers should be formatted as desired

