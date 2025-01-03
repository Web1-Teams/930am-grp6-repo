import Addcard from "./Addcard";
import "./Card.css";

const Card = (props) => {
  const classes = "Cardcolor";
  console.log(classes);
  return (
    
    <div className="col-4 ">
      <div className="card Cardcolor ">
  
        <div className="card-body">
          <h5 className="card-title">{props.title} </h5>
          <p className="card-text">{props.desc}</p>
          <Addcard />
        </div>
      </div>
    </div>
  );
};

export default Card;
