import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Products from './pages/Products/Products';
import Detail from './pages/Detail/Detail';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Stack = createNativeStackNavigator()



const Router = () => {
  return (
    <GestureHandlerRootView>

      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen name='ProductsPage' component={Products} options={{title:'Shopping', headerTitleAlign: 'center' ,
          headerStyle:{backgroundColor:'#64b5f6'},
          headerTitleStyle:{color:'white'},
          }} />
          
          <Stack.Screen name='DetailPage' component={Detail} options={{title:'Detail', headerTitleAlign: 'center' ,
          headerStyle:{backgroundColor:'#64b5f6'},
          headerTitleStyle:{color:'white'},
          headerTintColor:'white',
          }} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}



export default Router;