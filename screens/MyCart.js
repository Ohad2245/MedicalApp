import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  ToastAndroid,
  Button
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Items } from "../database/Database";
import { COLORS } from "../assets/Style";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const MyCart = ({ navigation }) => {
  const [product, setProduct] = useState();
  const [total, setTotal] = useState(null);

  const [counter,setCounter] = useState(1);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      getDataFromDB();
    });
    return unsubscribe;
  }, [navigation]);

  const getDataFromDB = async () => {
    let items = await AsyncStorage.getItem("cartItems");
    items = JSON.parse(items);
    let productData = [];
    if (items) {
      Items.forEach((data) => {
        if (items.includes(data.id)) {
          productData.push(data);
          return;
        }
      });
      setProduct(productData);
      getTotal(productData);
    } else {
      setProduct(false);
      getTotal(false);
    }
  };
  const getTotal = (productData) => {
    let total = 0;
    for (let index = 0; index < productData.length; index++) {
      let productPrice = productData[index].productPrice;
      total = total + productPrice;
    }
    setTotal(total);
  };

  // remove data from Cart
  const removeItemFromCart = async (id) => {
    let itemArray = await AsyncStorage.getItem("cartItems");
    itemArray = JSON.parse(itemArray);
    if (itemArray) {
      let array = itemArray;
      for (let index = 0; index < array.length; index++) {
        if (array[index] == id) {
          array.splice(index, 1);
        }
        await AsyncStorage.setItem("cartItems", JSON.stringify(array));
        getDataFromDB();
      }
    }
  };

  // checkOut

  const checkOut = async () => {
    try {
      await AsyncStorage.removeItem("cartItems");
    } catch (error) {
      return error;
    }

    ToastAndroid.show("Items will be Delivers SOON!", ToastAndroid.SHORT);

    navigation.navigate("Home");
  };

  const renderProducts = (data, index) => {
    return (
      <TouchableOpacity
        key={data.id}
        onPress={() =>
          navigation.navigate("ProductInfo", { productID: data.id })
        }
        style={{
          width: "100%",
          height: 100,
          marginVertical: 6,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: "30%",
            height: 100,
            padding: 14,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
            marginRight: 22,
            backgroundColor: "whitesmoke",
          }}
        >
          <Image
            source={data.productImage}
            style={{
              width: "100%",
              height: "100%",
              resizeMode: "contain",
            }}
          />
        </View>
        <View
          style={{
            flex: 1,
            height: "100%",
            justifyContent: "space-around",
          }}
        >
          <View style={{}}>
            <Text
              style={{
                fontSize: 14,
                maxWidth: "100%",
                color: COLORS.black,
                fontWeight: "100",
                letterSpacing: 2,
              }}
            >
              {data.productName}
            </Text>
            <View
              style={{
                marginTop: 4,
                flexDirection: "row",
                alignItems: "center",
                opacity: 0.6,
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "120",
                  maxWidth: "85%",
                  marginRight: 4,
                  fontFamily: "Av",
                }}
              >
                {data.productPrice}$
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
            
              <TouchableOpacity
                style={{
                  borderRadius: 100,
                  marginRight: 20,
                  padding: 4,
                  borderWidth: 1,
                  borderColor: COLORS.backgroundMedium,
                  opacity: 0.5,
                }}
              >
                <MaterialCommunityIcons
                  onClick={() => setCounter(counter - 1)}
                  name="minus"
                  style={{
                    fontSize: 16,
                    color: COLORS.backgroundDark,
                  }}
                />
              </TouchableOpacity>
            
              <Text>{counter}</Text>
              <TouchableOpacity
                style={{
                  borderRadius: 100,
                  marginLeft: 20,
                  padding: 4,
                  borderWidth: 1,
                  borderColor: COLORS.backgroundMedium,
                  opacity: 0.5,
                }}
              >
                <MaterialCommunityIcons
                onClick={() => setCounter(counter + 1)}
                  name="plus"
                  style={{
                    fontSize: 16,
                    color: COLORS.backgroundDark,
                  }}
                />
              
              </TouchableOpacity>
              
            </View>
            <TouchableOpacity onPress={() => removeItemFromCart(data.id)}>
              <MaterialCommunityIcons
                name="delete-outline"
                style={{
                  fontSize: 23,
                  color: "red",
                  padding: 8,
                  borderRadius: 100,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: COLORS.white,
        position: "relative",
      }}
    >
      <ScrollView>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            paddingTop: 16,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          </View>
        <Text
          style={{
            fontSize: 20,
            color: COLORS.black,
            fontWeight: "100",
            letterSpacing: 3,
            paddingTop: 20,
            paddingLeft: 16,
            marginBottom: 10,
          }}
        >
          Order Details
        </Text>
        <View style={{ paddingHorizontal: 16 }}>
          {product ? product.map(renderProducts) : null}
        </View>
        <Text></Text>
        <View>
          <View
            style={{
              paddingHorizontal: 16,
              marginVertical: 10,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                color: COLORS.black,
                fontWeight: "100",
                letterSpacing: 3,
                marginBottom: 20,
              }}
            >
              Delivery Location
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  width: "80%",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    color: COLORS.blue,
                    backgroundColor: COLORS.backgrondLight,
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 12,
                    borderRadius: 10,
                    marginRight: 18,
                  }}
                >
                  <MaterialCommunityIcons
                    name="truck-delivery-outline"
                    style={{
                      fontSize: 18,
                      color: "silver",
                    }}
                  />
                </View>
                <View>
                  <Text
                    style={{
                      fontSize: 14,
                      color: COLORS.black,
                      fontWeight: "500",
                    }}
                  >
                    Sharey Tikva
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      color: COLORS.black,
                      fontWeight: "400",
                      lineHeight: 20,
                      opacity: 0.5,
                    }}
                  >
                    Yahalom 26
                  </Text>
                </View>
              </View>

              <MaterialCommunityIcons
                name="chevron-right"
                style={{
                  fontSize: 22,
                  color: COLORS.black,
                }}
              />
            </View>
          </View>
          <View
            style={{
              paddingHorizontal: 16,
              marginVertical: 10,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: COLORS.black,
                fontWeight: "100",
                letterSpacing: 2,
                marginBottom: 20,
              }}
            >
              Payment Method
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  width: "80%",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    color: COLORS.blue,
                    backgroundColor: COLORS.backgrondLight,
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 12,
                    borderRadius: 10,
                    marginRight: 18,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 10,
                      fontWeight: "900",
                      color: COLORS.blue,
                      letterSpacing: 1,
                    }}
                  >
                    VISA
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      fontSize: 14,
                      color: COLORS.black,
                      fontWeight: "500",
                    }}
                  >
                    VISA Classic
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      color: COLORS.black,
                      fontWeight: "400",
                      lineHeight: 20,
                      opacity: 0.5,
                    }}
                  >
                    ****-7547
                  </Text>
                </View>
              </View>

              <MaterialCommunityIcons
                name="chevron-right"
                style={{
                  fontSize: 22,
                  color: COLORS.black,
                }}
              />
            </View>
          </View>

          {/* Order Info */}

          <View
            style={{
              paddingHorizontal: 16,
              marginTop: 40,
              marginBottom: 80,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: COLORS.black,
                fontWeight: "500",
                letterSpacing: 1,
                marginBottom: 20,
              }}
            >
              Order Info
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 8,
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "400",
                  maxWidth: "80%",
                  color: COLORS.black,
                  opacity: 0.5,
                }}
              >
                {" "}
                Subtotal
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "400",
                  maxWidth: "80%",
                  color: COLORS.black,
                  opacity: 0.8,
                }}
              >
                {total}.00$
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 22,
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "400",
                  maxWidth: "80%",
                  color: COLORS.black,
                  opacity: 0.5,
                }}
              >
                {" "}
                Shipping Tax
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "400",
                  maxWidth: "80%",
                  color: COLORS.black,
                  opacity: 0.8,
                }}
              >
                {total / 20}$
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "400",
                  maxWidth: "80%",
                  color: COLORS.black,
                  opacity: 0.5,
                }}
              >
                {" "}
                Total
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "500",
                  color: COLORS.black,
                }}
              >
                {total + total / 20}$
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <View
        style={{
          position: "absolute",
          bottom: 10,
          height: "8%",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("Payment")}
          // (total !=0 ? checkOut() : null)}
          style={{
            width: "86%",
            height: "90%",
            backgroundColor: COLORS.blue,
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 12,
              fontWeight: "500",
              letterSpacing: 1,
              color: COLORS.white,
              textTransform: "uppercase",
            }}
          >
            For Payment
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MyCart;
