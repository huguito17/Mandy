import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Liquors = ({name, description,}) => {
    return(
        <View style={styles.container}>
            <Text>Name: {name}</Text>
            <Text>Description: {description}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: "center",
        alignSelf: "center",
    }
});

export default Liquors;
