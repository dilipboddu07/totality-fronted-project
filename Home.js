import { Component } from "react";
import LanguageContext from "../../context/CartContext";
import DetailsLogo from "../DetailsLogo";
import Header from "../Header";
import "./index.css";

const locations = [
  {
    LocName: "Hyderabad",
    key: 1,
    rent: "20,000",
    Address: "Madhapur",
    ownerName: "Praveen",
    contact: "1111111111",
    Img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkf-PZ5sqMwoQHi_j-yu1Jxmfkw0flRrrOBLe6GKkcew&s",
  },
  {
    LocName: "Hyderabad",
    rent: "25,000",
    key: 2,
    Address: "BN Reddy",
    ownerName: "Hemanth",
    contact: "2222222222",
    Img:
      "https://www.shutterstock.com/image-photo/hyderabad-telangana-indiaaugust-6th-2022-260nw-2207947697.jpg",
  },
  {
    LocName: "Hyderabad",
    rent: "18,500",
    key: 3,
    ownerName: "Dilip Kumar",
    contact: "3333333333",
    Address: "Kothapet",
    Img:
      "https://i.pinimg.com/736x/74/d4/7a/74d47aee87bf7a94163b9c7e43d71069.jpg",
  },
  {
    LocName: "Mumbai",
    rent: "30,500",
    key: 4,
    ownerName: "Sai Kiran",
    contact: "4444444444",
    Address: "Andheri",
    Img: "https://radheyconstructions.files.wordpress.com/2015/04/a.jpg",
  },
  {
    LocName: "Mumbai",
    rent: "35,500",
    ownerName: "Vikas",
    key: 5,
    contact: "5555555555",
    Address: "Marol",
    Img:
      "https://hanureddyrealty.com/wp-content/uploads/branches/Hyderabad-Office.jpg",
  },

  {
    LocName: "Mumbai",
    rent: "35,500",
    ownerName: "Ajay",
    key: 6,
    contact: "6666666666",
    Address: "Saki Naka",
    Img:
      "https://images.homify.com/v1442402047/p/photo/image/912334/DSC_6022.jpg",
  },
  {
    LocName: "Bangalore",
    rent: "35,500",
    key: 7,
    ownerName: "Keshav",
    contact: "7777777777",
    Address: "Kothnur",
    Img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUjfjNFMUhFaisUVusNnAGbj_g8ZJj_CmYPU1QXMDcpA&s",
  },

  {
    LocName: "Bangalore",
    rent: "45,500",
    key: 8,
    ownerName: "ManMohan",
    contact: "8888888888",
    Address: "J.P. Nagar",
    Img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStvOzn1i_Ta8EdrFkTj__IF-V0zH1jMU5T3FQD71v73A&s",
  },

  {
    LocName: "Bangalore",
    rent: "40,000",
    key: 9,
    ownerName: "Sai Ram",
    contact: "9999999999",
    Address: "Karamangala",
    Img:
      "https://hanureddyrealty.com/wp-content/themes/hrrindia/scripts/timthumb.php?src=https://hanureddyrealty.com/wp-content/uploads/753869_WhatsApp%20Image%202022-11-22%20at%2010.55.30%20AM.jpeg&w=700&h=420",
  },
];

class Home extends Component {
  state = { location: "Hyderabad" };

  detailsChange = (event) => {
    this.setState((prevState) => ({ location: event.target.value }));
    console.log(event);
  };

  render() {
    const { location } = this.state;
    const store = locations.filter((eachItem) => eachItem.LocName === location);
    return (
      <LanguageContext.Consumer>
        {(value) => {
          const { addFunction } = value;
          return (
            <div className="mainPage">
              <Header detailsChange={this.detailsChange} />
              <div class="mainPageCont">
                <h1>Best Property Rentals Site</h1>\
                <div className="totalDetailsCont">
                  {store.map((each) => (
                    <DetailsLogo
                      each={each}
                      addFunction={addFunction}
                      key={each.key}
                    />
                  ))}
                </div>
              </div>
            </div>
          );
        }}
      </LanguageContext.Consumer>
    );
  }
}

export default Home;

