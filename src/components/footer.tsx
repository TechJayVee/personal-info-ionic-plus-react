import {
  IonFooter,
  IonToolbar,
  IonText,
  IonButtons,
  IonButton,
  IonIcon,
} from "@ionic/react";
import {
  logoGithub,
  logoLinkedin,
  logoTwitter,
  logoFacebook,
  logoInstagram,
} from "ionicons/icons";
import React from "react";

const Footer: React.FC = () => {
  return (
    <IonFooter className="ion-padding ion-padding-bottom">
      <IonToolbar>
        <IonText color="primary">Connect with Me:</IonText>
        <IonButtons slot="end">
          <IonButton fill="clear" href="https://github.com/TechJayVee">
            <IonIcon slot="icon-only" icon={logoGithub} />
          </IonButton>
          <IonButton
            fill="clear"
            href="https://www.linkedin.com/in/jayvee-ramos-348525172/"
          >
            <IonIcon slot="icon-only" icon={logoLinkedin} />
          </IonButton>
          <IonButton fill="clear" href="https://twitter.com/JV_R4MOS">
            <IonIcon slot="icon-only" icon={logoTwitter} />
          </IonButton>
          <IonButton
            fill="clear"
            href="https://www.facebook.com/jayvee.ramos.376/"
          >
            <IonIcon slot="icon-only" icon={logoFacebook} />
          </IonButton>
          <IonButton
            fill="clear"
            href="https://www.instagram.com/jayvee.ramos.376/"
          >
            <IonIcon slot="icon-only" icon={logoInstagram} />
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </IonFooter>
  );
};

export default Footer;
