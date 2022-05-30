import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  ImageBackground
} from 'react-native';
import { Header } from 'react-native-elements';
import db from '../localDb';
import GoButton from '../components/goButton'
import { Audio } from 'expo-av';



export default class SearchScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      name:[],
      link:[]
    };
  }

   displayImage = () => {
  <Image
  source = {require("../assets/dance-boy.gif")}/>
}
  stopButton(){
     <TouchableOpacity
            style = {styles.stopButton} 
            onPress={()=>{
              Audio.setIsEnabledAsync(false);
            }}
            >
    <Text> Stop Button</Text>
    </TouchableOpacity>
  }
  render() {
    return (
      <View style={styles.container}>
  
       <Header
  statusBarProps={{ barStyle: 'light-content' }}
  barStyle="light-content" // or directly
 // leftComponent={<MyCustomLeftComponent />}
  centerComponent={{ text: 'Rock N Roll', style: { color: '#fff' , fontFamily : 'Cochin' , fontWeight : 'bold' , fontSize : 30} }}
  containerStyle={{
    backgroundColor: '#552f63',
    justifyContent: 'space-around',
    borderRadius : 30
  }}
/>
         <Image
          style={styles.imageIcon}
          source={require('../assets/hp.png')}
        />

        <View style={styles.container}>
          <Text style={styles.text}>Search for your favourite song here!:</Text>
          <TextInput
            style={styles.inputBox}
            onChangeText={(text) => {
              this.setState({ text: text });
              
            }}
            value={this.state.text}
            placeholder={"Search for the song"}
          />
          <TouchableOpacity style={styles.goButton} onPress={() => {
            var word = this.state.text.toLowerCase().trim()
            db[word]?(
              this.setState({ name: db[word].name }),
            this.setState({ link: db[word].link }),
            this.displayImage()
            )
           :
            alert("This word doesn't exist in our database")
           
          }}>
          
          <Text style={styles.goText}> Search</Text>
          </TouchableOpacity>
        </View>
          <View>
          {this.state.name.map((item, index) => {
            return (
              <GoButton
                wordChunk={this.state.name[index]}
                soundChunk={this.state.link[index]}
                buttonIndex = {index}
              />
            );
          })}
        </View>
         <TouchableOpacity
            style = {styles.stopButton} 
            onPress={()=>{
              Audio.setIsEnabledAsync(false);
            }}
            >
   <Image source={require("../assets/stop.png")}
   style={styles.stopButtonimage}/>
    </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c09fcc',
  },
  inputBox: {
    marginTop: 10,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },
  text: {
    marginTop: 40,
    fontSize: 20,
    marginLeft : 20,
    color: '#552f63',
    fontFamily : 'Cochin',
    
  },
  imageIcon: {
    width: 150,
    height: 150,
    marginLeft: 120,
  },
  bgImage: {
     flex: 1,
     resizeMode: 'cover', 
     justifyContent: 'center'
  },
      goButton: {
    width:100,
    height:50,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems:"center",
    justifyContent:"center",
    marginTop:20,
    marginLeft:150,

  
   
  },
 goText:{ 
    fontFamily: 'Trebuchet MS', 
    fontSize: 20 
    },

     stopButton :{
    width: '50%',
    height: 40,
    justifyContent:'center',
    alignItems:'center',
    borderRadius : 30,
    backgroundColor : '#c09fcc',
    borderWidth:2,
    borderColor : '#c09fcc',
    marginLeft:100,
    marginBottom : 90
  },
  stopButtonimage : {
    height : 50,
    width : 70,
    position: 'absolute',
    resizeMode : 'contain'
  },
  searchButtonimage : {
     height : 90,
    width : 80,
    position: 'absolute',
    resizeMode : 'contain'
  }
});
