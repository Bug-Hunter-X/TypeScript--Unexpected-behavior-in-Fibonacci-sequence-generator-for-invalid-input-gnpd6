function printFibonacci(n: number): void {
  if (n <= 0) {
    console.error("Input must be a positive integer.");
    return;
  }

  let a = 0;
  let b = 1;
  console.log(a);
  console.log(b);

  for (let i = 2; i < n; i++) {
    let c = a + b; 
    console.log(c);
    a = b;
    b = c; 
  }
}

printFibonacci(10);
printFibonacci(0); //Corrected output
printFibonacci(-5); //Corrected output
