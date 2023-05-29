import { FAB, useTheme } from 'react-native-paper';

const HeaderLeft = () => {
  const theme = useTheme();

  return (
    <>
      <FAB
        mode='flat'
        size='small'
        icon='menu'
        onPress={() => {}}
        style={{
          backgroundColor: theme.colors.backdrop,
        }}
        variant='surface'
      />
    </>
  );
};

export default HeaderLeft;
