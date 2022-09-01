import mongoose from "mongoose";
import Item from "../models/item.model";
import SubCategory from "../models/subcategory.model";
import { validateCategory } from './subcategory.service'

const getOneItem = async (id) => {
    return await Item.findOne({
        _id: mongoose.Types.ObjectId(id)
    })
};

const getAllItems = async () => {
    return await Item.find({});
};
const getItemsBySubcategory = async (id) => {
    return await Item.find({
        subCategoryId: mongoose.Types.ObjectId(id)
    });
};

const deleteOneItem = async (id) => {
    return await Item.deleteOne({
        _id: mongoose.Types.ObjectId(id)
    })
};

export const validateSubCategory = async (subCategoryId) => {
    //checks
    const subCategory = await SubCategory.findOne({ _id: mongoose.Types.ObjectId(subCategoryId) })
    //validations
    if (!subCategory) throw new Error(`SubCategory does not exists with the id ${subCategoryId}`)
    return subCategory._id
}

export const validNameOfTheItem = async (name) => {
    const item = await Item.findOne({
        name,
    });
    if (!item) throw new Error(`Name of the item can not be ${data.name}. That name already exists`);
    return;
}

const createOneItem = async (data) => {
    //checks
    const cid = await validateCategory(data.categoryId);
    const scid = await validateSubCategory(data.subCategoryId);
    await validNameOfTheItem(data.name);
    //validations
    if (data.name === '') throw new Error(`Name of the item can not be ${data.name}`);
    if (data.quantity < 0) throw new Error(`Quantity of the item can not be ${data.quantity}, must be greater or equal to 0`);
    if (data.price < 0) throw new Error(`Price of the item can not be ${data.price}, must be greater or equal to 0`);

    //create
    return await Item.create({
        ...data,
        categoryId: cid,
        subCategoryId: scid
    })
};

const updateOneItem = async (id, data) => {
    const { categoryId, subCategoryId, ...restOfTheData } = data;

    let objectToUpdate = restOfTheData;

    if (categoryId) {
        const cid = await validateCategory(categoryId);
        objectToUpdate.categoryId = cid;
    }
    if (subCategoryId) {
        const scid = await validateSubCategory(subCategoryId);
        objectToUpdate.subCategoryId = scid;
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

const itemServiceHandler = {
    getOneItem,
    getAllItems,
    getItemsBySubcategory,
    deleteOneItem,
    createOneItem,
    updateOneItem
}
export default itemServiceHandler