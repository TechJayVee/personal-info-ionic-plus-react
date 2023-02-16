import { IonContent } from "@ionic/react";

interface PersonaBackgroundProps {
  background: string;
}

const PersonaBackground: React.FC<PersonaBackgroundProps> = (
  props: PersonaBackgroundProps
) => {
  return (
    <IonContent className="ion-padding">
      <h2>Educational Background</h2>
      <p className="content">{props.background}</p>
    </IonContent>
  );
};
export default PersonaBackground;
