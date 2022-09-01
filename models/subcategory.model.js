import mongoose, { Schema } from "mongoose";

const SubCategorySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Category'
    }
});

const SubCategory = mongoose.model('SubCategory', SubCategorySchema);

export default SubCategory;
