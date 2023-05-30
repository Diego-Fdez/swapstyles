import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useTheme } from 'react-native-paper';
import { styles } from './styles/CardScreen.styles';

const CardScreen = () => {
  const theme = useTheme();

  const images = [
    { id: 1, imageSource: 'https://source.unsplash.com/1024x768/?nature' },
    { id: 2, imageSource: 'https://source.unsplash.com/1024x768/?water' },
    { id: 3, imageSource: 'https://source.unsplash.com/1024x768/?girl' },
    { id: 4, imageSource: 'https://source.unsplash.com/1024x768/?tree' }, // Network image
    { id: 5, imageSource: 'https://source.unsplash.com/1024x768/?nature' },
    { id: 6, imageSource: 'https://source.unsplash.com/1024x768/?water' },
    { id: 7, imageSource: 'https://source.unsplash.com/1024x768/?girl' },
    { id: 8, imageSource: 'https://source.unsplash.com/1024x768/?tree' },
  ];

  return (
    <View style={styles.gridContainer}>
      {images.map((card, index) => (
        <TouchableOpacity key={card.id} style={[styles.card]}>
          <Image source={{ uri: card.imageSource }} style={styles.image} />
          <View style={styles.cardTextContainer}>
            <Text style={[styles.cardText, { color: theme.colors.background }]}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default CardScreen;
