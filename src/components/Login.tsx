import React from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
} from "@ionic/react";
import { logIn } from "ionicons/icons";
import { IonInput } from "@ionic/react";

function Login({ titulo }: { titulo: string | null }) {
  return (
    <>
      <IonInput
        label="Solid input"
        labelPlacement="floating"
        fill="solid"
        placeholder="Enter text"
      ></IonInput>

      <br />

      <IonInput
        label="Outline input"
        labelPlacement="floating"
        fill="outline"
        placeholder="Enter text"
      ></IonInput>
    </>
  );
}

export default Login;
