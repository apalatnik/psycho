// Here, you can define all custom functions, you want to use and initialize some variables

/* Variables
*
*
*/
const coin = _.sample(["head", "tail"]); // You can flip a coin for your experiment here
// Declare your variables here



/* Helper functions
*
*
*/

/* For generating random participant IDs */
    // https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
// dec2hex :: Integer -> String
const dec2hex = function(dec) {
    return ("0" + dec.toString(16)).substr(-2);
};
// generateId :: Integer -> String
const generateID = function(len) {
    let arr = new Uint8Array((len || 40) /2);
    window.crypto.getRandomValues(arr);
    return Array.from(arr, this.dec2hex).join("");
};
// Declare your helper functions here

const check_response = function(data, next) {
    data.response_checked = false;
    $("body").on("keydown", function(e) {
        if (data.response_checked == false) {
            const keyPressed = String.fromCharCode(
                e.which
            ).toLowerCase();
            if (keyPressed == data.key1 || keyPressed == data.key2) {
                if (data[keyPressed] === data.expected) {
                    alert('Your answer is correct! Yey!');
                } else {
                    alert('Sorry, this answer is incorrect :( The correct answer was ' + data.expected);
                }
                data.response_checked = true;
                next();
            }
        }})
};

/* Hooks
*
*
*/

//Error feedback if participants exceeds the time for responding
const time_limit = function(data, next) {
    if (typeof window.timeout === 'undefined'){
        window.timeout = [];
    }
    // Add timeouts to the timeoutarray
    // Reminds the participant to respond after 5 seconds
    window.timeout.push(setTimeout(function(){
          $('#reminder').text('Please answer more quickly!');
    }, 5000));
    next();
};
// Declare your hooks here
