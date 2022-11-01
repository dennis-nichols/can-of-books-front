import { Component } from "react";
import AboutCard from "../AboutCard";
import styles from './About.module.css';

class Profile extends Component {

  render() {
    /* TODO: render information about the developers */
    return (
      <section className={styles['main-section']}>
        <div className={styles['main-section__card']}>
          <AboutCard
            className={`${styles.card}`}
            img_src="https://cdn.discordapp.com/attachments/1020504235361718366/1028046111748935781/unknown.png"
            name="Lewis"
            words="Business solutions expert | Full stack software engineer"
          ></AboutCard>
          <AboutCard
            className={styles.card}
            img_src="https://cdn.discordapp.com/attachments/1020504235361718366/1025082272430440498/beerday2.jpg"
            name="Dennis"
            words="Software development student with Code Fellows. Former US Navy servicemember and CDC public health professional."
          ></AboutCard>
        </div>

      </section>
    );
  }
};

export default Profile;
