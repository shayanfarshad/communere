import {useMemo, useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  AdenCompat,
  _1977Compat,
  BrannanCompat,
  BrooklynCompat,
  ClarendonCompat,
  EarlybirdCompat,
  GinghamCompat,
  HudsonCompat,
  InkwellCompat,
  KelvinCompat,
  LarkCompat,
  LofiCompat,
  MavenCompat,
  MayfairCompat,
  MoonCompat,
  NashvilleCompat,
  PerpetuaCompat,
  ReyesCompat,
  RiseCompat,
  SlumberCompat,
  StinsonCompat,
  ToasterCompat,
  ValenciaCompat,
  WaldenCompat,
  WillowCompat,
  Xpro2Compat,
} from 'react-native-image-filter-kit';

const SelectImage = ({img}: any) => {
  const Filters = useMemo(
    () => [
      {
        title: 'Normal',
        filterComponent: AdenCompat,
      },
      {
        title: 'Maven',
        filterComponent: MavenCompat,
      },
      {
        title: 'Mayfair',
        filterComponent: MayfairCompat,
      },
      {
        title: 'Moon',
        filterComponent: MoonCompat,
      },
      {
        title: 'Nashville',
        filterComponent: NashvilleCompat,
      },
      {
        title: 'Perpetua',
        filterComponent: PerpetuaCompat,
      },
      {
        title: 'Reyes',
        filterComponent: ReyesCompat,
      },
      {
        title: 'Rise',
        filterComponent: RiseCompat,
      },
      {
        title: 'Slumber',
        filterComponent: SlumberCompat,
      },
      {
        title: 'Stinson',
        filterComponent: StinsonCompat,
      },
      {
        title: 'Brooklyn',
        filterComponent: BrooklynCompat,
      },
      {
        title: 'Earlybird',
        filterComponent: EarlybirdCompat,
      },
      {
        title: 'Clarendon',
        filterComponent: ClarendonCompat,
      },
      {
        title: 'Gingham',
        filterComponent: GinghamCompat,
      },
      {
        title: 'Hudson',
        filterComponent: HudsonCompat,
      },
      {
        title: 'Inkwell',
        filterComponent: InkwellCompat,
      },
      {
        title: 'Kelvin',
        filterComponent: KelvinCompat,
      },
      {
        title: 'Lark',
        filterComponent: LarkCompat,
      },
      {
        title: 'Lofi',
        filterComponent: LofiCompat,
      },
      {
        title: 'Toaster',
        filterComponent: ToasterCompat,
      },
      {
        title: 'Valencia',
        filterComponent: ValenciaCompat,
      },
      {
        title: 'Walden',
        filterComponent: WaldenCompat,
      },
      {
        title: 'Willow',
        filterComponent: WillowCompat,
      },
      {
        title: 'Xpro2',
        filterComponent: Xpro2Compat,
      },
      {
        title: 'Aden',
        filterComponent: AdenCompat,
      },
      {
        title: '_1977',
        filterComponent: _1977Compat,
      },
      {
        title: 'Brannan',
        filterComponent: BrannanCompat,
      },
    ],
    [],
  );

  const [selectedFilterIndex, setIndex] = useState(0);
  const onExtractImage = ({nativeEvent}: any) => {
    setImg(nativeEvent.uri);
  };
  const onSelectFilter = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };
  const renderFilterComponent = ({item, index}) => {
    const FilterComponent = item.filterComponent;
    const image = (
      <Image
        style={styles.filterSelector}
        source={{uri: img}}
        resizeMode={'contain'}
      />
    );
    return (
      <TouchableOpacity onPress={() => onSelectFilter(index)}>
        <Text style={styles.filterTitle}>{item.title}</Text>
        <FilterComponent image={image} />
      </TouchableOpacity>
    );
  };
  const SelectedFilterComponent = Filters[selectedFilterIndex].filterComponent;
  return (
    <View>
      {selectedFilterIndex === 0 ? (
        <Image
          style={styles.image}
          source={{uri: img}}
          resizeMode={'contain'}
        />
      ) : (
        <SelectedFilterComponent
          onExtractImage={onExtractImage}
          extractImageEnabled={true}
          image={
            <Image
              style={styles.image}
              source={{uri: img}}
              resizeMode={'contain'}
            />
          }
        />
      )}
      <FlatList
        data={Filters}
        keyExtractor={item => item.title}
        horizontal={true}
        renderItem={renderFilterComponent}
      />
    </View>
  );
};

export {SelectImage};

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
