function receivesAFunction(callback) {
    
    callback();
}
function returnsANamedFunction() {
    
    function myNamedFunction() {
        console.log("Hello from the named function!");
    }
    return myNamedFunction;
}
function returnsAnAnonymousFunction() {
        return () => {
        console.log("Hello from the anonymous function!");
    };
}

