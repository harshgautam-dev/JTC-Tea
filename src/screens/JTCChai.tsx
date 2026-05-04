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
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../features/cart/cartSlice'
import { useNavigation } from '@react-navigation/native'
import 'react-native-gesture-handler'
const { width } = Dimensions.get('window')
const CARD_WIDTH = (width - 30) / 2

// Reusable Card
const ProductCard = ({ item }: any) => {
  const dispatch = useDispatch()

  return (
    <View style={styles.card}>
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
            <Text style={styles.strike}>₹{item.originalPrice}</Text>
          )}
        </View>

        <TouchableOpacity
          style={styles.addBtn}
          onPress={() => dispatch(addToCart(item))}
        >
          <Text style={styles.addText}>Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default function JTCChai() {
  const products = useSelector((state: any) => state.products.products)
  const cart = useSelector((state: any) => state.cart.items)

  const navigation = useNavigation<any>()

  // total quantity 
  const totalItems = cart.reduce(
    (sum: number, item: any) => sum + item.quantity,
    0
  )

  return (
    <SafeAreaView 
      edges = {['left', 'right', 'bottom']}
      style={styles.screen}>
      {/* Title */}
      <Text style={styles.title}>Our Collections</Text>
      <Text style={styles.description}>
        Discover premium masala chai, green tea, black tea & herbal blends
      </Text>

      <Text style={{ marginLeft: 12 }}>
        Items in cart: {totalItems}
      </Text>

      {/* Product List */}
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ 
          paddingBottom: 60,
          paddingTop: 0
         }}
        renderItem={({ item }) => <ProductCard item={item} />}
      />

      {/*FOOTER CART BUTTON */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.cartButton}
          onPress={() => navigation.navigate('Cart')}
        >
          <Text style={styles.cartText}>
            Go to Cart ({totalItems})
          </Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  },

  logo: {
    width: 120,
    height: 50,
    resizeMode: 'contain',
    marginBottom: 5
  },

  nav: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20
  },

  navItem: {
    fontSize: 14,
    fontWeight: '600'
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

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 0,
    marginLeft: 12
  },

  description: {
    fontSize: 15,
    marginLeft: 12,
    marginBottom: 5
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
  },

  footer: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10
  },

  cartButton: {
    backgroundColor: '#0C8F4F',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center'
  },

  cartText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
})