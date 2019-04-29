// user-details-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const userDetails = new Schema({
    sonidero_name: { type: String, required: true },
    email: { type: String, required: true },
    description: { type: String },
    associated_acc: { type: String, required: true },
    avatar: { type: String }
  }, {
    timestamps: true
  });

  return mongooseClient.model('userDetails', userDetails);
};
