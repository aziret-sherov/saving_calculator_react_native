import React, {useState} from 'react'
import {View, Text, Button, TextInput} from 'react-native'
import Head from "./components/Head";
import Box1 from "./components/Box1";
import Box2 from "./components/Box2";
import Box3 from "./components/Box3";

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const App = () => {
    const [radio, setRadio] = useState(true);

    const [totalAmount, setTotalAmount] = useState(0)
    const [monthlyAmount, setMonthlyAmount] = useState(0)

    const [amountMonth, setAmountMonth] = useState(1)

    const [month, setMonth] = useState(new Date().getMonth());
    const [year, setYear] = useState(new Date().getFullYear())

    const click = () => {
        if (radio === true) {
            const a = parseInt(totalAmount)
            const b = parseInt(amountMonth)
            setMonthlyAmount(Math.round(a / b));
        } else {
            const a = parseInt(monthlyAmount)
            const b = parseInt(amountMonth)
            setTotalAmount(Math.round(a * b))
        }
    }

    return (
        <View style={style.main}>
            <Head title='Head'><title>Head</title></Head>
            <View style={style.container}>
                <Box1 radio={radio} setRadio={setRadio}/>
                <Box2
                    radio={radio}
                    setAmountMonth={setAmountMonth}
                    amountMonth={amountMonth}
                    total={totalAmount}
                    setTotal={setTotalAmount}
                    month={month}
                    setMonth={setMonth}
                    year={year}
                    setYear={setYear}
                    monthNames={monthNames}
                    monthlyAmount={monthlyAmount}
                    setMonthlyAmount={setMonthlyAmount}
                />
                <Box3 radio={radio} total={totalAmount} monthly={monthlyAmount} date={amountMonth}
                      month={month}
                      monthNames={monthNames}
                      year={year}
                />
                <View style={style.button}>
                    <Button onPress={click} title={"Finish"}>Finish</Button>
                </View>
            </View>
        </View>
    )
}

export default App;
//
const style = {
    main: {
        justifyContent: "center",
        alignItems: "center",
        /* MacBook - 1 */
        // position: "relative",
        width: "100%",
        height: "100%",
        backgroundColor: '#E5E5E5',
        paddingTop: 80,
        // justifyContent: "center",
        // alignItems: "center"
    },

    container: {
        flex: 1,
        /* Rectangle 10 */
        width: 415,
        // height: 400,
        borderRadius: 10,
        backgroundColor: "#FFFEFE",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
        marginTop: 20,
        paddingTop: 45,
        paddingLeft: 40,
    },

    button: {
        flex: 1,
        width: 308, paddingTop: 30,

    }
}
