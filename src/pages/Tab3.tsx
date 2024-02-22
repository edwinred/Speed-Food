import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab2.css";
import Tarjetatiendas from "../components/Login";
import Login from "../components/Login";

const Tab3: React.FC = () => {
  const datos = [{ nombre: "Usuario" }, { nombre: "Contraseña" }];
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 3</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          {datos.map((el) => (
            <Login titulo={el.nombre} />
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
