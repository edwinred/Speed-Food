import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab2.css";
import Tarjetatiendas from "../components/Tarjetastiendas";

const Tab2: React.FC = () => {
  const datos = [
    { nombre: "Mc trio" },
    { nombre: "Hamburguesa doble" },
    { nombre: "Hamburguesa triple" },
    { nombre: "Hamburguesa basica" },
  ];
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>

        <div
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          {datos.map((el) => (
            <Tarjetatiendas Nombre_Tienda={el.nombre} />
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
