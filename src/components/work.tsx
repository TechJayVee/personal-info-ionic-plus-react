import { IonContent } from "@ionic/react";

interface WorkProps {
  workExperiences: string[];
}

const Work: React.FC<WorkProps> = (props: WorkProps) => {
  return (
    <IonContent className="ion-padding">
      <h2>Work Experinces</h2>
      {props.workExperiences.map((value, index) => (
        <p className="content" key={index}>
          {value}
        </p>
      ))}
    </IonContent>
  );
};

export default Work;
