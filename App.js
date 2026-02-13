
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Principal from "./src/app/index";
import Esporte from "./src/app/esporte";
import Mundo from "./src/app/mundo";
import Tecnologia from "./src/app/tecnologia";
import NewsDetail from "./src/noticia/NoticiaEsporte1";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Principal" component={Principal} options={{ headerShown: false }} />
        <Stack.Screen name="Esporte" component={Esporte} options={{ headerShown: false }} />
        <Stack.Screen name="Mundo" component={Mundo} options={{ headerShown: false }} />
        <Stack.Screen name="Tecnologia" component={Tecnologia} options={{ headerShown: false }} />
        <Stack.Screen name="NewsDetail" component={NewsDetail} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
