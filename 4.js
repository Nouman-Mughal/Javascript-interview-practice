//whats gonna print

//IIFE has access to global variables.
var var1=10;
(()=>{
    var3=35
    console.log(var3)
     var var3=45
     console.log(var3)
     var2=15
     //undeclated variable are implicitly global.
       console.log(var1)
})()
    console.log(var2)
    setTimeout(()=>{console.log(var3)})
    var var1=30
    console.log(var1)