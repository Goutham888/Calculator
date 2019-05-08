import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';
import { Constants } from 'expo';

export default class App extends Component {
  state={
    displayNum: 0,
  }

  displayUpdate = () => {
        this.setState({ 
           displayNum: 6,
        })
        
    }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.numberViewer}>
          <Text style={styles.display}>
            {this.state.displayNum}
          </Text>
        </View>
        <View style={styles.buttons}>
          <View style={styles.numberpad}>
            <View style={styles.seven89}>
              <TouchableHighlight
                style={styles.seven}
                onPress={this.displayUpdate}>
                <Text style={styles.buttonText}>7</Text>
              </TouchableHighlight>

              <TouchableHighlight
                style={styles.eight}
                onPress={this.teamOneFieldGoal}>
                <Text style={styles.buttonText}>8</Text>
              </TouchableHighlight>

              <TouchableHighlight
                style={styles.nine}
                onPress={this.teamOneFieldGoal}>
                <Text style={styles.buttonText}>9</Text>
              </TouchableHighlight>
            </View>

            <View style={styles.four56}>
              <TouchableHighlight
                style={styles.four}
                onPress={this.teamOneTouchdown}>
                <Text style={styles.buttonText}>4</Text>
              </TouchableHighlight>

              <TouchableHighlight
                style={styles.five}
                onPress={this.teamOneFieldGoal}>
                <Text style={styles.buttonText}>5</Text>
              </TouchableHighlight>

              <TouchableHighlight
                style={styles.six}
                onPress={this.teamOneFieldGoal}>
                <Text style={styles.buttonText}>6</Text>
              </TouchableHighlight>
            </View>

            <View style={styles.one23}>
              <TouchableHighlight
                style={styles.one}
                onPress={this.teamOneTouchdown}>
                <Text style={styles.buttonText}>1</Text>
              </TouchableHighlight>

              <TouchableHighlight
                style={styles.two}
                onPress={this.teamOneFieldGoal}>
                <Text style={styles.buttonText}>2</Text>
              </TouchableHighlight>

              <TouchableHighlight
                style={styles.three}
                onPress={this.teamOneFieldGoal}>
                <Text style={styles.buttonText}>3</Text>
              </TouchableHighlight>
            </View>

            <View style={styles.zeroPeriod}>
              <TouchableHighlight
                style={styles.zero}
                onPress={this.teamOneTouchdown}>
                <Text style={styles.buttonText}>0</Text>
              </TouchableHighlight>

              <TouchableHighlight
                style={styles.period}
                onPress={this.teamOneFieldGoal}>
                <Text style={styles.buttonText}>.</Text>
              </TouchableHighlight>
            </View>
          </View>
          <View style={styles.operators}>
            <TouchableHighlight
              style={styles.plus}
              onPress={this.teamOneTouchdown}>
              <Text style={styles.buttonText}>+</Text>
            </TouchableHighlight>

            <TouchableHighlight
              style={styles.minus}
              onPress={this.teamOneFieldGoal}>
              <Text style={styles.buttonText}>-</Text>
            </TouchableHighlight>

            <TouchableHighlight
              style={styles.div}
              onPress={this.teamOneFieldGoal}>
              <Text style={styles.buttonText}>/</Text>
            </TouchableHighlight>

            <TouchableHighlight
              style={styles.mult}
              onPress={this.teamOneFieldGoal}>
              <Text style={styles.buttonText}>x</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  numberViewer: {
    flex: 0.2,
    backgroundColor: 'red',
    justifyContent: 'flex-end',
  },
  display:{
    flex: 0.8,
    color: 'white',
    fontSize: 60,
    textAlign: 'right',
  },
  buttons: {
    flex: 0.8,
    backgroundColor: 'blue',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  operators: {
    flex: 0.1,
    backgroundColor: 'blue',
    justifyContent: 'space-around',
  },
  numberpad: {
    flex: 0.7,
    backgroundColor: 'blue',
    justifyContent: 'space-around',
  },
  seven89: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  four56: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  one23: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  zeroPeriod: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
