function factorial(n) {
  if(n===1){
    return n;
  }else{
    return n*factorial(n-1);
  }
}

function fibonacci(n) {
    let a = 0;
    let b = 1;

    while (a <= n) {
        console.log(a);
        let c = a; 
        a = b; 
        b = c + b;
    }
}


console.log(factorial(5));

console.log(fibonacci(10));
