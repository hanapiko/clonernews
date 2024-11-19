// ensures 'func' is executed at most once per 'limit' period
export function throttle(func, limit) {
    let lastFunc;
    
    let lastRan;
    
    //returns a new function that will throttle the execution of 'func'
    return function (...args) {
        if (!lastRan) {
            func.apply(this, args);
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc);
            
            //schedule a new execution of 'func', ensuring it runs only after the remaining time
            lastFunc = setTimeout(function () {
                //check if enough time has passed since 'lastRan' to allow execution
                if ((Date.now() - lastRan) >= limit) {
                    func.apply(this, args);
                    //update 'lastRan' with the current timestamp after executing 'func'
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    };
}
