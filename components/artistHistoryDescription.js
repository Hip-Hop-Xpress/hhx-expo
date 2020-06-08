import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

const Description = (props) => {
  let description = props.paragraphs;
  let key = 0;

  const Paragraphs = description.map(paragraph => (
    <Paragraph
      text={paragraph}
      key={key++}
    />
  ));

  return <>{Paragraphs}</>;
}

const Paragraph = props => {
  return (
    <View style={styles.paragraph}>
      <Text style={styles.paragraphText}>{props.text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  paragraph: {
    marginVertical: 15,
  },
  paragraphText: {
    color: 'lightgray',
    fontFamily: 'Karla-Regular',
    fontSize: 19,
  },
})

export default Description;