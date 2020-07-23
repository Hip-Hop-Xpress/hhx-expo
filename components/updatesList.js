import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';

import UpdateComponent from './updateComponent';
import LoadingIcon from './loadingIcon';

import UPDATES from '../api/constants/updates';
import fetchUpdates from '../api/endpoints/updates';

const UpdatesList = props => {
  const [updates, setUpdates] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  
  // Handle the promise obtained with fetching data from API
  useEffect(() => {
    requestUpdates();
  }, []);

  const requestUpdates = () => {
    const promise = fetchUpdates();
    promise
      .then(response => {
        console.log('Fetched updates successfully!');
        setUpdates(response.data);
        setRefreshing(false);
      })
      .catch(error => {
        console.log(error);

        // If error occurs, set to constant
        // TODO: give some warning to user in case error occurs
        setUpdates(UPDATES);
        setRefreshing(false);
      });
  }

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

  const handleRefresh = () => {
    setRefreshing(true);
    requestUpdates();
  }

  return (
    <View>
      {updates.length === 0 && <LoadingIcon />}
      <FlatList
        data={updates}
        renderItem={renderUpdateComponent}
        keyExtractor={update => update.id}
        contentContainerStyle={{flexGrow: 1}}
        refreshing={refreshing}
        onRefresh={handleRefresh}
        scrollEnabled={true}
        showsVerticalScrollIndicator
      />
    </View>
  );
};

export default UpdatesList;
