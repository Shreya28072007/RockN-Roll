import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';

export default class GoButton extends React.Component {
 constructor(props){ 
    super(props);
    this.state = {
      pressedButtonIndex : "",
      playBackObj : null,
      soundObj : null,
      currentAudio : {},
      }
 }
   playSound = async (audio ) => {

// playing audio for the first time
    if(this.state.soundObj === null){
   
    const playBackObj = new Audio.Sound();
    const status = await playBackObj.loadAsync({ uri : audio}, {shouldPlay : true})

  return this.setState({
    ...this.state,
    currentAudio : audio,
   playBackObj : playBackObj,
    soundObj : status})

    }
   // pause audio
   if(this.state.soundObj.isLoaded && this.state.soundObj.isPlaying){
    const status = await this.state.playBackObj.setStatusAsync({shouldPlay : false});
      return this.setState({...this.state, soundObj : status})
   }}
  render() {
    return (
      <TouchableOpacity
        style={
          this.props.buttonIndex === this.state.pressedButtonIndex
          ?[styles.chunkButton,{backgroundColor:"white"}]
          :[styles.chunkButton,{backgroundColor:"#b161cf"}]
        }

        onPress={() => {
          this.setState({pressedButtonIndex : this.props.buttonIndex})
          this.playSound(this.props.soundChunk);
        }}>
        <Text style={
          this.props.buttonIndex === this.state.pressedButtonIndex
          ?[styles.displayText,{color:"#3e2347"}]
          :[styles.displayText,{color:"white"}]
        }>{this.props.wordChunk}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  displayText: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white'
  },
  chunkButton:{
    width: '60%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    margin: 5,
    backgroundColor: 'red'
  }
});