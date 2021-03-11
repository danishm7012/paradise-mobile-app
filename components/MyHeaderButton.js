import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { HeaderButtons, HeaderButton } from 'react-navigation-header-buttons';

// define IconComponent, color, sizes and OverflowIcon in one place
const MaterialHeaderButton = (props) => (

  <HeaderButton IconComponent={Ionicons} iconSize={23} color="blue" {...props} />

);

export const MaterialHeaderButtons = (props) => {
  return <HeaderButtons HeaderButtonComponent={MaterialHeaderButton} {...props} />;
};
