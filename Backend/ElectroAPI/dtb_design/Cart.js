const mongoose = require("mongoose");
// Cart collection schema
const cartschema = new mongoose.Schema({
    
    userId:{type: mongoose.Schema.Types.ObjectId,ref:"User", required:true},
    product: [
        {
            productId:{type: mongoose.Schema.Types.ObjectId,ref:"Product", required:true},
            quantity:{type: Number, default:1},
        },
    ],
},
    {timestamps: true}
);

module.exports = mongoose.model("Cart", cartschema);