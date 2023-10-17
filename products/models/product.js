const mongoose      = require('mongoose'),
      productSchema = new mongoose.Schema({
        _id: mongoose.Schema.Types.ObjectId,
        title: { type: String, required: true },
        price: { type: Number, required: true }
      }, {
        timestamps: true
      });

module.exports= mongoose.model('Product', productSchema);      
