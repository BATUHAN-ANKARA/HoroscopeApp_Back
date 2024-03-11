const authRouter = require("./auth.router").auth;
const userRouter = require("./user.router").user;
const generalRouter = require('./general.router').general;
const zodiacRouter = require("./zodiac.router").zodiac;
const blogRouter = require("./blog.router").blog;
const coffeeRouter = require("./coffee.router").coffee;
const minisoftRouter = require("./minisoft.router").minisoft;
const tarotRouter = require("./tarot.router").tarot;

module.exports = {
  authRouter,
  userRouter,
  generalRouter,
  zodiacRouter,
  blogRouter,
  coffeeRouter,
  minisoftRouter,
  tarotRouter,
};