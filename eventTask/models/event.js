const mongoose    = require('mongoose'),
      schema      = mongoose.Schema, //not sure about it
      eventSchema = new mongoose.Schema({
        _id: {type: Number, required: true},
        title:{type: String, required: true},
        price:{type: Number, defalut: 500},
        description: String
      },{timestamps: true});

const Event = mongoose.model('Event',eventSchema);
module.exports = Event;
