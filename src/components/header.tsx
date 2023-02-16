import React from "react";
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonImg,
  IonButtons,
  IonMenuButton,
} from "@ionic/react";

interface HeaderProps {
  schoolLogo: string;
  schoolName: string;
  logoStyle?: React.CSSProperties;
  schoolNameStyle?: React.CSSProperties;
}

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  return (
    <IonHeader color="none">
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton />
        </IonButtons>
        <IonImg
          src={props.schoolLogo}
          style={props.logoStyle}
          className="ion-padding-end"
        />
        <IonTitle color="tertiary" style={props.schoolNameStyle}>
          {props.schoolName}
        </IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;
