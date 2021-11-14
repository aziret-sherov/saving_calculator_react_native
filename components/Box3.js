import React from 'react';
import {Text, View} from "react-native";

function Box3({radio, total, monthly, date, monthNames, month, year}) {
    return (
        <View style={style.box3}>
            <View style={style.box3mainDiv}>
                <Text style={style.box3mainDiv1}>
                    {radio ? `Monthly amount` : `Total amount`}
                </Text>
                <Text style={style.box3mainDiv2}>
                    ${radio ? monthly : total}
                </Text>
                <View style={style.box3mainDiv3}>
                    <Text style={style.box3mainDiv31}>{
                        radio
                            ? `You are planning ${date} monthly deposits to reach your $ ${total} goal by ${monthNames[month]} ${year}.`
                            : `You are saving $ ${monthly} monthly to save $ ${total} by ${monthNames[month]} ${year}.`}
                    </Text>
                </View>
            </View>
        </View>
    );
}

export default Box3;
const style = {
    box3: {
        // flex: 1,
        // width: 308,
        paddingTop: 30,
    },
    box3mainDiv: {
        flexDirection: "row",
        flexWrap: "wrap",
        width: 308,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: "#CFCFCF",
        borderRadius: 4,
        justifyContent: "space-around"
    },
    box3mainDiv1: {

        height: 85,
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 14,
        lineHeight: 25,
        color: "#102C51",
        paddingTop: 30,
        // marginTop: 25,
        // marginBottom: 30,
    },
    box3mainDiv2: {

        height: 85,
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 24,
        lineHeight: 25,
        color: "#2F80ED",
        paddingTop: 30,
        // marginTop: 25,
        // marginBottom: 30,
    },
    box3mainDiv3: {
        width: 306,
        backgroundColor: "#F4F8FA",
        alignItems: 'center',
        borderRadius: 4,
    },
    box3mainDiv31: {
        width: 300,
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 10,
        lineHeight: 14,
        color: "#102C51",
        // margin: "10px 35px 0px",

    },
}
