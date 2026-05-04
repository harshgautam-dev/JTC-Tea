import React from 'react'
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image
} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import {
  increaseQty,
  decreaseQty,
  removeItem
} from '../features/cart/cartSlice'

export default function CartScreen() {
  const cart = useSelector((state: any) => state.cart.items)
  const dispatch = useDispatch()

  const total = cart.reduce(
    (sum: number, item: any) => sum + item.price * item.quantity,
    0
  )

  // ✅ EMPTY STATE
  if (cart.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>Your cart is empty 🛒</Text>
      </View>
    )
  }

  return (
    <View style={styles.screen}>
      
      <Text style={styles.title}>Your Cart</Text>

      <FlatList
        data={cart}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 140 }}
        ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
        
        renderItem={({ item }) => (
          <View style={styles.card}>

            {/* IMAGE */}
            <Image source={{ uri: item.image }} style={styles.image} />

            {/* DETAILS */}
            <View style={styles.details}>
              <Text style={styles.name}>{item.title}</Text>
              <Text style={styles.price}>₹{item.price}</Text>

              {/* QUANTITY */}
              <View style={styles.controls}>
                <TouchableOpacity
                  style={styles.controlBtn}
                  onPress={() => dispatch(decreaseQty(item.id))}
                >
                  <Text style={styles.controlText}>−</Text>
                </TouchableOpacity>

                <Text style={styles.qty}>{item.quantity}</Text>

                <TouchableOpacity
                  style={styles.controlBtn}
                  onPress={() => dispatch(increaseQty(item.id))}
                >
                  <Text style={styles.controlText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* REMOVE */}
            <TouchableOpacity
              onPress={() => dispatch(removeItem(item.id))}
            >
              <Text style={styles.remove}>Remove</Text>
            </TouchableOpacity>

          </View>
        )}
      />

      {/* FOOTER */}
      <View style={styles.footer}>
        <Text style={styles.total}>Total: ₹{total}</Text>

        <TouchableOpacity style={styles.checkoutBtn}>
          <Text style={styles.checkoutText}>Checkout</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 16,
    paddingTop: 10,
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
  },

  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  emptyText: {
    fontSize: 18,
    color: '#777'
  },

  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    alignItems: 'center',

    // shadow (better UI)
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
  },

  image: {
    width: 70,
    height: 70,
    borderRadius: 8,
    resizeMode: 'contain'
  },

  details: {
    flex: 1,
    marginLeft: 12
  },

  name: {
    fontSize: 14,
    fontWeight: '600'
  },

  price: {
    fontSize: 14,
    marginVertical: 4
  },

  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6
  },

  controlBtn: {
    borderWidth: 1,
    borderColor: '#0C8F4F',
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 2
  },

  controlText: {
    fontSize: 16,
    color: '#0C8F4F'
  },

  qty: {
    marginHorizontal: 8,
    fontSize: 14
  },

  remove: {
    color: 'red',
    fontSize: 12
  },

  footer: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 12,
    elevation: 6
  },

  total: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },

  checkoutBtn: {
    backgroundColor: '#0C8F4F',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center'
  },

  checkoutText: {
    color: '#fff',
    fontWeight: 'bold'
  }
})

