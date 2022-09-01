import itemServiceHandler from '../services/item.service';

const getOneItem = async(req, res) => { 
    try {
        const {params} = req;
        const item = await itemServiceHandler.getOneItem(params.id);
        return res.send(item);
    } catch(e){
        return res.send({ msg: "Internal server error" }).status(500);
    }
};
const getAllItems = async(req, res) => { 
    try {
        const item = await itemServiceHandler.getAllItems(params.id);
        return res.send(item);
    } catch(e) {
        return res.send({ msg: "Internal server error" }).status(500);
    }
};
const getItemsBySubcategory = async(req, res) => {
    try {
        const item = await itemServiceHandler.getItemBySubcategory(params.id);
        return res.send(item);
    } catch (e) {
        return res.send({ msg: "Internal server error" }).status(500);
    }
};
const deleteOneItem = async(req, res) => {
    try {
        const {params} = req;
        const item = await itemServiceHandler.deleteOneItem(params.id);
        return res.send(item);
    } catch (e) {
        return res.send({ msg: "Internal server error" }).status(500);
    }
};
const createOneItem = async(req, res) => {
    try {
        const {body} = req;
        const item = await itemServiceHandler.createOneItem(body);
        return res.send(item);
    } catch (e) {
        return res.send({ msg: "Internal server error" }).status(500);
    }
};
const updateOneItem = async(req, res) => {
    try {
        const {params, body} = req;
        const item = await itemServiceHandler.updateOneItem(params.id, body);
        return res.send(item);
    } catch (e) {
        return res.send({ msg: "Internal server error" }).status(500);
    }
};

const itemController = {
    getOneItem,
    getAllItems,
    getItemsBySubcategory,
    createOneItem,
    updateOneItem,
    deleteOneItem
}

export default itemController;
