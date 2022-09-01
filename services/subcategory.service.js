import mongoose from "mongoose";
import Category from "../models/category.model";
import SubCategory from "../models/subcategory.model";

const getOneSubCategory = async (id) => {
    return await SubCategory.findOne({
        _id: mongoose.Types.ObjectId(id)
    })
};
const getAllSubCategories = async () => {
    return await SubCategory.find({});
};
const deleteOneSubCategory = async (id) => {
    return await SubCategory.deleteOne({
        _id: mongoose.Types.ObjectId(id)
    })
};
const getSubcategoryByCategory = async (id) => {
    return await SubCategory.find({
        categoryId: mongoose.Types.ObjectId(id)
    })
}

export const validateCategory = async (categoryId) => {
    //checks
    const category = await Category.findOne({ _id: mongoose.Types.ObjectId(categoryId) })
    //validations
    if (!category) throw new Error(`Category does not exists with the id ${categoryId}`)
    return category._id
}

const createOneSubCategory = async (data) => {
    const cid = await validateCategory(data.categoryId);

    return await SubCategory.create({
        ...data,
        categoryId: cid
    })
};
const updateOneSubCategory = async (id, data) => {
    const { categoryId, ...restOfTheData } = data;
    let objectToUpdate = restOfTheData;
    if (categoryId) {
        const cid = await validateCategory(data.categoryId);
        objectToUpdate.categoryId = cid;
    }
    return await SubCategory.updateOne({
        _id: mongoose.Types.ObjectId(id)
    }, {
        $set: {
            ...objectToUpdate
        }
    }, {
        upsert: true
    });
};

const SubCategoryServiceHandler = {
    getOneSubCategory,
    getAllSubCategories,
    createOneSubCategory,
    updateOneSubCategory,
    deleteOneSubCategory,
    getSubcategoryByCategory
}
export default SubCategoryServiceHandler