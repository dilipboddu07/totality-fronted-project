import "./index.css";

const CartEditor = (props) => {
  const { each } = props;
  const { LocName, ownerName, contact, Address, Img, rent } = each;
  return (
    <div className="CartDetailsCont">
      <img src={Img} alt="house" className="CartImg" />
      <div>
        <h1>Location : {LocName}</h1>
        <h1>Address : {Address}</h1>
        <p>Rent : {rent}/month</p>
        <p>Owner Name : {ownerName}</p>
        <p>Contact : {contact}</p>
      </div>
    </div>
  );
};
export default CartEditor;



