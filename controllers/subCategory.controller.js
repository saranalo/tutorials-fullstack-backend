import SubCategoryServiceHandler from "../services/category.service";

const getOneSubCategory = async (req, res) => {
    try {
        const { params } = req;
        const subcategory = await SubCategoryServiceHandler.getOneSubCategory(params.id);
        return res.send(subcategory);
    } catch (e) {
        return res.send({ msg: "Internal server error" }).status(500);
    }
};
const getAllSubCategories = async (req, res) => {
    try {
        const subcategory = await SubCategoryServiceHandler.getAllSubCategory();
        return res.send(subcategory);
    } catch (e) {
        return res.send({ msg: "Internal server error" }).status(500);
    }
};
const getSubcategoryByCategory = async (req, res) => {
    try {
        const subcategory = await SubCategoryServiceHandler.getSubcategoryByCategory(params.id);
        return res.send(subcategory);
    } catch (e) {
        return res.send({ msg: "Internal server error" }).status(500);
    }
};
const createOneSubCategory = async (req, res) => {
    try {
        const { body } = req;
        const subcategory = await SubCategoryServiceHandler.createOneSubCategory(body);
        return res.send(subcategory)
    } catch (e) {
        return res.send({ msg: "Internal server error" }).status(500);
    }
};
const updateOneSubCategory = async (req, res) => {
    try {
        const { params, body } = req;
        const subcategory = await SubCategoryServiceHandler.updateOneSubCategory(params, body);
        return res.send(subcategory)
    } catch (e) {
        return res.send({ msg: "Internal server error" }).status(500);
    }
};
const deleteOneSubCategory = async (req, res) => {
    try {
        const { params } = req;
        const deletedSubcategory = await SubCategoryServiceHandler.deleteOneSubCategory(params.id);
        return res.send(deletedSubcategory);
    } catch (e) {
        return res.send({ msg: "Internal server error" }).status(500);
    }
};

const subCategoryController = {
    getOneSubCategory,
    getAllSubCategories,
    createOneSubCategory,
    updateOneSubCategory,
    deleteOneSubCategory,
    getSubcategoryByCategory
}

export default subCategoryController