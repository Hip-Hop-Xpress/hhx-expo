import React from 'react';

import { ActivityIndicator } from 'react-native';
import { ILLINI_BLUE } from '../styles/colors';

const LoadingIcon = () => {
  return (
    <ActivityIndicator size="large" color={ILLINI_BLUE}  />
  )
}

export default LoadingIcon;