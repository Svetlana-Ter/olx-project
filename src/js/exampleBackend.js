import { data } from "jquery";

const BASE_URL = 'https://callboard-backend.herokuapp.com';

const postToAdd = {
  email: 'user5468878994545@example.com',
  password: 'qwerty123',
};

const option = {
  method: 'POST',
  body: JSON.stringify(postToAdd),
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
  },
};



/* 
///////////////// Регистрация /////////////////

const urlAuthRegister = `${BASE_URL}/auth/register`;

 // Регистрация 
fetch(urlAuthRegister, option)
 .then((r) => r.json())
 .then(console.log);

// Ответ
{
  email: 'user5468878994545@example.com',
  registrationDate: '2020-12-11',
  id: '5fd332a680dabd00179d7faf',
};
*/

///////////////// login /////////////////

const urlAuthLogin = `${BASE_URL}/auth/login`;

 async function test () { 
  const request = await fetch(urlAuthLogin, option)
  const response = request.json()
  const token = response.then(data => data.refreshToken)
  
  localStorage.setItem('token', token)
}


// const tr = test()
// .then(data => {
// console.log(data);
// console.log(data.refreshToken)
// return data.refreshToken
// })


// fetch(urlAuthLogin, option)
//   .then(r => r.json())
//   .then(console.log);

/* Ответ
{
  accessToken:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmQzMzJhNjgwZGFiZDAwMTc5ZDdmYWYiLCJzaWQiOiI1ZmQzMzUzYTgwZGFiZDAwMTc5ZDdmZTQiLCJpYXQiOjE2MDc2NzcyNDIsImV4cCI6MTYwNzY4MDg0Mn0.Nw3Xu2mElqFP5XXQ8OXlbheo6aN7ZC6fSXqup1AaeNI',
  refreshToken:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmQzMzJhNjgwZGFiZDAwMTc5ZDdmYWYiLCJzaWQiOiI1ZmQzMzUzYTgwZGFiZDAwMTc5ZDdmZTQiLCJpYXQiOjE2MDc2NzcyNDIsImV4cCI6MTYxMDMwNTI0Mn0.k7ClxKFHWx8UIIIIY0VZmvB7mOnpOvK7N00Mk6jdotc',
  sid: '5fd3353a80dabd00179d7fe4',
  user: {
    email: 'user5468878994545@example.com',
    registrationDate: '2020-12-11',
    id: '5fd332a680dabd00179d7faf',
    favourites: [],
    calls: [],
  },
};
*/

///////////////// User /////////////////

const urlAuthUser = `${BASE_URL}/user`;

fetch(urlAuthUser, {
  method: 'GET',
  headers: myHeaders,
})
  .then(r => r.json())
  // .then(console.log);/

/* Ответ
{
  email: 'user5468878994545@example.com',
  registrationDate: '2020-12-11',
  id: '5fd332a680dabd00179d7faf',
  calls: [],
  favourites: [],
};
*/

///////////////// Категории /////////////////

const urlCallCategory = `${BASE_URL}/call/categories`;

fetch(urlCallCategory, myHeaders)
  .then(r => r.json())
  // .then(console.log);

/* Отвут
[
  'property',
  'transport',
  'work',
  'electronics',
  'business and services',
  'recreation and sport',
  'free',
  'trade',
];
*/

///////////////// Поиск /////////////////

const urlCallCall = `${BASE_URL}/call?page=1`;

const myHeadersCall = new Headers();

myHeaders.append('Content-Type', 'application/json');
myHeaders.append(
  'Authorization',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmQzMzJhNjgwZGFiZDAwMTc5ZDdmYWYiLCJzaWQiOiI1ZmQzMzUzYTgwZGFiZDAwMTc5ZDdmZTQiLCJpYXQiOjE2MDc2NzcyNDIsImV4cCI6MTYxMDMwNTI0Mn0.k7ClxKFHWx8UIIIIY0VZmvB7mOnpOvK7N00Mk6jdotc',
);

fetch(urlCallCall, myHeadersCall)
  .then(r => r.json())
  // .then(console.log);

/* Ответ
{
  sales: [],
  recreationAndSport: [],
  free: [],
  businessAndServices: [
    {
      imageUrls: [
        'https://storage.googleapis.com/kidslikev2_bucket/07f526f8-4cbe-4d47-8b3a-ffd3cdc3e150.jpeg',
      ],
      _id: '5fd076b7deae5f0017e41a7d',
      title: 'Red Shirt',
      description: 'New red shirt, made from cotton',
      category: 'business and services',
      price: 255,
      phone: '+380000000000',
      isOnSale: false,
      userId: '5fcf371a2d55d90017ae3391',
      __v: 0,
    },
    ...
    {
      imageUrls: [
        'https://storage.googleapis.com/kidslikev2_bucket/1798bb23-aab7-4b24-9741-529d03356339.jpeg',
      ],
      _id: '5fd367626da6ab0017dbf38b',
      title: 'Red Shirt1112',
      description: 'New red shirt, made from cotton',
      category: 'business and services',
      phone: '+380000000000',
      price: 200,
      isOnSale: false,
      userId: '5fcf34b02d55d90017ae338f',
      __v: 0,
    },
  ],
};
 */

