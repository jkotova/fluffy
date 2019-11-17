import React from 'react';
import { connect } from 'react-redux';
import { Image, Linking, ScrollView, StyleSheet, View} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Button, Layout, Text} from 'react-native-ui-kitten';
import HomeTopNavigation from '../components/HomeTopNavigation/HomeTopNavigation';
import { colors, fonts, gaps, layout, screen } from '../ui/variables';
import { TouchableOpacity } from 'react-native-gesture-handler';

function ActiveFundScreen(props) {
  let item = props.navigation.getParam('item');

  let handlePress = link => {
      if(link != null) {
          Linking.openURL(link);
      }
  };
  return (
    <Layout style={layout.container}>
      <HomeTopNavigation 
        title={item.title} 
        description='' 
        navigation={props.navigation} 
        back={true}
      />
      <ScrollView style={styles.item} key={item.id} onPress={()=>{this.openFund(item)}}> 

        <View style={styles.itemContent}>
            <Image
              resizeMode = 'contain'
              style={styles.image}
              imageStyle={styles.image}
              source={{uri: item.image}}
            />
            <View style={styles.infoContainer}>
                <Text style={styles.titleLabel}>
                    {item.title}
                </Text>
                <Text appearance='hint' style={styles.typeLabel}>
                    {item.type}
                </Text>
                <View style={layout.hashtags}>
                    {item.categories.map(category=>(<View key={category} style={layout.hashtag}><Text style={layout.hashtagText}>{category}</Text></View>))}
                </View>
            </View>
        </View>

        <View style={styles.textContainer}>
            <Text style={styles.descriptionLabel}>
                {item.description}
            </Text>
            <Text style={styles.linkLabel} onPress={()=>{handlePress(item.link)}}>
                {item.link}
            </Text>
            <Button style={styles.button}>SEND MESSAGE</Button>
        </View>


        <Text style={styles.barTitle}>
              Problems solved
        </Text>
        <View style={styles.barContainer}>
            <Text style={styles.barLabel}>15/25</Text>
            <View style={styles.bar}>
              <LinearGradient
                start={[0, 1]} 
                end={[1, 0]}
                colors={['#e3e116', '#56bb1f']}
                style={{ padding: 15, alignItems: 'center', borderRadius: 5, width: '75%' }}>
              </LinearGradient>
            </View>
        </View>


        <Text style={styles.barTitle}>
            Activity rating
        </Text>

        <View style={styles.barContainer}>
            <Text style={styles.barLabel}>5/25</Text>
            <View style={styles.bar}>
              <LinearGradient
                start={[0, 1]} 
                end={[1, 0]}
                colors={['#a31c0d', '#d35117']}
                style={{ padding: 15, alignItems: 'center', borderRadius: 5, width: '25%' }}>
              </LinearGradient>
            </View>
        </View>


        <Text style={styles.barTitle}>
            Rating
        </Text>
        <View style={styles.barContainer}>
            <Text style={styles.barLabel}>3/5</Text>
            <View style={styles.bar}>
              <LinearGradient
                start={[0, 1]} 
                end={[1, 0]}
                colors={['#e3e116', '#56bb1f']}
                style={{ padding: 15, alignItems: 'center', borderRadius: 5, width: '60%' }}>
              </LinearGradient>
            </View>
        </View>
      </ScrollView>
    </Layout>
  );
}

ActiveFundScreen.navigationOptions = {
  header: null,
};


const styles = StyleSheet.create({
  item: {
      backgroundColor: 'white',
      paddingBottom: gaps.base7x
  },

  itemContent: {
      padding: gaps.base2x,
      display: 'flex',
      flexDirection: 'row'
  },

  image: {
      width: 150,
      marginRight: gaps.base2x,
      borderRadius: gaps.base 
  },

  infoContainer: {
      width: screen.width - 200 

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

  geo: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: gaps.base
  },

  textContainer: {
      paddingHorizontal: gaps.base2x,
      paddingBottom: gaps.base2x
  },

  barContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: gaps.base2x,
    marginBottom: gaps.base2x
  },

  barLabel: {
    fontSize: fonts.h2,
    lineHeight: fonts.h2*1.2,
    fontWeight: 'bold',
    marginRight: gaps.base2x,
    width: 70,
  },

  bar: {
    backgroundColor: colors.grey+'50',
    flex: 1,
    borderRadius: gaps.min
  },

  barTitle: {
    fontWeight: 'bold',
    marginBottom: gaps.min,
    paddingHorizontal: gaps.base2x
  },

  typeLabel: {
    fontSize: fonts.small,
    marginBottom: gaps.base2x
  },

  button: {
    marginVertical: gaps.base2x
  },

  linkLabel: {
    color: colors.info
  }
});


const mapStateToProps = state => {
  return {
    funds: state.root.funds
  }
}

const mapDispatchToProps = dispatch => {
  return {
      onAddAnimal: (data) => dispatch(addAnimal(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActiveFundScreen);