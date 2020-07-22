import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';

import UpdateComponent from './updateComponent';
import UPDATES from '../api/constants/updates';
import fetchUpdates from '../api/endpoints/updates';

const UpdatesList = props => {
  const [updates, setUpdates] = useState([]);
  const promise = fetchUpdates();

  // Handle the promise obtained with fetching data from API
  useEffect(() => {
    promise
      .then(response => {
        console.log('Fetched updates successfully!');
        setUpdates(response.data);
      })
      .catch(error => {
        console.log(error);

        // If error occurs, set to constant
        // TODO: give some warning to user in case error occurs
        setUpdates(UPDATES);
      });
  }, []);

  const renderUpdateComponent = ({ item: update }) => (
    <UpdateComponent
      title={update.title}
      body={update.body}
      date={update.dateCreated !== undefined ? update.dateCreated.substring(0, 21) : ''}
      lastUpdated={update.lastUpdated}
      author={update.author}
      key={update.id}
      navigation={props.navigation}
    />
  );


  // const Updates = updates.map(update => (
  //   <UpdateComponent
  //     title={update.title}
  //     body={update.body}
  //     date={update.dateCreated.substring(0, 21)}
  //     lastUpdated={update.lastUpdated}
  //     author={update.author}
  //     key={update.id}
  //     navigation={props.navigation}
  //   />
  // ));

  return (
    <>
      {<FlatList
        data={updates}
        renderItem={renderUpdateComponent}
        keyExtractor={update => update.id} 
      />}
    </>
  );
};

export default UpdatesList;
