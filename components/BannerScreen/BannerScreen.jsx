import Carousel from 'react-native-reanimated-carousel';
import { Dimensions, Image } from 'react-native';

const images = [
  'https://source.unsplash.com/1024x768/?nature',
  'https://source.unsplash.com/1024x768/?water',
  'https://source.unsplash.com/1024x768/?girl',
  'https://source.unsplash.com/1024x768/?tree', // Network image        // Local image
];

const BannerScreen = () => {
  const width = Dimensions.get('window').width;

  return (
    <Carousel
      loop
      width={width}
      height={150}
      autoPlay={true}
      data={images}
      scrollAnimationDuration={4500}
      style={{ marginTop: 10 }}
      renderItem={({ index }) => (
        <Image
          source={{ uri: 'https://source.unsplash.com/1024x768/?girl' }}
          style={{ width: width, height: width / 2, resizeMode: 'cover' }}
        />
      )}
    />
  );
};

export default BannerScreen;
