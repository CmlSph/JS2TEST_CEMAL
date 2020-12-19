/**
 * The developer that wrote the code below tried to make it so that 
 * it doesn't get into the 'INITIALISING' block twice.
 * 
 * Besides the obvious answer that the initialise function is called twice, 
 * explain what is going wrong.
 * Add your explanation as a comment here:
 * 
 * setTimeout function is used in the wrong place.
 * 
 * 
 * Now the developer has asked you how you would solve the problem. 
 * As mentioned in the comments they cannot change the time it takes to run the lines.
 * Explain to them what they should do in the comment here:
 * 
 * He needs to use a closure function to be able log the INITIALIZING part only once. 
 * He needs to write it in another function.
 */

// REMINDER: DO NOT ACTUALLY CHANGE THE CODE BELOW
let alreadyInitialised = false;

const initialise = () => {
    if (alreadyInitialised) {
        console.log('ALREADY INITIALISED');
    } else {
        console.log('INITIALISING');
        setTimeout(() => {
            // Run initialisation code!
            console.log('INITIALISED')
            alreadyInitialised = true;
        }, 1000); // The developer cannot change the 1000 number in the timeout
    }
}

/** The developer cannot change this code! */
initialise();
setTimeout(initialise, 100);