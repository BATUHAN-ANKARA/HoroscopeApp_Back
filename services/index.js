const userService = require("./user.service");
const generalService = require('./general.service');
const blogsService = require('./blogs.service');
const likedPostService = require('./likedPost.service');
const zodiacService = require("./zodiac.service");
const minisoftService = require("./mnisoft.service");
const coffeeService = require("./coffee.service");
const tarotService = require("./tarot.service");
 
module.exports = {
  user: userService,
  general: generalService,
  blogs: blogsService,
  likedPost: likedPostService,
  zodiac: zodiacService,
  minisoft: minisoftService,
  coffee: coffeeService,
  tarot: tarotService,
};