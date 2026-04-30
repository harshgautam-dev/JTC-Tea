import React from 'react'
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const { width } = Dimensions.get('window')
const CARD_WIDTH = (width - 30) / 2

// DATA
const products = [
  {
    id: '1',
    title: 'Blending Variant',
    price: 120,
    originalPrice: 141,
    discount: 15,
    weight: '0.25 kg',
    image: 'https://api.jtcchai.com/api/images/B.png'
  },
  {
    id: '2',
    title: 'Blending Variant',
    price: 220,
    originalPrice: 259,
    discount: 15,
    weight: '0.5 kg',
    image: 'https://api.jtcchai.com/api/images/B.png'
  },
  {
    id: '3',
    title: 'Blending Variant',
    price: 400,
    originalPrice: 471,
    discount: 15,
    weight: '1 kg',
    image: 'https://api.jtcchai.com/api/images/B.png'
  },
  {
    id: '4',
    title: 'Blending Variant',
    price: 1800,
    originalPrice: 2118,
    discount: 15,
    weight: '5 kg',
    image: 'https://api.jtcchai.com/api/images/B.png'
  },{
    id: '5',
    title: 'Blending Variant',
    price: 3400,
    originalPrice: 4000,
    discount: 15,
    weight: '10 kg',
    image: 'https://api.jtcchai.com/api/images/B.png'
  },{
    id: '6',
    title: 'Haryana Special',
    price: 150,
    originalPrice: 176,
    discount: 15,
    weight: '0.25 kg',
    image: 'https://api.jtcchai.com/api/images/HS.png'
  },{
    id: '7',
    title: 'Haryana Special',
    price: 280,
    originalPrice: 329,
    discount: 15,
    weight: '0.5 kg',
    image: 'https://api.jtcchai.com/api/images/HS.png'
  },{
    id: '8',
    title: 'Haryana Special',
    price: 520,
    originalPrice: 612,
    discount: 15,
    weight: '1 kg',
    image: 'https://api.jtcchai.com/api/images/HS.png'
  },{
    id: '9',
    title: 'Haryana Special',
    price: 2400,
    originalPrice: 2824,
    discount: 15,
    weight: '5 kg',
    image: 'https://api.jtcchai.com/api/images/HS.png'
  },{
    id: '10',
    title: 'Haryana Special',
    price: 4600,
    originalPrice: 5412,
    discount: 15,
    weight: '10 kg',
    image: 'https://api.jtcchai.com/api/images/HS.png'
  },{
    id: '11',
    title: 'Small Double Plus High Quality',
    price: 100,
    originalPrice: 118,
    discount: 15,
    weight: '0.25 kg',
    image: 'https://api.jtcchai.com/api/images/S%2B%2BH.png'
  },{
    id: '12',
    title: 'Small Double Plus High Quality',
    price: 190,
    originalPrice: 224,
    discount: 15,
    weight: '0.5 kg',
    image: 'https://api.jtcchai.com/api/images/S%2B%2BH.png'
  },{
    id: '13',
    title: 'Small Double Plus High Quality',
    price: 360,
    originalPrice: 424,
    discount: 15,
    weight: '1 kg',
    image: 'https://api.jtcchai.com/api/images/S%2B%2BH.png'
  },
  {
    id: '14',
    title: 'Small Double Plus High Quality',
    price: 1700,
    originalPrice: 2000,
    discount: 15,
    weight: '5 kg',
    image: 'https://api.jtcchai.com/api/images/S%2B%2BH.png'
  },
  {
    id: '15',
    title: 'Small Double Plus High Quality',
    price: 3200,
    originalPrice: 3765,
    discount: 15,
    weight: '10 kg',
    image: 'https://api.jtcchai.com/api/images/S%2B%2BH.png'
  },
  {
    id: '16',
    title: 'Gold Plus Orthodox Darjeeling',
    price: 180,
    originalPrice: 212,
    discount: 15,
    weight: '0.25 kg',
    image: 'https://api.jtcchai.com/api/images/G%2BOD.png'
  },
  {
    id: '17',
    title: 'Gold Plus Orthodox Darjeeling',
    price: 340,
    originalPrice: 400,
    discount: 15,
    weight: '0.5 kg',
    image: 'https://api.jtcchai.com/api/images/G%2BOD.png'
  },
  {
    id: '18',
    title: 'Gold Plus Orthodox Darjeeling',
    price: 650,
    originalPrice: 765,
    discount: 15,
    weight: '1 kg',
    image: 'https://api.jtcchai.com/api/images/G%2BOD.png'
  },
  {
    id: '19',
    title: 'Gold Plus Orthodox Darjeeling',
    price: 3000,
    originalPrice: 3529,
    discount: 15,
    weight: '5 kg',
    image: 'https://api.jtcchai.com/api/images/G%2BOD.png'
  },
  {
    id: '20',
    title: 'Gold Plus Orthodox Darjeeling',
    price: 5800,
    originalPrice: 6824,
    discount: 15,
    weight: '10 kg',
    image: 'https://api.jtcchai.com/api/images/G%2BOD.png'
  },
  {
    id: '21',
    title: 'Test Chai',
    price: 150,
    originalPrice: 176,
    discount: 15,
    weight: '1000 kg',
    image: 'https://api.jtcchai.com/api/images/B.png'
  }
]

//  Reusable Card
const ProductCard = ({ item }: any) => {
  return (
    <View style={styles.card}>
      
      {/* Discount badge (only if exists) */}
      {item.discount && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{item.discount}% OFF</Text>
        </View>
      )}

      <Image source={{ uri: item.image }} style={styles.image} />

      <Text style={styles.name} numberOfLines={1}>
        {item.title}
      </Text>

      <Text style={styles.weight}>{item.weight}</Text>

      <View style={styles.bottomRow}>
        <View>
          <Text style={styles.price}>₹{item.price}</Text>

          {item.originalPrice && (
            <Text style={styles.strike}>
              ₹{item.originalPrice}
            </Text>
          )}
        </View>

        <TouchableOpacity style={styles.addBtn}>
          <Text style={styles.addText}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default function jtcchai() {
    return (
      <SafeAreaView style={styles.screen}>
        
        <Text style={styles.title}>Our Collections</Text>
        <Text style={styles.description}>Discover premium masala chai, green tea, black tea & herbal blends
             -delivered across Uttar Pradesh and India.</Text>
  
        <FlatList
          data={products}
          keyExtractor={(item) => item.id}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.container}
          renderItem={({ item }) => <ProductCard item={item} />}
        />
  
      </SafeAreaView>
    )
  }

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  },

  container: {
    padding: 10
  },

  card: {
    width: CARD_WIDTH,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 10,
    margin: 5,
    elevation: 3
  },

  image: {
    width: '100%',
    height: 110,
    resizeMode: 'contain'
  },

  screen: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  },
  
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,     
    marginLeft: 12,
    marginBottom: 5
  },

  description: {
    fontSize: 15,
    marginTop: 5,
    marginLeft: 12,
    marginBottom: 5
  },
  
  container: {
    paddingHorizontal: 10,
    paddingBottom: 10
  },

  name: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: 6
  },

  weight: {
    fontSize: 12,
    color: '#777'
  },

  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8
  },

  price: {
    fontSize: 15,
    fontWeight: 'bold'
  },

  strike: {
    fontSize: 11,
    color: '#999',
    textDecorationLine: 'line-through'
  },

  addBtn: {
    backgroundColor: '#0C8F4F',
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 6
  },

  addText: {
    color: '#fff',
    fontSize: 12
  },

  badge: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: '#e53935',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    zIndex: 1
  },

  badgeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold'
  }
})