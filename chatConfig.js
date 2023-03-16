import { Platform } from 'react-native';
import messaging from '@react-native-firebase/messaging';

// const userInfo = async () => {
//   const token = await messaging().getToken();
//   console.log('====================================');
//   console.log('token', token);
//   console.log('====================================');
//   const chatApiKey = 'syskvtvpmer4';
//   const chatUserId =
//     token ===
//     'f3NwWvXQQM6RnOPCSrAUCZ:APA91bGsbZquK09uCNCXX-QeMCrQJF1qsVNAG6BROq4emAvk5KaHq8xE7r5Qo9gMCxj7FN4O28Q5kvscLpvtDXgA-aC3L6dr2HoV0rfxZ88ff_nw4TCj6jLoBTCd-fL6P-SNUSLMUQLi'
//       ? 'swagen13'
//       : 'divine-brook-2';
//   const chatUserToken =
//     token ===
//     'f3NwWvXQQM6RnOPCSrAUCZ:APA91bGsbZquK09uCNCXX-QeMCrQJF1qsVNAG6BROq4emAvk5KaHq8xE7r5Qo9gMCxj7FN4O28Q5kvscLpvtDXgA-aC3L6dr2HoV0rfxZ88ff_nw4TCj6jLoBTCd-fL6P-SNUSLMUQLi'
//       ? 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoic3dhZ2VuMTMifQ.KuMCbd1h1B7xgMYcE_5hD8TtzxgbXiyYF1wpMVHTBTw'
//       : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiZGl2aW5lLWJyb29rLTIifQ.clGhuN0R9jfJFuMzQjAuyUB8SPCa9wJBumslgoOjzGc';
//   const chatUserName =
//     token ===
//     'f3NwWvXQQM6RnOPCSrAUCZ:APA91bGsbZquK09uCNCXX-QeMCrQJF1qsVNAG6BROq4emAvk5KaHq8xE7r5Qo9gMCxj7FN4O28Q5kvscLpvtDXgA-aC3L6dr2HoV0rfxZ88ff_nw4TCj6jLoBTCd-fL6P-SNUSLMUQLi'
//       ? 'swagen13'
//       : 'divine-brook-2';

//   return {
//     chatApiKey,
//     chatUserId,
//     chatUserToken,
//     chatUserName,
//   };
// };

// // export { chatApiKey, chatUserId, chatUserToken, chatUserName };
// export { userInfo };

// chatConfig.js
// export const chatApiKey = 'syskvtvpmer4';
// export const chatUserId = Platform.OS === 'ios' ? 'swagen13' : 'divine-brook-2';
// export const chatUserToken =
//   Platform.OS === 'ios'
//     ? 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoic3dhZ2VuMTMifQ.KuMCbd1h1B7xgMYcE_5hD8TtzxgbXiyYF1wpMVHTBTw'
//     : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiZGl2aW5lLWJyb29rLTIifQ.clGhuN0R9jfJFuMzQjAuyUB8SPCa9wJBumslgoOjzGc';
// export const chatUserName =
//   Platform.OS === 'ios' ? 'swagen13' : 'divine-brook-2';
