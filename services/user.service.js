const User = require("../models/user.model");
const userDal = require("../dal/index");
const utils = require("../utils/index");
const fileService = require("./file.service");

exports.createUser = async (req) => {
  try {
    let { birthDate, name } = req.body;
    birthDate = new Date(birthDate);
    let today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    if (
      today.getMonth() < birthDate.getMonth() ||
      (today.getMonth() === birthDate.getMonth() &&
        today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    let month = birthDate.getMonth() + 1; // Aylar 0'dan başlar
    let day = birthDate.getDate();
    let zodiac;

    // Koç burcu (21 Mart - 19 Nisan)
    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
      zodiac = "Koç";
    }
    // Boğa burcu (20 Nisan - 20 Mayıs)
    else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
      zodiac = "Boğa";
    }
    // İkizler burcu (21 Mayıs - 20 Haziran)
    else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
      zodiac = "İkizler";
    }
    // Yengeç burcu (21 Haziran - 22 Temmuz)
    else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
      zodiac = "Yengeç";
    }
    // Aslan burcu (23 Temmuz - 22 Ağustos)
    else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
      zodiac = "Aslan";
    }
    // Başak burcu (23 Ağustos - 22 Eylül)
    else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
      zodiac = "Başak";
    }
    // Terazi burcu (23 Eylül - 22 Ekim)
    else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
      zodiac = "Terazi";
    }
    // Akrep burcu (23 Ekim - 21 Kasım)
    else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
      zodiac = "Akrep";
    }
    // Yay burcu (22 Kasım - 21 Aralık)
    else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
      zodiac = "Yay";
    }
    // Oğlak burcu (22 Aralık - 19 Ocak)
    else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
      zodiac = "Oğlak";
    }
    // Kova burcu (22 Aralık - 19 Ocak)
    else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
      zodiac = "Kova";
    } else {
      zodiac = "Balık";
    }
    const user = new User({
      birthDate,
      name,
      zodiac,
      age
    });
    const json = await userDal.user.create(user);
    return json;
  } catch (error) {
    throw new Error(error);
  }
};

exports.updateUser = async (req) => {
  try {
    const { surname, gender, email } = req.body;
    const { id } = req.params;
    const existingUser = await userDal.user.findOne({ email });
    if (existingUser && existingUser.email === email) {
      return "mail_hata";
    }
    const json = await userDal.user.updateById(id, {
      surname,
      gender,
      email
    });
    return json;
  } catch (error) {
    throw new Error(error);
  }
};

exports.signIn = async (req) => {
  try {
    const { email, password } = req.body;

    const _password = utils.helpers.hashToPassword(password);
    const json = await userDal.user.findOne({ email, password: _password });
    if (json) {
      return {
        id: json._id,
        email: json.email
      };
    }
    return null;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getUser = async (req) => {
  try {
    const { id } = req.params;
    const json = await userDal.user.findById(id);
    console.log(json);
    if (json) {
      return json;
    }
    return null;
  } catch (error) {
    throw new Error(error);
  }
};

exports.updateAvatar = async (req, res) => {
  try {
    const { id } = req.query;
    const str = await fileService.uploadImage(req, res);
    const json = await userDal.user.updateById(id, { avatar: str });
    return json;
  } catch (error) {
    throw new Error(error);
  }
};

exports.createPassword = async (req, res) => {
  try {
    const { id } = req.params;
    const { password } = req.body;
    const _password = utils.helpers.hashToPassword(password);
    const json = await userDal.user.updateById(id, { password: _password });
    if (json) {
      const token = utils.helpers.createToken(json._id, json.name);
      return {
        id: json._id,
        token,
        _password
      };
    }
  } catch (error) {
    throw new Error(error);
  }
};
