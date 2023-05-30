import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 68,
  },
  card: {
    width: '48%',
    marginBottom: 20,
    height: 230,
    borderRadius: 20,
  },
  image: {
    resizeMode: 'cover',
    width: '100%',
    height: 230,
    borderRadius: 20,
  },
  cardTextContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    backgroundColor: 'rgba(236, 178, 245, 0.5)',
    backgroundImage:
      'linear-gradient(to bottom, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.9))',
    shadowColor: '#00000075',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  cardText: {
    fontSize: 15,
    textAlign: 'center',
    fontFamily: 'PopBold',
  },
});
