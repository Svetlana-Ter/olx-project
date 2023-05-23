import { Modal } from 'bootstrap';
const header = require('../partials/header.handlebars');
const main = require('../partials/main.handlebars');
const category = require('../partials/category.handlebars');
const addModal = require('../partials/add-modal.handlebars');
const authModal = require('../partials/auth-modal.handlebars');
const myCalls = require('../partials/my-calls.handlebars');
const footer = require('../partials/footer.handlebars');
const productModal = require('../partials/product-modal.handlebars');
const searchModal = require('../partials/search-modal.handlebars');

export default [
  header,
  main,
  authModal,
  addModal,
  myCalls,
  footer,
  productModal,
  searchModal,
];
