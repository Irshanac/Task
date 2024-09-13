/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    
    return function() {
       return n++;
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */

/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    return new Promise(resolve => setTimeout(() => resolve(millis), millis));
 }
 
 // Usage
 sleep(1000).then((millis) => console.log(`Slept for ${millis} ms`));
 
 /** 
  * let t = Date.now()
  * sleep(100).then(() => console.log(Date.now() - t)) // 100
  */