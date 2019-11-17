import React, { Component } from '../../node_modules/react';
import { connect } from '../../node_modules/react-redux';
import { ImageBackground, ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Avatar, Icon, Text, ListItem} from 'react-native-ui-kitten';
import { Ionicons } from '@expo/vector-icons';
import {gaps, fonts, colors} from '../../ui/variables';

const StarIcon = (style) => (
    <Icon {...style} name='star'/>
);

class ReportsList extends Component {  
    render() {
        let renderAnimals = this.props.reports.map(item=>(
            <TouchableOpacity style={styles.item} key={item.id}> 
                <ImageBackground
                style={styles.image}
                imageStyle={styles.image}
                source={{uri: 'https://s1.1zoom.me/b5050/75/170810-aleni_1400x1050.jpg'}}
                />

                <View style={styles.infoContainer}>
                    <View style={styles.hashtags}>
                        {item.categories.map(category=>(<View key={category} style={styles.hashtag}><Text>{category}</Text></View>))}
                    </View>
                    <View style={styles.geo}>
                        <Icon width={26} height={26} fill={colors.grey} name='pin' style={styles.icon} />
                        <Text style={{color: colors.grey}}>Москва</Text>
                    </View>
                    <Text style={styles.titleLabel} >
                        {item.title}
                    </Text>
                    <Text style={styles.descriptionLabel}>
                        {item.description}
                    </Text>
                </View>
                <View style={styles.authorContainer}>
                    <Avatar source={{ uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330' }}/>
                    <View style={styles.authorName}>
                        <Text>Светлана Беловодская</Text>
                        <Text appearance="hint">Today: 1:25PM</Text>
                    </View>
                    <View style={styles.icons}>
                        <Ionicons name="md-thumbs-up" size={26} color={colors.green} />
                        <Text style={{color: colors.green}}>+10</Text>
                    </View>
                    <View style={styles.icons}>
                        <Ionicons name="ios-chatbubbles" size={26} color={colors.grey} />
                        <Text style={{color: colors.grey}}>5</Text>
                    </View>
                </View>
            </TouchableOpacity>
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
        paddingVertical: gaps.base4x,
    },

    item: {
        backgroundColor: 'white',
        borderRadius: gaps.base2x,
        marginBottom: gaps.base4x
    },

    infoContainer: {
        padding: gaps.base2x,
    },

    image: {
        height: 220,
        borderRadius: gaps.base 
    },

    titleLabel: {
        color: colors.black,
        fontSize: fonts.h3,
        lineHeight: fonts.h3*1.1,
        marginBottom: gaps.base,
        fontWeight: 'bold'
    },

    descriptionLabel: {
        color: colors.black,
        fontSize: fonts.body,
        lineHeight: fonts.body*1.2,
        paddingBottom: gaps.base
    },

    authorContainer: {
        borderTopColor: colors.lightGrey,
        borderTopWidth: 1,
        padding: gaps.base2x,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    authorName: {
        marginLeft: gaps.base2x,
        display: 'flex',
        flex: 1,
        alignSelf: 'flex-start',
    },

    icons: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: gaps.base
    },

    icon: {
        marginRight: gaps.base,
    },

    hashtags: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },

    hashtag: {
        borderRadius: gaps.base,
        backgroundColor: colors.secondary+'50',
        paddingVertical: gaps.min,
        paddingHorizontal: gaps.base,
        marginBottom: gaps.base,
        marginRight: gaps.base,
    },

    geo: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: gaps.base
    }


});


const mapStateToProps = state => {
    return {
      reports: state.root.reports
    }
  }
  
const mapDispatchToProps = dispatch => {
    return {
        onAddAnimal: (data) => dispatch(addAnimal(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReportsList);