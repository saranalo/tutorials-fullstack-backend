import mongoose from "mongoose";
import Category from "../models/category.model";

const getOneCategory = async (id) => {
    return await Category.findOne({
        _id: mongoose.Types.ObjectId(id)
    })
};
const getAllCategories = async () => {
    return await Category.find({});
};
const createOneCategory = async(data) => { 
    //checks
    //validations
    return await Category.create({
        ...data
    })
};

const updateOneCategory = async(id, data) => {
    //checks
    //validations
    console.log('test', id, data)
    console.log('a ovo', mongoose.Types.ObjectId(id));
    try {
        const x = await Category.updateOne({
            _id: mongoose.Types.ObjectId(id)
        }, {
            $set: {
                ...data
            }
        }, {
            upsert: true
        })
        console.log('ovdje', x)
        return x;
    } catch(e){
        console.log('ovdje err', e.message)
        return null;
    }
};
const deleteOneCategory = async (id) => {
    return await Category.deleteOne({
        _id: mongoose.Types.ObjectId(id)
    })
};

const categoryServiceHandler = {
    getOneCategory,
    getAllCategories,
    createOneCategory,
    updateOneCategory,
    deleteOneCategory
}

export default categoryServiceHandler