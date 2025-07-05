import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  header: {
    backgroundColor: '#586994',
    paddingTop: 20,
    paddingBottom: 15,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    zIndex: 1000
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '300',
    color: 'white',
  },
  logo: {
    width: 40,
    height: 40,
  },
  button: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 5,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 190,
    height: 50,
    marginBottom: 15
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 20,
  },
  buttonWhiteSquare: {
    backgroundColor: 'white',
    width: 53,
    height: 42,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
  }
}); 