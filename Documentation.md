### To scroll the cards horizontally - side by side

=> <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}> Elements which we want to make scroll</ScrollView>

### For Shadow

=>

```javaScript
shadowOffset: {
width: 10,
height: 10,
},
shadowColor: '#333333',
shadowOpacity: 0.8,
shadowRadius:5,
elevation: 6,
```

### Image Tag

=>

```javaScript
<Image
source={{
            uri: 'https://www.fabhotels.com/blog/wp-content/uploads/2019/03/city-palace.jpg',
          }}
style={styles.cardImage}
/>

```

### TouchableOpacity tag

=> When we click its opacity reduce. To open any links we use that!
