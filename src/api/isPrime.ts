const isPrime = (num:number) => {
  if (num <= 1) {
    return 'comp'
  }
  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num % i === 0) {
      return 'comp'
    }
  }
  return 'prime';
}

export default isPrime