import { StyleSheet, Text, View, Image } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/img/flower.jpg')}/>
      <Text style={styles.title}>Bem-vindo(a) ao nosso site!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: "#00008b",
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 300,
    height: 250,
    borderRadius: 20,
  },
  title: {
    color: "white"
  }
});
