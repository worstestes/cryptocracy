import React from 'react';
import { View, Image } from 'react-native';

const BackgroundImage = (props) => {

  const { container, image } = styles;


  return (

    <View style={container}>
      <Image
      style={[image, 
        { resizeMode: props.resizeMode,    
        opacity: props.opacity}
      ]}  
      source={props.source}
      />
    </View>

  )
};

const styles = {
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    flex: 1,   
    width: '100%',
  },
  image: {  
    flex: 1,
  }
};

export default BackgroundImage;