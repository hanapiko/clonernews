//exports the debounce function, which limits the rate at which a function is executed
export function debounce(func, delay) {
    let timeout;
    
    return function (...args) {
        //clears any existing timeout to reset the delay period
        clearTimeout(timeout);
        
        // Set a new timeout to invoke the function after the specified delay
        timeout = setTimeout(() => {
            //calls the original function with the correct 'this' context and arguments
            func.apply(this, args);
        }, delay);
    };
}
