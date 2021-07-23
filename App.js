/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {ZohoSalesIQ} from 'react-native-zohosalesiq-mobilisten';
import {Platform} from 'react-native';
const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const backgroundStyle = {
    backgroundColor: true ? Colors.darker : Colors.lighter,
  };

  if (Platform.OS === 'ios') {
    console.log('iosss');

    ZohoSalesIQ.init(
      '1sh3fOLFIKiGqxwfVN2O1acf1B1Ygsp%2B',
      'oSbriXgEQrPqXlogydRYKNrBX%2FD2O4IlI4VAcMw0jjZ6Jeo6aoS8vkGn3%2FjsOQtCeRgYC%2BHgK9DiYJd74kX5aKuMkGIm4RDEE8IA0L0udBo%3D',
    );
    ZohoSalesIQ.setLauncherVisibility(true);
    //By default, if you wish to display the chat button/bubble on the application, then use .setLauncherVisibility() API.
  } else {
    ZohoSalesIQ.init(
      '1sh3fOLFIKiGqxwfVN2O1acf1B1Ygsp%2B',
      'oHPpnyuFXlJtmY%2F5v%2FD5ORmISdQp%2BsYGXhtGynczHeSaDzdJzDbTGQEUN%2BTuiUwi03F9IZ436iVh%2BZpTikVwGNtWWDlMUGJaNsggxq3Ov8o%3D',
    );
    ZohoSalesIQ.setLauncherVisibility(true);
    //By default, if you wish to display the chat button/bubble on the application, then use .setLauncherVisibility() API.
  }
  ZohoSalesIQ.setLanguage('fr');
  return <View style={backgroundStyle}></View>;
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
