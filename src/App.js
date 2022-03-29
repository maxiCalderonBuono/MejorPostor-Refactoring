import React from "react";
import Button from "./components/Buttons/Button";
import * as styles from "./components/Buttons/buttonStyles"


function App() {
  return (
    <div className="bg-dark h-screen">
      <h1 className="text-center bg-primary text-2xl">Front End mejor postor</h1>
      <Button style= {styles.GHOST_BUTTON} name="Registrarse"/>
      <Button style= {styles.PRIMARY_BUTTON} name="Iniciar Sesión"/>
      <Button style= {styles.SUCCESS_BUTTON} name="Aceptar"/>
      <Button style= {styles.DANGER_BUTTON} name="Cancelar"/>
    </div>
  );
}

export default App;
