import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

const Description = (props) => {
  const description = props.description;

  const Paragraphs = description.map(paragraph => {
    <Paragraph
      paragraph={paragraph}
    />
  });

  return <>{Paragraphs}</>;
}

const Paragraph = (props) => {
  return (
    <View style={styles.paragraph}>
      <Text style={styles.paragraphText}>{props.paragraph}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  paragraph: {
    backgroundColor: 'red',
  },
  paragraphText: {
    fontFamily: 'Karla-Regular',
  },
})

export default Description;