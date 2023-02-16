import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from "@ionic/react";

import { useLocation } from "react-router-dom";
import {
  alarmOutline,
  heartOutline,
  informationCircleOutline,
  schoolOutline,
} from "ionicons/icons";
import "./Menu.css";

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: "Personal Information",
    url: "/page/Profile-Information",
    iosIcon: informationCircleOutline,
    mdIcon: informationCircleOutline,
  },
  {
    title: "Educational Background",
    url: "/page/Educations",
    iosIcon: schoolOutline,
    mdIcon: schoolOutline,
  },
  {
    title: "Work Experience",
    url: "/page/Works",
    iosIcon: alarmOutline,
    mdIcon: alarmOutline,
  },
  {
    title: "Interest and Hobbies",
    url: "/page/Hobbies",
    iosIcon: heartOutline,
    mdIcon: heartOutline,
  },
];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Contact me</IonListHeader>
          <IonNote>teacherjayvee@gmail,.com</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                  className={
                    location.pathname === appPage.url ? "selected" : ""
                  }
                  routerLink={appPage.url}
                  routerDirection="none"
                  lines="none"
                  detail={false}
                >
                  <IonIcon
                    slot="start"
                    ios={appPage.iosIcon}
                    md={appPage.mdIcon}
                  />
                  <IonLabel className="padding">{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
