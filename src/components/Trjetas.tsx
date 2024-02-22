import React from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
} from "@ionic/react";

function Trjetas({ titulo }: { titulo: string | null }) {
  return (
    <IonCard>
      <img
        alt="Silhouette of mountains"
        src="https://ionicframework.com/docs/img/demos/card-media.png"
      />
      {/* Modifica texto en las tarjetas */}
      <IonCardHeader>
        <IonCardSubtitle>Entrega abajo</IonCardSubtitle>
        <IonCardTitle>{titulo}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>Calificación</IonCardContent>
    </IonCard>
  );
}

export default Trjetas;
