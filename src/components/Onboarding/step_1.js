import React from 'react';
import { Text, View, Button, Icon } from 'native-base';
import { Image } from 'react-native';

const Step1 = ({styles, switchStep}) =>
  <View style={styles.center}>
    <Image
      style={styles.icon}
      source={require('../../../assets/images/icon_1.png')}
    />
    <Text style={[styles.bold, styles.heading]}>John Doe</Text>
    <View style={styles.row}>
      <Icon active name='location' type='EvilIcons' style={styles.location} />
      <Text style={styles.text}>NG</Text>
    </View>
    <Text style={styles.text}>
     Get details of all candidates contesting and holding a political position.
    </Text>
    <Button block dark bordered style={styles.button} onPress={() => switchStep(2)}>
      <Text style={styles.bold}>NEXT</Text>
    </Button>
    <View style={styles.dotsView}>
      <Icon active name='circle' type='FontAwesome' style={styles.dots} />
      <Icon active name='circle-o' type='FontAwesome' style={styles.dots} />
      <Icon active name='circle-o' type='FontAwesome' style={styles.dots} />
    </View>
  </View>

export default Step1;
