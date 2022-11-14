import React, { useState, useEffect } from "react";
import { View, Text, Linking ,Button,StyleSheet} from "react-native";
import { runFireworks } from "../lib/utils";

function Succsess() {
  useEffect(() => {
    localStorage.clear();
    runFireworks();
  }, []);

  return (
    <View
      style={{minHeight:'60vh',alignItems: 'center',textAlign: 'center',fontSize:'50px'}}
    >
    <View style={{width:'1000px'}}>
      <Text style={{fontWeight:'700'}}>Thank You for your order!</Text>
      <Text >If you have any questions, please email</Text>
      <Text
        style={{ color: "blue" }}
        onPress={() => Linking.openURL("mailto:ohadCo90@gmail.com")}
      >
        ohadCo90@gmail.com
      </Text>
      <Button 
        style={styles.button}
        title="Continue Shopping"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
    </View>
  );
}

export default Succsess;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#0780F9',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  }
})