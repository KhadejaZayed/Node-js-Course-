const mongoose   = require('mongoose'),
      taskSchema = new mongoose.Schema({
        title   : {type : String, required : true},
        details : {type : String}
      },{
        timestamps : true
      });


module.exports = mongoose.model('Task', taskSchema);
