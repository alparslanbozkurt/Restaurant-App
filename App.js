import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from './screens/SearchScreen';
import ResultsShowScreen from './screens/ResultsShowScreen';

const RootStack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerTitle: 'Restoran Uygulaması', // Tüm sayfalarda geçerli olacak başlık
          headerTitleAlign: 'center',
        }}
      >
        <RootStack.Screen name="Search" component={SearchScreen} />
        <RootStack.Screen name="ResultsShow" component={ResultsShowScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
