let timeoutObject = setTimeout(() => { console.log('Timebout');}, 3000);
let intervalTimerObject = setInterval(() => { console.log('Interval');}, 5000);
let immediateTimerObject = setImmediate(() => { console.log('Immediate');}); 

clearTimeout(timeoutObject);
clearInterval(intervalTimerObject);
clearImmediate(immediateTimerObject);
