import { StyleSheet,Dimensions } from 'react-native'

const deviceSize = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    body_container:{
        padding:10,
    },
    image:{
        height:deviceSize.height/3,
        width:deviceSize.width,
        resizeMode:'contain',
        backgroundColor:'white',
    },
    title:{
        fontWeight:'bold',
        fontSize:23,
        color:'darkblue'
    },
    description:{
        fontWeight:'bold',
        fontSize:16,
        marginVertical:5,
    },
    price:{
        fontStyle:'italic',
        fontWeight:'bold',
        color:'gray',
        textAlign:'right',
    },

})