import { useState } from 'react';
import { Searchbar, useTheme, Button } from 'react-native-paper';
import { View } from 'react-native';
import { styles } from './styles/SearchScreen.styles';

const SearchScreen = () => {
  const theme = useTheme();
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <View style={styles.container}>
      <Searchbar
        iconColor={theme.colors.inversePrimary}
        placeholder='What are you looking for?'
        onChangeText={(text) => setSearchQuery(text)}
        value={searchQuery}
        style={{ width: '80%' }}
      />
      <Button
        icon='tune-variant'
        style={[styles.iconButton, { backgroundColor: theme.colors.backdrop }]}
      />
    </View>
  );
};

export default SearchScreen;
