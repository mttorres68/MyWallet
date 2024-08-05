import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { UserContext } from "../contexts/auth";
import { useContext } from "react";

import signIn from '../screens/auth/signIn'
import signUp from '../screens/auth/signUp'
import home from "../screens/home/home";

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes(){
  const { login } = useContext(UserContext)

  return(
    <Navigator screenOptions={{headerShown: false}}>
      
        {login ? (
          <>
            <Screen name="home" component={home}/>          
          
          </>
        )
        :(
          <>
            <Screen name="login" component={signIn}/>
            <Screen name="registro" component={signUp}/>
          
          </>
        )}
      
      
      

    </Navigator>
  )
}
