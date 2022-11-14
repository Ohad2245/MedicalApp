import React from "react";
import { Text, View, TouchableOpacity, Image, StyleSheet } from "react-native";
import { COLORS } from "../assets/Style";
import styles from "../assets/Style";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import pills from "../assets/images/Pills/Astel/estella 1.jpg";
import muscleAches from "../assets/images/MuscleAches/advil/advil 1.jpg";
import headaches from "../assets/images/Headaches/acamol/acamol 1.webp";
import backpain from "../assets/images/BackPain/bengay/bengay 1.jpg";
import abdominalPain from "../assets/images/AbdominalPain/Altman/Altman 3.jpeg";
import { ScrollView } from "react-native";
import { auth } from "../firebase";
import { useNavigation } from "@react-navigation/core";

const Home = () => {
  const navigation = useNavigation();

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Register");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <ScrollView>
      <View>
        <View
          style={{
            marginBottom: 10,
            padding: 16,
            backgroundColor: "whitesmoke",
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("MyCart")}>
            <MaterialCommunityIcons
              name="cart"
              style={{
                fontSize: 30,
                color: COLORS.backgroundMedium,
                padding: 1,
                borderRadius: 10,
                borderWidth: 2,
                borderColor: COLORS.backgrondLight,
                position: "absolute",
                left: 320,
              }}
            />
            <TouchableOpacity
              onPress={handleSignOut}
              style={{
                backgroundColor: "#EEBC1D",
                height: 38,
                width: 38,
                marginLeft: 15,
                cursor: "pointer",
              }}
            >
              <Text>Sign out</Text>
            </TouchableOpacity>
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 26,
              color: "black",
              fontWeight: "200",
              letterSpacing: 7,
              marginBottom: 10,
              fontFamily: "DancingScript-Regular",
            }}
          >
            ברוך הבא ל IHealth
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: COLORS.black,
              fontWeight: "100",
              letterSpacing: 3,
              marginBottom: 10,
              lineHeight: 24,
              fontFamily: "DancingScript-Regular",
            }}
          >
            כאן תוכלו לבחור תרופה שאתם לוקחים באופן כרוני/לא,
            {"\n"}והמערכת תזכיר ותזמין עבורכם תרופה חדשה כשאנחנו רואים שעומד
            להגמר לך!
          </Text>
          <View></View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            <TouchableOpacity onPress={() => navigation.navigate("Pills")}>
              <Text style={styles.categories}>Pills</Text>
              <Image
                source={pills}
                resizeMode="contain"
                style={
                  styles.image
                }
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate("MuscleAches")}
            >
              <Text style={styles.categories}>MuscleAches</Text>
              <Image
                source={muscleAches}
                resizeMode="contain"
                style={styles.image}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("Headaches")}>
              <Text style={styles.categories}>Headaches</Text>
              <Image
                source={headaches}
                resizeMode="contain"
                style={
                  styles.image
                }
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("BackPain")}>
              <Text style={styles.categories}>BackPain</Text>
              <Image
                source={backpain}
                resizeMode="contain"
                style={styles.image}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate("AbdominalPain")}
            >
              <Text style={styles.categories}>AbdominalPain</Text>
              <Image
                source={abdominalPain}
                resizeMode="contain"
                style={
                  styles.image
                }
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
export default Home;
