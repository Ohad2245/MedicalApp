import React from 'react';
import {View , TouchableOpacity } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS } from '../../../assets/Style';

function CartIons() {
  return (
    <View>
        <TouchableOpacity>
                        <Entypo 
                        name='shopping-bag' 
                        style={{
                            fontSize:18,
                            color:COLORS.backgroundMedium,
                            padding:12,
                            borderRadius:10,
                            backgroundColor:COLORS.backgrondLight,
                        }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> navigation.navigate('MyCart')}>
                        <MaterialCommunityIcons
                            name= "cart"
                            style={{
                                fontSize:18,
                                color:COLORS.backgroundMedium,
                                padding:12,
                                borderRadius:10,
                                borderWidth:1,
                                borderColor:COLORS.backgrondLight,
                            }}
                        />    
                    </TouchableOpacity>
    </View>
  )
}

export default CartIons;