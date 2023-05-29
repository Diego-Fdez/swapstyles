import { TouchableOpacity, Image } from 'react-native';

const HeaderRight = () => {
  return (
    <TouchableOpacity>
      <Image
        source={{ uri: 'https://picsum.photos/200' }}
        style={{ width: 40, height: 40, borderRadius: 20 }}
      />
    </TouchableOpacity>
  );
};

export default HeaderRight;
