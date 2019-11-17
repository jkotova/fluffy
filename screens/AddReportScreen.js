import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import {
  Layout,
  Text,
  Input,
  Select,
} from 'react-native-ui-kitten';
import { gaps, fonts, colors } from '../ui/variables';
import { connect } from 'react-redux';
import MapView, { Marker } from 'react-native-maps';

class AddReportScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      selectedOption: [],
      marker: {
        coordinate: {
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        },
        title: 'title',
        description: 'description'
      }
    }
  }

  onChangeText = (key, value) => {
    this.setState({ [key]: value });
  };

  onSelect = (selectedOption) => {
    this.setState({ selectedOption });
  };

  _handleMapRegionChange = mapRegion => {
    this.setState({ mapRegion });
  };

  onRegionChange = (region) => {
    this.setState({ region });
  }

  getInitialState() {
    return {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    };
  }

  render() {
    console.log('this.state.region: ', this.state.region);

    return (
      <Layout style={styles.container}>
        <Input
          style={styles.input}
          label="Название репорта"
          value={this.state.name}
          onChangeText={(val) => this.onChangeText('name', val)}
          placeholder='Отрезают рог у носорога!'
        />
        <Input
          label="Описание"
          style={styles.input}
          value={this.state.description}
          onChangeText={(val) => this.onChangeText('description', val)}
          multiline
          numberOfLines={3}
          placeholder='ПАМАГИТЕЕЕ!'
        />
        <Select
          label="Теги"
          labelStyle={styles.labelStyle}
          placeholderStyle={styles.labelStyle}
          style={styles.input}
          data={this.props.categories}
          multiSelect={true}
          selectedOption={this.state.selectedOption}
          onSelect={this.onSelect}
        />
        <MapView
          style={styles.mapStyle}
          initialRegion={this.getInitialState()}
          onPress={(e) => this.setState({
            marker: {
              ...this.state.marker,
              coordinate: e.nativeEvent.coordinate
            }
          })}
        >
          <Marker
            draggable
            coordinate={this.state.marker.coordinate}
            title={this.state.marker.title}
            description={this.state.marker.description}
          />
        </MapView>
      </Layout>
    );
  }
}

AddReportScreen.navigationOptions = {
  header: null,
};


const styles = StyleSheet.create({
  container: {
    paddingHorizontal: gaps.base2x,
    paddingVertical: gaps.base4x,
  },
  pageTitle: {
    marginBottom: gaps.base4x,
  },
  input: {
    marginBottom: gaps.base2x
  },
  mapStyle: {
    width: '100%',
    height: 200
  },
});


const mapStateToProps = state => {
  return {
    categories: state.root.categories
  }
}

export default connect(mapStateToProps)(AddReportScreen);
