import React from 'react';
import { connect } from 'react-redux';
import { ImageBackground, StyleSheet, View,  } from 'react-native';
import {
  Button,
  Layout,
  Text,
} from 'react-native-ui-kitten';
import HomeTopNavigation from '../components/HomeTopNavigation/HomeTopNavigation';
import { colors, fonts, gaps, layout, screen } from '../ui/variables';

function ActiveFundScreen(props) {
  let item = props.navigation.getParam('item');
  console.log(item)
  return (
    <Layout style={layout.container}>
      <HomeTopNavigation title={item.title} description='' />
        <View style={styles.item} key={item.id} onPress={()=>{this.openFund(item)}}> 
          <ImageBackground
            style={styles.image}
            imageStyle={styles.image}
            source={{uri: item.image}}
          />
          <View style={styles.itemContent}>
              <View style={styles.infoContainer}>
                  <Text style={styles.titleLabel}>
                      {item.title}
                  </Text>
                  <View style={styles.hashtags}>
                      {item.categories.map(category=>(<View key={category} style={styles.hashtag}><Text>{category}</Text></View>))}
                  </View>
              </View>
          </View>

          <View style={styles.textContainer}>
              <Text style={styles.descriptionLabel}>
                  {item.description}
              </Text>
              <Button>Send message</Button>
          </View>


          
      </View>
    </Layout>
  );
}

ActiveFundScreen.navigationOptions = {
  header: null,
};


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
      backgroundColor: 'white',
      borderRadius: gaps.base2x,
      marginBottom: gaps.base2x,
  },

  itemContent: {
      padding: gaps.base2x
  },

  image: {
      width: '80%',
      height: 200,
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
      borderRadius: gaps.min,
      backgroundColor: colors.secondary+'50',
      paddingVertical: gaps.min/2,
      paddingHorizontal: gaps.base,
      marginBottom: gaps.min,
      marginRight: gaps.min,
      fontSize: fonts.small
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