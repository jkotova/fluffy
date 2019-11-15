import React, { Component } from '../../node_modules/react';
import { connect } from '../../node_modules/react-redux';
import { Text, ScrollView, StyleSheet, View} from 'react-native';
import { Icon, ListItem} from 'react-native-ui-kitten';
import {gaps, fonts, colors} from '../../ui/variables';

const StarIcon = (style) => (
    <Icon {...style} name='star'/>
);

class AnimalsList extends Component {  

    render() {
        let renderAnimals = this.props.animals.map(item=>(
            <ListItem
                key = {item}
                title={item}
                description='Description'
                icon={StarIcon}
            />
        ))
        return (
            <View>
                <ScrollView contentContainerStyle={styles.container}>
                    {renderAnimals}
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: gaps.base2x,
        paddingVertical: gaps.base4x
    },

    text: {

        color: colors.primary,
        fontSize: fonts.body
    }
});


const mapStateToProps = state => {
    console.log(state);
    return {
      animals: state.root.animals,
     // langs: state.places.langs
    }
  }
  
const mapDispatchToProps = dispatch => {
    return {
        onAddAnimal: (data) => dispatch(addAnimal(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnimalsList);