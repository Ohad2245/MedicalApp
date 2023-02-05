import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import AppNavigator from "./navigation/AppNavigator";
import { Provider as PaperProvider } from 'react-native-paper';

const App = () =>{
 const Stack = createNativeStackNavigator();

  return (
    <PaperProvider>
    <AppNavigator/>
    </PaperProvider>

  );
}

export default App;
