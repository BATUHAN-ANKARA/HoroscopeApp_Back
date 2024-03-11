const userDal = require('./user.dal')
const blogsDal = require('./blogs.dal')
const likedPostDal = require('./likedPost.dal')
const coffeeDal = require('./coffee.dal')
const ordersDal = require('./orders.dal');
const dailyDal = require("./dailyDal");
const weeklyDal = require("./weeklyDal");
const monthlyDal = require("./monthlyDal");
const relationshipDal = require("./relationship.dal");
const tarotDal = require("./tarot.dal");

module.exports = {
  user: userDal,
  blogs: blogsDal,
  likedPost: likedPostDal,
  coffeeDal: coffeeDal,
  ordersDal: ordersDal,
  dailyDal: dailyDal,
  weeklyDal: weeklyDal,
  monthlyDal: monthlyDal,
  relationshipDal: relationshipDal,
  tarotDal: tarotDal
};