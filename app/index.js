import { Text, SafeAreaView, ScrollView } from 'react-native';
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
} from 'react-native-paper';
import { Stack } from 'expo-router';
import { Navbar, HeaderLeft, HeaderRight } from '../components';
import { colors } from '../constants';

const App = () => {
  const theme = {
    ...DefaultTheme,
    colors: colors,
  };

  return (
    <PaperProvider theme={theme}>
      <SafeAreaView
        style={{ flex: 1, backgroundColor: theme.colors.background }}
      >
        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: theme.colors.background },
            headerShadowVisible: false,
            headerLeft: () => <HeaderLeft />,
            headerRight: () => <HeaderRight />,
            headerTitle: '',
          }}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text>Home</Text>
        </ScrollView>
        <Navbar />
      </SafeAreaView>
    </PaperProvider>
  );
};

export default App;
