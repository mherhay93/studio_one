import cn from "classnames";
import classes from './styleIsPrime.module.css'

interface IIsPrime {
  num:number
}
const IsPrime = ({num}:IIsPrime) => {
  if (num <= 1) {
    return (
    <div className={classes.numbers}>
      <span className={classes.numbersType}>comp</span>
    </div>
    )
  }
  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num % i === 0) {
      return (
      <div className={classes.numbers}>
        <span className={classes.numbersType}>comp</span>
      </div>
      )
    }
  }
  return (
  <div className={cn(classes.numbers, classes.prime)}>
    <span className={classes.numbersType}>prime</span>
  </div>
  );
}

export default IsPrime