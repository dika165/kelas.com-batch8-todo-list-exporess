import { successResponse, errorResponse } from "../utils/response.js";
import { nanoid } from "nanoid";

const users = [];

export const addUser = (req, res, next) => {
    let id = nanoid(6);
    let name = req.body.name;
    let email= req.body.email;
    let password = req.body.password;

    let user ={
        id, name, email, password
    }
    users.push(user)

    if(users.length > 0) {
        successResponse(res, "berhasil menambahkan user", user)
    } else {
        errorResponse(res, "gagal menambahkan user", 500)
    }
}

export const getUser = (req, res, next) => {
    successResponse(res, "success", users)
}

export const updateUser = (req, res, next) => {
    let id = req.params.id;
    let name = req.body.name;
    let email = req.body.email;
    let password = req.body.password;
    let index = users.findIndex(item => item.id == id);
    if(index > -1) {
        let user = users[index];
        user.name = name;
        user.email = email;
        user.password= password;

        successResponse(res, "berhasil update user", user)
    } else {
        errorResponse(res, "user tidak ditemukan")
    }
}

export const deleteUser = (req, res, next) => {
    let id = req.params.id;
    let index = users.findIndex(item => item.id == id);

    if(index > -1) {
        let user = users[index];

        users.splice(index, 1);

        successResponse(res, "berhasil hapus user", user);
    } else {
        errorResponse(res, "user tidak ditemukan")
    }
}