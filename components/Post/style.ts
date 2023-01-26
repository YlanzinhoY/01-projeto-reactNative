import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
       flex: 1,
       backgroundColor: '#131016',
        alignItems: 'center',
        borderTopStartRadius: 20,
        borderTopEndRadius: 20
    },
    narutoImg: {
        width: 80,
        height: 80,
        borderRadius: 100,
        marginRight: 10
    },
    containerProfile: {
        flexDirection: 'row',
        marginBottom: 12,
        alignItems: 'center',
    },
    nome: {
        color: 'white',
        marginLeft: 5,
        fontSize: 18,
        fontWeight: '500'
    } ,
    postagem: {
        color: 'white',
        fontSize: 22,
        marginTop: 12
    },
    content: {
        marginTop: 150,
        backgroundColor: '#243447',
        padding: 26,
        borderRadius: 8
    },
    hr: {
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginTop: 10
    },
    data: {
        marginTop: 20,
        fontSize: 13,
        color: 'white'
    },
    iconsAlign: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 12
     },
     bold: {
        fontWeight: 'bold',
     },
     colorDetails: {
        color: 'white',
        fontSize: 16,
        marginTop: 12
    },
    deviceWrite: {
        color: '#166afc',
        textDecorationLine: 'underline'
    }
}) 