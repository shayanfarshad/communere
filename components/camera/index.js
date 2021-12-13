import React, {useRef} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {RNCamera} from 'react-native-camera';

const Camera = ({takePicture}) => {
  const camera = useRef();
  // const takePicture = async () => {
  //   const options = { quality: 0.5, base64: true };
  //   const data = await camera.current.takePictureAsync(options);
  //   console.log(data.uri);
  // };
  return (
    <View style={styles.container}>
      <RNCamera
        ref={camera}
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.on}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        captureAudio={false}
      />
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <TouchableOpacity
          onPress={() => takePicture(camera)}
          style={styles.capture}>
          <Text style={{fontSize: 14}}> SNAP </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export {Camera};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});
