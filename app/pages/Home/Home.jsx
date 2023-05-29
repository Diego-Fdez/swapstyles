import { ScrollView, Text, View } from 'react-native';

const Home = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <Text style={{ fontSize: 30, color: 'red' }}>Home</Text>
      </View>
    </ScrollView>
  );
};

export default Home;
