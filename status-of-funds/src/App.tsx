import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { 
  pieChartOutline, 
  homeOutline, 
  flagOutline,
  barChartOutline,
  analyticsOutline
} from 'ionicons/icons';
import Login from './pages/Login'
import Tab1 from './pages/Tab1';
import Home from './pages/Home';
import Tab3 from './pages/Tab3';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import { useContext, useState } from 'react';
import MainTabs from './MainTabs';
import React from 'react';

setupIonicReact();

interface IUserManager {
  setIsLoggedIn: Function;
}

const user: IUserManager = {
  setIsLoggedIn: () => {}
};

export const UserContext = React.createContext<IUserManager>(user);

const IonicApp: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const user = useContext(UserContext);

  user.setIsLoggedIn = setIsLoggedIn;

  return (
    <IonApp>
      <IonReactRouter>
        <Route exact path="/login" >
          {isLoggedIn ? <Home /> : <Login />}
        </Route>
        {/* <Route path="/" component={MainTabs} /> */}
        <Route path="/" component={isLoggedIn ? MainTabs : Login} />
      </IonReactRouter>
    </IonApp>
  );
};

const App: React.FC = () => {
  return (
    <UserContext.Provider value={user}>
      <IonicApp />
    </UserContext.Provider>
  );
};

export default App;
