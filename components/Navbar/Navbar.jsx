import { View } from 'react-native';
import { Appbar, FAB, useTheme } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { BOTTOM_APPBAR_HEIGHT, styles } from './styles/Navbar.styles';

const Navbar = () => {
  const { bottom } = useSafeAreaInsets();
  const theme = useTheme();

  return (
    <Appbar
      style={[
        styles.bottom,
        {
          height: BOTTOM_APPBAR_HEIGHT + bottom,
          backgroundColor: theme.colors.backdrop,
        },
      ]}
      safeAreaInsets={{ bottom }}
    >
      <View style={styles.buttonWrapper}>
        <FAB
          mode='flat'
          size='medium'
          icon='home'
          onPress={() => {}}
          style={styles.fab}
        />
        <FAB
          mode='flat'
          size='medium'
          icon='heart-outline'
          onPress={() => {}}
          style={styles.fab}
        />
        <FAB
          mode='flat'
          size='medium'
          icon='message-text-outline'
          onPress={() => {}}
          style={styles.fab}
        />
        <FAB
          mode='flat'
          size='medium'
          icon='account-outline'
          onPress={() => {}}
          style={styles.fab}
        />
      </View>
    </Appbar>
  );
};

export default Navbar;
