import { IonContent } from "@ionic/react";

interface InterestProps {
  interest: string[];
}

const Interest: React.FC<InterestProps> = (props: InterestProps) => {
  return (
    <IonContent className="ion-padding">
      <h2>Interest</h2>
      {props.interest.map((value, index) => (
        <p className="content" key={index}>
          {value}
        </p>
      ))}
    </IonContent>
  );
};

export default Interest;
