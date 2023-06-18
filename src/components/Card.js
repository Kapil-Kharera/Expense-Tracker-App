import "./Card.css";

const Card = (props) => {
  console.log(props.children);
  const classes = `card ${props.children}`;
  return (
    <div className={classes}>
        {props.children}
    </div>
  )
}

export default Card;