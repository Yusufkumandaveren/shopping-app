import { StyleSheet} from 'react-native'

export default StyleSheet.create({
    container: {
        backgroundColor: '#e0e0e0',
        borderColor:'#bdbdbd',
        borderWidth:1,
        margin:10,
        flexDirection:'row',
    },
    image: {
        width:100,
        minHeight:100,
        resizeMode: 'contain',
        backgroundColor:'white',
    },
    body_container:{
        flex:1,
        padding:5,
        justifyContent:'space-between',
    },
    title:{
        fontWeight:'bold',
        fontSize:25,
    },
    price:{
        textAlign:'right',
        fontSize:16,
        fontStyle:'italic',
    },
    
});