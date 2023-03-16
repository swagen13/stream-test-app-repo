// /* eslint-disable react/display-name */
// import React, { useEffect, useState } from 'react';
// import { AsyncStorage, Button, TextInput, View } from 'react-native';
// import 'react-native-gesture-handler';
// import { useNavigation } from '@react-navigation/native';

// const SelectUser = () => {
//   const [username, setUsername] = useState('');
//   // const navigation = useNavigation();

//   const handleLogin = async () => {
//     if (username === 'divine-brook-2') {
//       // set user token , user id to async storage
//       await AsyncStorage.setItem(
//         '@user_token',
//         'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiZGl2aW5lLWJyb29rLTIifQ.clGhuN0R9jfJFuMzQjAuyUB8SPCa9wJBumslgoOjzGc'
//       );
//       await AsyncStorage.setItem('@user_id', 'divine-brook-2');
//     } else {
//       await AsyncStorage.setItem(
//         '@user_token',
//         'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoic3dhZ2VuMTMifQ.KuMCbd1h1B7xgMYcE_5hD8TtzxgbXiyYF1wpMVHTBTw'
//       );
//       await AsyncStorage.setItem('@user_id', 'swagen13');
//     }
//   };

//   return (
//     <View
//       style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 20, flex: 1 }}
//     >
//       <TextInput
//         value={username}
//         onChangeText={setUsername}
//         placeholder="username"
//         keyboardType="email-address"
//       />
//       <Button title="Login" onPress={handleLogin} />
//     </View>
//   );
// };

// export default SelectUser;
