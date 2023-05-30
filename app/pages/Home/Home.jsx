import { ScrollView, Text, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import { BannerScreen, SearchScreen } from '../../../components';
import { styles } from './styles/Home.styles';
import { CardScreen } from './components';

const Home = () => {
  const theme = useTheme();
  return (
    <>
      <BannerScreen />
      <SearchScreen />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={[styles.title, { color: theme.colors.onSurface }]}>
          <Text style={{ color: theme.colors.inversePrimary }}>Easy</Text> and
          modern garment exchange
        </Text>
        <CardScreen />
      </ScrollView>
    </>
  );
};

export default Home;
