import {StyleSheet} from 'react-native';

const featuredStyles = StyleSheet.create({
  title: {
    paddingTop: 20,
    paddingBottom: 15,
  },
  titleText: {
    fontFamily: 'Montserrat-Black',
    marginTop: 5,
    marginBottom: 10,
    fontSize: 29,
    textAlign: 'center',
    color: 'lightgray',
  },
  artistImage: {
    width: 200,
    height: 200,
    alignSelf: "center",
    borderRadius: 100,
    marginVertical: 20,
  },
  imageCard: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  artistNameText: {
    fontFamily: 'Montserrat-Regular',
    marginTop: 10,
    marginBottom: 15,
    color: 'white',
    fontSize: 45,
    textAlign: 'center',
  },
  dateText: {
    fontFamily: 'Karla-BoldItalic',
    textAlign: 'center',
    fontSize: 20,
    color: 'lightgray',
  },
  body: {
    backgroundColor: 'white',
    marginBottom: 40,
    paddingBottom: 40,
  },
  socialMediaContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingVertical: 10,
    marginBottom: -1,
  },
  socialMediaButton: {
    borderRadius: 50,
    width: 55,
  },
  bioContainer: {
    paddingHorizontal: 25,
    paddingVertical: 15,
  },
  bioTitle: {
    fontFamily: 'Montserrat-Black',
    fontSize: 30,
    textAlign: 'center',
    color: 'rgba(232, 74, 39, 1.0)',
    marginBottom: 10,
  },
  bioBody: {
    fontFamily: 'Karla-Regular',
    fontSize: 18,
    color: 'lightgray',
    lineHeight: 30,
  },
  pastArtistsBody: {
    backgroundColor: '#121212',
    marginVertical: 20,
  },
  pastArtistsTitle: {
    color: 'lightgray',
    fontSize: 30,
    fontFamily: 'Montserrat-Black',
    textAlign: 'center',
    marginVertical: 20,
  },
  artistsContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "stretch",
    alignItems: "center",
  },
});

export default featuredStyles;