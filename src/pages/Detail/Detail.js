import React from 'react'
import { View, Image, Text } from 'react-native'
import styles from './DetailStyle';
import useFetch from '../../hooks/useFetch/useFetch';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';
import { API_URL } from '@env';


export default function Detail({ route }) {
    const { id } = route.params;
    const { data, loading, error } = useFetch(`${API_URL}/${id}`)


    if (loading) {
        return <Loading />
    }

    if (error || !data) {
        return <Error />
    }
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: data.image }} />
            <View style={styles.body_container} >
                <Text style={styles.title}>{data.title}</Text>
                <Text style={styles.description}>{data.description}</Text>
                <Text style={styles.price}>{data.price} TL</Text>
            </View>
        </View>
    )
}