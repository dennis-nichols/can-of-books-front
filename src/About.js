import { Component } from "react";
import AboutCard from "./AboutCard";

class Profile extends Component {

  render() {
    /* TODO: render information about the developers */
    return (
      <>
        <AboutCard
          img_source="https://cdn.discordapp.com/attachments/1020504235361718366/1028046111748935781/unknown.png"
          name="Lewis"
          words="Lewis put some words here"
        ></AboutCard>
        <AboutCard
          img_source="https://cdn.discordapp.com/attachments/1020504235361718366/1025082272430440498/beerday2.jpg"
          name="Dennis"
          words="Software development student with Code Fellows. Former US Navy servicemember and CDC public health professional."
        ></AboutCard>
      </>
    );
  }
};

export default Profile;
