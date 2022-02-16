// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const f_Three_handleSubmit = async (existingPromise, otherProp) => {
  await existingPromise
    .then((data) => {
      console.log('3 handle submit running now', data);
    })
    .catch((exp) => {
      console.log('catch:', exp);
    });
};

const f_One_Register = (someProps) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('1 f_One Register complete ');
      resolve('f_One_Register complete ');
    }, 1000);
  });
};

const f_Two_login = (someMoreProps) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('2 f_Two login complete ');
      resolve('f_Two_login complete ');
    }, 4000);
  });
};

// doesn't wait for async void
///////// Start commenting here //////////
// f_Three_handleSubmit(
//   f_One_Register('someProps').then((args) => {
//     f_Two_login('someMoreProps');
//   }),
//   'register'
// );
///////// stop commenting here //////////

// we can make it wait for asyncf_Three_handleSubmit(
///////// Start commenting here //////////
f_Three_handleSubmit(
  f_One_Register('someProps').then(async (args) => {
    await f_Two_login('someMoreProps');
  }),
  'register'
);
///////// stop commenting here //////////
