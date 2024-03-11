const dailyDal = require("../dal/dailyDal");
const monthlyDal = require("../dal/monthlyDal");
const weeklyDal = require("../dal/weeklyDal");
const Daily = require("../models/daily.model");
const Weekly = require("../models/weekly.model");
const Monthly = require("../models/monthly.model");
const Relationship = require("../models/relationship.model");
const Tarot = require("../models/tarot.model");
const Blogs = require("../models/blogs.model");
const minisoftDal = require("../dal/index");

exports.postDaily = async (req) => {
  try {
    const { title, text, author } = req.body;
    const post = new Daily({
      title,
      text,
      author
    });
    const json = await dailyDal.create(post);
    return json;
  } catch (error) {
    throw new Error(error);
  }
};

exports.updateDaily = async (req) => {
  try {
    const { horoscope } = req.query;
    const { text, author } = req.body;
    const findedHoroscope = await dailyDal.findOne({ title: horoscope });
    const id = findedHoroscope._id;
    const json = await dailyDal.updateById(id, { text: text, author: author });
    return json;
  } catch (error) {
    throw new Error(error);
  }
};

exports.postWeekly = async (req) => {
  try {
    const { title, text, author } = req.body;
    const post = new Weekly({
      title,
      text,
      author
    });
    const json = await weeklyDal.create(post);
    return json;
  } catch (error) {
    throw new Error(error);
  }
};

exports.updateWeekly = async (req) => {
  try {
    const { horoscope } = req.query;
    const { text, author } = req.body;
    const findedHoroscope = await weeklyDal.findOne({ title: horoscope });
    const id = findedHoroscope._id;
    const json = await weeklyDal.updateById(id, { text: text, author: author });
    return json;
  } catch (error) {
    throw new Error(error);
  }
};

exports.postMonthly = async (req) => {
  try {
    const { title, text, author } = req.body;
    const post = new Monthly({
      title,
      text,
      author
    });
    const json = await monthlyDal.create(post);
    return json;
  } catch (error) {
    throw new Error(error);
  }
};

exports.updateMonthly = async (req) => {
  try {
    const { horoscope } = req.query;
    const { text, author } = req.body;
    const findedHoroscope = await monthlyDal.findOne({ title: horoscope });
    const id = findedHoroscope._id;
    const json = await monthlyDal.updateById(id, {
      text: text,
      author: author
    });
    return json;
  } catch (error) {
    throw new Error(error);
  }
};

exports.postTarotDescription = async (req) => {
  try {
    const { id, name, description } = req.body;
    const tarot = new Tarot({
      id: id,
      name: name,
      description: description
    });
    const json = await minisoftDal.tarotDal.create(tarot);
    return json;
  } catch (error) {
    throw new Error(error);
  }
};

exports.postRelationship = async (req) => {
  try {
    const { horoscopeName, otherName, relationship } = req.body;
    const pair = new Relationship({
      horoscopeName: horoscopeName,
      otherName: otherName,
      relationship: relationship
    });
    const json = await minisoftDal.relationshipDal.create(pair);
    return json;
  } catch (error) {
    throw new Error(error);
  }
};

exports.addBlog = async (req) => {
  try {
    let { title, text } = req.body;
    let postDate = new Date();
    const blog = new Blogs({
      title,
      text,
      postDate
    });
    const json = await minisoftDal.blogs.create(blog);
    return json;
  } catch (error) {
    throw new Error(error);
  }
};
