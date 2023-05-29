import { StyleSheet } from 'react-native';

export const BOTTOM_APPBAR_HEIGHT = 60;
export const MEDIUM_FAB_HEIGHT = 40;

export const styles = StyleSheet.create({
  bottom: {
    backgroundColor: 'aquamarine',
    position: 'absolute',
    bottom: 10,
    width: '95%',
    alignSelf: 'center',
    borderRadius: 20,
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  fab: {
    top: (BOTTOM_APPBAR_HEIGHT - MEDIUM_FAB_HEIGHT) / 2,
  },
});
