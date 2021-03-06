import React, { Component } from '../../node_modules/react';
import { connect } from '../../node_modules/react-redux';
import { ImageBackground, ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Avatar, Icon, Text, ListItem} from 'react-native-ui-kitten';
import { Ionicons } from '@expo/vector-icons';
import {gaps, fonts, colors, layout} from '../../ui/variables';

const StarIcon = (style) => (
    <Icon {...style} name='star'/>
);

class ReportsList extends Component {  
    render() {
        let renderAnimals = this.props.reports.map(item=>{
            let renderBottom = (this.props.my) ? (
                <View style={styles.bottomContainer}>
                    <View key={item.id} style={[layout.hashtag,
                    {
                        paddingHorizontal: gaps.base2x,
                        paddingVertical: gaps.base,
                        backgroundColor: (item.status == 'solved') ? colors.green+'50' : (item.status == 'rejected') ? colors.red+'50' : colors.yellow+'50'
                    }]}><Text style={{
                        fontWeight: 'bold',
                        textTransform: 'uppercase',
                        color: (item.status == 'solved') ? colors.green : (item.status == 'rejected') ? colors.red : colors.yellow
                        }}>{item.status}</Text></View>
                </View>
            ) : (
                <View style={styles.bottomContainer}>
                    <Avatar source={{ uri: item.userPhoto }}/>
                    <View style={styles.authorName}>
                        <Text>{item.userName}</Text>
                        <Text appearance="hint">Today: 1:25PM</Text>
                    </View>
                </View>
            )
            return (
            <View style={styles.item} key={item.id}> 
                <ImageBackground
                style={styles.image}
                imageStyle={styles.image}
                source={{uri: item.photos[0]}}
                />

                <View style={styles.infoContainer}>
                    <View style={layout.hashtags}>
                        {item.categories.map(category=>(<View key={category} style={layout.hashtag}><Text style={layout.hashtagText}>{category}</Text></View>))}
                    </View>
                    <View style={styles.geo}>
                        <Icon width={18} height={18} fill={colors.grey} name='pin' style={styles.icon} />
                        <Text style={{color: colors.grey}}>{item.geometry.address}</Text>
                    </View>
                    <Text style={styles.titleLabel} >
                        {item.title}
                    </Text>
                    <Text style={styles.descriptionLabel}>
                        {item.description}
                    </Text>
                </View>
                <View style={styles.authorContainer}>
                    {renderBottom}
                    <View style={styles.icons}>
                        <Ionicons name="md-thumbs-up" size={26} color={colors.green+'95'} />
                        <Text style={{color: colors.green}}>+10</Text>
                    </View>
                    <View style={styles.icons}>
                        <Ionicons name="ios-chatbubbles" size={26} color={colors.grey+'95'} />
                        <Text style={{color: colors.grey}}>5</Text>
                    </View>
                </View>
            </View>
        )})
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
        paddingVertical: gaps.base2x,
    },

    item: {
        backgroundColor: 'white',
        borderRadius: gaps.base2x,
        marginBottom: gaps.base2x
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

    geo: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: gaps.base
    },

    bottomContainer: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
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