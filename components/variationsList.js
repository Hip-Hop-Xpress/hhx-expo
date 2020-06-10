import React from 'react';

import VariationComponent from './variationComponent';
import VARIATIONS from '../api/constants/variations';

const VariationsList = ({navigation}) => {
  const Variations = VARIATIONS.map(variation => (
    <VariationComponent />
  ));

  return <>{Variations}</>
}

export default VariationsList;