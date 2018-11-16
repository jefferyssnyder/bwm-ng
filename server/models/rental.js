const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rentalSchema = new Schema ({
    title: {type:String, required: true, max: [128, 'Too Long, max is 128 characters']},
    city: { type: String, require: true, lowercase: true },
    street: { type: String, require: true, lowercase: true, min: [4, 'Too short, min is 4 characters'] },
    category: { type: String, require: true, lowercase: true },
    image: { type: String, require: true },
    bedroom: Number,
    shared: Boolean,
    description: { type: String, require: true },
    dailyRate: Number,
    createAt: { type: Date, default: Date.now }
});

module.exports =mongoose.model('Rental', rentalSchema );