import React, { useState, useEffect } from 'react';
import VariationComponent from './variationComponent';
import VARIATIONS from '../api/constants/variations';
import fetchVariations from '../api/endpoints/variations';

const VariationsList = ({navigation}) => {
  const [variationsData, setVariationsData] = useState([]);
  const promise = fetchVariations();

  // Handle the promise obtained with fetching data from API
  useEffect(() => {
    promise
      .then(response => {
        console.log('Fetched variations successfully!');
        setVariationsData(response.data);
      })
      .catch(error => {
        console.log(error);

        // If error occurs, set to constant
        // TODO: give some warning to user in case error occurs
        setVariationsData(VARIATIONS);
      });
  }, []);
  
  let key = 0;
  const Variations = variationsData.map(variation => (
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