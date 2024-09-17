import { Image, StyleSheet, Platform, View, Text } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (

    <View style={{ backgroundColor: "#82caff", flex: 1 }}>
     
      <View style={{ backgroundColor: "#ff4747", height: 150, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ textTransform: "uppercase", fontSize: 35 }}>Röd</Text>
      </View>
      
      <View style={{ flexDirection: "row", height: 150, marginTop: 5 }}>
        <View style={{ backgroundColor: "#50C878", flex: 1 }}>
          <Text style={{ textTransform: "uppercase", fontSize: 35, paddingLeft: 5 }}>Grön</Text>
        </View>
        <View style={{ backgroundColor: "#ffd300", flex: 1, marginLeft: 5 }}></View>
      </View>
      
      <View style={{ flexDirection: "row", height: 75, marginTop: 5 }}>
        <View style={{ backgroundColor: "#ff4747", flex: 3 }}></View>
        <View style={{ backgroundColor: "black", flex: 1, marginLeft: 5 }}></View>
      </View>

      <View style={{ flex: 1 }}></View>

      <View style={{ backgroundColor: "orange", height: 50, justifyContent: "center", alignItems: "flex-end" }}>
        <Text style={{ textTransform: "uppercase", fontSize: 35, paddingRight: 5 }}>Orange</Text>
      </View>
    
    </View>
    
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
