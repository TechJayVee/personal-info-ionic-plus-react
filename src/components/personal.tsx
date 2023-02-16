import { IonAvatar, IonCard, IonCardHeader } from "@ionic/react";

interface PersonalProps {
  name: string;
  age: number;
  occupation: string;
  imageSrc: string;
}

const Personal: React.FC<PersonalProps> = (props: PersonalProps) => {
  return (
    <IonCard className="personal-content ion-padding" color="light">
      <IonAvatar className="profile-image ion-text-center">
        <img alt="Profile" src={props.imageSrc} />
      </IonAvatar>
      <IonCardHeader>
        <p>
          <strong>Name:</strong> {props.name}
        </p>
        <p>
          <strong>Age:</strong> {props.age}
        </p>
        <p>
          <strong>Occupation:</strong> {props.occupation}
        </p>
      </IonCardHeader>
    </IonCard>
  );
};

export default Personal;
