import React from 'react';
import {Linking, Text, View} from "react-native";
import {AntDesign} from "@expo/vector-icons";

const Head = () => {
    return (
        <View style={style.head}>
            <View>
                <AntDesign style={style.vector} name="left" size={24} color="black"/>
            </View>
            <Text style={style.linkText}
                  onPress={() => Linking.openURL('#')}>
                Let's plan your saving goal
            </Text>
        </View>
    );
}

export default Head;

const style = {
    head: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        // width: "400px",
        // height: "70px"
    },
    linkText: {
        width: 300,
        // fontFamily: Rambla_400Regular,
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 20,
        // lineHeight: "22px",
        textAlign: "center",
        color: "#2F80ED",
    },
    vector: {
        /* Vector */
        color: "#828282",
        marginRight: 10,
        fontSize: 20,
    },
}
