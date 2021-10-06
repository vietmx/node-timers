setImmediate(function functionA()
    { setImmediate(function functionB()
    { console.log(10); 
    setImmediate(function functionD()
    { console.log(20); }); }); 
    setImmediate(function functionC()
    { console.log(30); 
    setImmediate(function functionE() 
    { console.log(40);
    });
  });
});


console.log('You have started set immediate:...');
