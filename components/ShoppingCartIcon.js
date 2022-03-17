import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'

function ShoppingCartIcon() {
  const cartItems = useSelector(state => state)

  return (

    <View style={styles.itemCountContainer}>
      <Text style={styles.itemCountText}>{cartItems.length}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    marginRight: 10
  },
  itemCountContainer: {
    height: 25,
    width: 25,
    borderRadius: 15,
    backgroundColor: '#FF7D7D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemCountText: {
    color: 'white',
    fontWeight: 'bold'
  }
})

export default ShoppingCartIcon