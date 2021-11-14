import React from 'react';
import {Switch, Text, View} from "react-native";

const Box1 = ({radio, setRadio}) => {

    return (
        <View style={style.box1}>
            <Text style={style.box1Text}>Saving calculator</Text>
            <View style={style.checkBox}>
                <Switch
                    trackColor={{false: "#767577", true: "#81b0ff"}}
                    thumbColor={radio ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={() => setRadio(previousState => !previousState)}
                    value={radio}
                />
                <Text
                    style={style.checkBoxP}>{radio ? `Calculate by total amount` : `Calculate by monthly saving`}</Text>
            </View>
        </View>
    );
}

export default Box1;
const style = {
    box1: {},
    box1Text: {
        width: 150,
        height: 70,
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 30,
        lineHeight: 37,
        color: "#102C51",
    },
    checkBox: {
        marginTop: 10,
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        flexWrap: "wrap",
        width: 230,
    },
    checkBoxP: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 14,
        lineHeight: 17,
        color: "#102C51",
        paddingLeft: 10,
    },
}
