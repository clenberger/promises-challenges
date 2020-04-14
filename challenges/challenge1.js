/*
 *******************************************************************************
 * INSTRUCTIONS:
 * Follow the steps below and answer the discusssion questions that follow.
 * 
 * 1. Read over the code that follows. In what order will the outputs "Step 1",
 *    "Step 2", and "Step 3" be printed? How do you know?
 * 
 *    Step 1, Step 3, Step 2. Step 1 is first printed because it is not in the snooze function. Then the next
 *    printed is Step 3 because it is also not the the snooze function. Step 2 is printed last because
 *    it has the setTimeout on it which causes a delay.
 * 
 * 2. Run this code using `node challenge1.js`. In what order were the steps
 *    printed?
 *    Step 1, Step 3, Step 2
 * 
 * 3. Change the delay time in the `snooze` function from 2000 ms to 0. In what
 *    order will the steps be printed now? Why? Re-run the code again to verify
 *    your expectation. Were you correct?
 *    I wasn't. I thought the function would print them fist but the logs are still taking time to run.
 * 
 *******************************************************************************
 */

/* This function takes a callback as a parameter. */
function snooze(action) {
    setTimeout(function() {
      action();
    }, 0);
}
console.log('Step 1');

snooze( function() {
    console.log('Step 2');
    console.log("Async Action completed via callback");
} );

console.log('Step 3');

