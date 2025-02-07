function printFibonacci(n: number): void {
  if (n <= 0) {
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

printFibonacci(10); // this will throw an error for n=0 or n<0
