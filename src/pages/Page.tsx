import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useParams } from "react-router";
import Education from "../components/education";
import Interest from "../components/interest";
import Personal from "../components/personal";
import Work from "../components/work";
import "./Page.css";
import "../theme/styles.css";
import Footer from "../components/footer";
import Header from "../components/header";

const Page: React.FC = () => {
  const { name } = useParams<{ name: string }>();

  return (
    <IonPage>
      <Header
        schoolLogo={"../assets/img/school-logo.png"}
        schoolName={"N E U S T -M S I T"}
        logoStyle={{ height: "50px", width: "50px", float: "right" }}
        schoolNameStyle={{
          fontSize: "16px",
          fontWeight: "bold",
          opacity: 0.8,
          color: "blue",
        }}
      />
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle
              size="large"
              style={{ color: "#f89318" }}
              className="ion-text-center"
            >
              {name}
            </IonTitle>
          </IonToolbar>
        </IonHeader>

        {name === "Profile-Information" ? (
          <Personal
            name={"Jyavee P. Ramos"}
            age={25}
            occupation={"Web Developer (Backend)"}
            imageSrc={"../assets/img/profile.png"}
          />
        ) : name === "Works" ? (
          <Work
            workExperiences={[
              "I started my work experience as a Student Assistant at Manuel V. Gallego Foundation Colleges during my first year of college. It was a great opportunity for me to gain valuable experience and learn new skills, and I spent three years in that role. ",
              "As graduation approached, the MIS Department at Manuel V. Gallego Foundation Colleges offered me a job as an IT Assistant, which I was thrilled to accept. In that role, I continued to build on my knowledge and expertise in the field of technology. I worked there for three years, from 2019 to 2022, before deciding to pursue my dreams of becoming a Programmer or Web Developer.",
              "Now, I am working as a Web Developer at Techstachs PH in Cabanatuan City, and I couldn't be happier. I am passionate about programming, and I am excited to continue growing and learning in my new role. I believe that I have a bright future ahead of me, and I am grateful for the opportunities that my work experience has given me so far.",
            ]}
          />
        ) : name === "Educations" ? (
          <Education
            background={
              "I have tooked my high school education from Nueva Ecija High School and Santa Rosa National High School, and graduated from Santa Rosa National High School. I pursued my Bachelor's degree in Computer Science at Manuel V Gallego Foundation Colleges and graduated in 2019. Currently, I am pursuing a Master of Science in Information Technology major in Programming at Nueva Ecija University of Science and Technology."
            }
          />
        ) : name === "Hobbies" ? (
          <Interest
            interest={[
              "In my free time, I enjoy learning new things and expanding my knowledge. I am particularly passionate about programming, and I love watching video tutorials to pick up new skills and techniques.",

              "When I'm not coding, I enjoy playing chess as a way to challenge my mind and improve my strategic thinking. I also love spending time with my friends, whether we're exploring new places, trying out new restaurants, or just hanging out and relaxing.",

              " Overall, I believe that it's important to have a balance between work and leisure, and I strive to make the most of my free time by pursuing my interests and hobbies. I find that doing so helps me stay motivated, creative, and productive, and it brings a sense of fulfillment to my life.",
            ]}
          />
        ) : (
          <div>Page not found</div>
        )}
      </IonContent>
      <Footer />
    </IonPage>
  );
};

export default Page;
