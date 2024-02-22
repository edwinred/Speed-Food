import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab1.css";
import Trjetas from "../components/Trjetas";

const Tab1: React.FC = () => {
  const datos = [
    { nombre: "La fondita" },
    { nombre: "Macdonals" },
    { nombre: "Novedades jiovani" },
  ];
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>

        <div
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          {datos.map((el) => (
            <Trjetas titulo={el.nombre} />
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
