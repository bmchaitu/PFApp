import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

const AppTemplate = ({children}) => {
  return (
    <SafeAreaView style={styles.templateContainer}>{children}</SafeAreaView>
  );
};

const styles = StyleSheet.create({
  templateContainer: {
    flex: 1,
  },
});

export default AppTemplate;
