const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const coffeeSchema = new Schema(
  {
    uri: [
      {
        type: Schema.Types.String,
        required: true
      }
    ],
    user: {
      type: String,
      required: true,
    },
    uploadedAt: {
      type: Schema.Types.Date,
      default: Date.now
    },
    status: {
      type: Schema.Types.String,
      required: true,
      default: "Hazırlanıyor"
    },
    result: {
      type: String,
      required: false,
      default: "Falınız bakılmaya başlandı en kısa sürede hazır olacaktır. Hazır olduğunda bakımı biten fallarım bölümünden fal sonucunuzu inceleyebilirsiniz."
    },
  },
  {
    minimize: true,
    timestamps: true,
    autoIndex: true
  }
);

const Coffee = mongoose.model("Coffee", coffeeSchema, "coffee");

module.exports = Coffee;
