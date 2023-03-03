import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Login } from "./src/screens/login";
import { Register } from "./src/screens/register";
import { Books } from "./src/screens/books";
import { BookDetails } from "./src/screens/bookDetails";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name={"login"} component={Login} />
        <Stack.Screen name={"register"} component={Register} />
        <Stack.Screen name={"books"} component={Books} />
        <Stack.Screen name={"bookDetails"} component={BookDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