///////////////// Фаворит добавить /////////////////

const post = {
  imageUrls: [
'01101000011101000111010001110000011100110011101000101111001011110110011001110010011001010110010101110000011011100110011101101001011011010110011100101110011000110110111101101101001011110111010001101000011101010110110101100010001011110111011101101001011011100110011101110011001011110011001100110100001110010011010100110010001011010011001100101101011101110110100101101110011001110111001100101101011010010110110101100001011001110110010100101110011100000110111001100111'  ],
  title: 'Red Shirt',
  description: 'New red shirt, made from cotton',
  category: 'business and services',
  price: 255,
  phone: '+380000000000',
}

const callId = '5fd076b7deae5f0017e41a7d';
const urlCallCFavour = `${BASE_URL}/call`;
const optionFavour = {
  method: 'POST',
  body: JSON.stringify(post),
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
    'Authorization':
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmQzMzJhNjgwZGFiZDAwMTc5ZDdmYWYiLCJzaWQiOiI1ZmQzMzUzYTgwZGFiZDAwMTc5ZDdmZTQiLCJpYXQiOjE2MDc2NzcyNDIsImV4cCI6MTYxMDMwNTI0Mn0.k7ClxKFHWx8UIIIIY0VZmvB7mOnpOvK7N00Mk6jdotc'
  },
};

fetch(urlCallCFavour, optionFavour)
  .then(r => r.json())
  .then(console.log);

  /* Ответ
  {"newFavourites":[{"imageUrls":["https://storage.googleapis.com/kidslikev2_bucket/1798bb23-aab7-4b24-9741-529d03356339.jpeg"],"_id":"5fd367626da6ab0017dbf38b","title":"Red Shirt1112","description":"New red shirt, made from cotton","category":"business and services","phone":"+380000000000","price":200,"isOnSale":false,"userId":"5fcf34b02d55d90017ae338f","__v":0}]}
  */

///////////////// Фаворит DELETE /////////////////
const callIdDel = '5fd367626da6ab0017dbf38b';
const urlCallCFavourDel = `${BASE_URL}/call/favourite/${callIdDel}`;
const optionFavourDel = {
  method: 'DELETE',
  body: JSON.stringify(postToAdd),
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
    'Authorization':
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmQzMzJhNjgwZGFiZDAwMTc5ZDdmYWYiLCJzaWQiOiI1ZmQzMzUzYTgwZGFiZDAwMTc5ZDdmZTQiLCJpYXQiOjE2MDc2NzcyNDIsImV4cCI6MTYxMDMwNTI0Mn0.k7ClxKFHWx8UIIIIY0VZmvB7mOnpOvK7N00Mk6jdotc'
  },
};
 
// fetch(urlCallCFavourDel, optionFavourDel)
//   .then(r => r.json())
//   .then(console.log);

/* Ответ
  {"newFavourites":[{"imageUrls":["https://storage.googleapis.com/kidslikev2_bucket/07f526f8-4cbe-4d47-8b3a-ffd3cdc3e150.jpeg"],"_id":"5fd076b7deae5f0017e41a7d","title":"Red Shirt","description":"New red shirt, made from cotton","category":"business and services","price":255,"phone":"+380000000000","isOnSale":false,"userId":"5fcf371a2d55d90017ae3391","__v":0}]}
  */

  ///////////////// Поиск по заголовку /////////////////
//  const urlFind = `${BASE_URL}/call/find?search=Red Shirt1112`;

//  async function test () { 
//   const request = await fetch(urlFind, myHeaders)
//   const response = request.json()
//   console.log('response ', response);
// }
// const findId = test()

// console.log(findId.id);

  /* Ответ
  [{"_id":"5fd367626da6ab0017dbf38b","imageUrls":["https://storage.googleapis.com/kidslikev2_bucket/1798bb23-aab7-4b24-9741-529d03356339.jpeg"],"title":"Red Shirt1112","description":"New red shirt, made from cotton","category":"business and services","phone":"+380000000000","price":200,"isOnSale":false,"userId":"5fcf34b02d55d90017ae338f","__v":0}]
  */