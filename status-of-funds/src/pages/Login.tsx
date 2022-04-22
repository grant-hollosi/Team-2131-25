import { IonButton, IonContent, IonHeader, IonInput, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { Redirect, Switch } from 'react-router';
import { useHistory } from 'react-router';

import './Login.css';
import { UserContext } from "../App"
import { useContext, useState } from 'react';

const Login: React.FC = () => {
  const user = useContext(UserContext);
  const [input, setInput] = useState("")
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen class='container'>
          <div className='vertical-center'>
          <IonInput clearInput 
          type='password'
          class='login-text' 
          placeholder='password' 
          value={input}
          onIonChange={(e) => {
              setInput((e.target as HTMLInputElement).value)
            }
            }></IonInput>
          <IonButton onClick={() => {
              if (input == "password") {
                user.setIsLoggedIn(true); 
            }
            setInput("");
          }}>Log In</IonButton>
          </div>
      </IonContent>
    </IonPage>
  );
};


export default Login;