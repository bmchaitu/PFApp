import React from 'react';
import {Text} from 'react-native';
import AppTemplate from './src/Templates/AppTemplate';
import {appText, MANROPE} from './src/styles/Typography';

const App = () => {
  return (
    <AppTemplate>
      <Text style={appText(MANROPE.BOLD, 14)}>Hello World</Text>
    </AppTemplate>
  );
};

export default App;
