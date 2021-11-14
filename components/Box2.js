import React from 'react';
import {Text, TextInput, View} from "react-native";
import {AntDesign, FontAwesome5} from '@expo/vector-icons';

const Box2 = ({
                  monthNames,
                  radio,
                  setAmountMonth,
                  amountMonth,
                  setTotal,
                  total,
                  month,
                  setMonth,
                  year,
                  setYear,
                  monthlyAmount,
                  setMonthlyAmount
              }) => {


    const prevMonth = () => {
        if (amountMonth <= 0) {

        } else {
            if (month > 11) {
                setMonth(0)
                setYear(year + 1)

            } else if (month < 1) {
                setMonth(11)
                setYear(year - 1)
            } else {
                setMonth(month - 1)
            }
            setAmountMonth(amountMonth - 1)
        }
    }
    const nextMonth = () => {
        if (month > 10) {
            setMonth(0)
            setYear(year + 1)
        } else if (month < 0) {
            setMonth(11)
            setYear(year - 1)
        } else {
            setMonth(month + 1)
        }
        setAmountMonth(amountMonth + 1)
    }

    return (
        <View style={style.box2}>
            <Text style={style.box2P}>{radio ? `Total amount` : `Calculate by monthly saving`}</Text>
            <View style={style.box2Input}>
                <FontAwesome5 style={style.iconInput} name="dollar-sign" size={14} color="black"/>
                <TextInput
                    style={style.Input} type="numeric" keyboardType='number-pad' pattern="[0-9]*"
                    value={radio ? total : monthlyAmount}
                    onChangeText={radio ? number => setTotal(number) : number => setMonthlyAmount(number)}
                />
            </View>
            <Text style={style.box2P}>{radio ? `Reach goal by` : `Save until`}</Text>
            <View style={style.box2Input}>
                <AntDesign style={style.Arrows} onPress={prevMonth} name="arrowleft" size={16} color="black"/>
                <Text style={style.InputText}>{`${monthNames[month]}, ${year}`}</Text>
                <AntDesign style={style.Arrows} onPress={nextMonth} name="arrowright" size={16} color="black"/>
            </View>
        </View>
    );

}

export default Box2;

const style = {
    box2: {
        // flex:1,
        paddingTop: 30,
    },
    box2P: {
        width: 200,
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 14,
        lineHeight: 17,
        color: "#102C51",
        marginBottom: 5,
        marginTop: 5
    },
    box2Input: {
        width: 308,
        height: 35,
        borderRadius: 4,
        borderColor: "#CFCFCF",
        borderWidth: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    InputText: {
        fontSize: 18,
        lineHeight: 22,
        color: "#000000",
        fontStyle: "normal",
        fontWeight: "normal",

    },
    Arrows: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 16,
        lineHeight: 25,
        color: "#828282",
        padding: 3,
        backgroundColor: "#F4F8FA",

    },
    iconInput: {
        width: 8,
        height: 25,
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 11,
        lineHeight: 20,
        color: "#828282",
        marginTop: 5,
        marginLeft: 10
    },
    Input: {
        width: 287,
        height: 31
    }
}


