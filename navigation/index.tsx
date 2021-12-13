import React, {useState} from 'react';
import {
  // Pressable,
  StyleSheet,
  View,
} from 'react-native';
import {Camera} from '../components/camera';

const App = () => {
  //   const camera = useRef<RNCamera | null>(null);
  const [img, setImg] = useState<string>();
  const onCapture = async (camera: {
    current: {
      takePictureAsync: (arg0: {quality: number; base64: boolean}) => any;
    };
  }) => {
    const options = {quality: 0.5, base64: true};
    const data = await camera.current.takePictureAsync(options);
    console.log(data.uri);
    setImg(data.uri);
    nav.navigate(Routes.selectImage);
  };

  // const extractedUri = useRef(
  //   'https://www.hyundai.com/content/hyundai/ww/data/news/data/2021/0000016609/image/newsroom-0112-photo-1-2021elantranline-1120x745.jpg',
  // );

  return (
    <View style={styles.container}>
      <View style={{height: 300}}>
        <Camera takePicture={(camera: any) => onCapture(camera)} />
      </View>
    </View>
  );
};

export {App};

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
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
  images: {
    width: 80,
    height: 100,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  image: {
    width: 520,
    height: 520,
    marginVertical: 10,
    alignSelf: 'center',
  },
  filterSelector: {
    width: 100,
    height: 100,
    margin: 5,
  },
  filterTitle: {
    fontSize: 12,
    textAlign: 'center',
  },
});
