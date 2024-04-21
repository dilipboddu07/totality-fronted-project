import "./index.css";

const DetailsLogo = (props) => {
  const { each, addFunction } = props;
  const { contact, ownerName, LocName, rent, Address, Img } = each;
  const dupFunction = () => {
    addFunction(each);
  };
  return (
    <div className="detailsCont">
      <img src={Img} alt="Home" className="houseImage" />
      <h1>Location : {LocName}</h1>
      <p>Address : {Address}</p>
      <p>Rent : {rent}/month</p>
      <p>Owner Name : {ownerName}</p>
      <p>Contact Number : {contact}</p>
      <button type="button" onClick={dupFunction}>
        Add To Cart
      </button>
    </div>
  );
};
export default DetailsLogo;


