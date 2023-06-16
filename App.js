import { NavigationContainer } from '@react-navigation/native';
import { AppNavigation } from './src/Navigate/AppNavigation';
import { Text } from '@rneui/themed';
const App=()=> {
  return (
    <>
    <NavigationContainer>
    <AppNavigation />
    </NavigationContainer>
    </>
  );
};
export default App;
