import React from 'react'
import { View, FlatList } from 'react-native'
import styles from './ProductsStyle'
import { API_URL } from '@env';
import ProductCard from '../../components/ProductCard/ProductCard';
import useFetch from '../../hooks/useFetch/useFetch';
import Error from '../../components/Error/Error';
import Loading from '../../components/Loading/Loading';


function Products({ navigation }) {

    const { data, loading, error } = useFetch(API_URL)

    const handleProductSelect = id => {navigation.navigate('DetailPage', { id }) };

    const renderProduct = ({ item }) =>
        <ProductCard product={item} onSelect={() => handleProductSelect(item.id)} />


    if (loading) {
        return <Loading />
    }

    if (error) {
        return <Error />
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={renderProduct}
            />
        </View>
    )
}

export default Products;