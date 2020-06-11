import React from 'react';
import VariationComponent from './variationComponent';
import VARIATIONS from '../api/constants/variations';

const VariationsList = ({navigation}) => {
  let key = 0;
  const Variations = VARIATIONS.map(variation => (
    <VariationComponent
      name={variation.name}
      date={variation.date}
      description={variation.description}
      images={variation.images}
      navigation={navigation}
      key={key++}
    />
  ));

  return <>{Variations}</>
}

export default VariationsList;