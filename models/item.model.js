import mongoose, { Schema } from "mongoose";

const ItemSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Category'
    },
    subCategoryId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Category'
    },
    price: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    }
});

const Item = mongoose.model('Item', ItemSchema);

export default Item;
