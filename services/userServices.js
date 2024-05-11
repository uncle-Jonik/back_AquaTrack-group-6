import e from 'express';
import { User } from '../models/userModel.js';
import HttpError from '../utils/HttpError.js';
import { signToken } from './jwtServices.js';

export const checkUserExistsService = (filter) => {
    return User.exists(filter);
};

export const createUserService = async (userData) => {
    const email = userData.email;

    let name = email.split('@')[0];

    name = name.charAt(0).toUpperCase() + name.slice(1);

    userData.name = name;

    const newUser = await User.create(userData);

    return { newUser };
};

export const loginUserService = async ({ email, password }) => {
    const user = await User.findOne({ email });

    if (!user) throw HttpError(401, "Email or password is wrong");

    const passwordIsValid = await user.checkUserPassword(password, user.password);

    if (!passwordIsValid) throw HttpError(401, "Email or password is wrong");

    const token = signToken(user.id);

    user.token = token;
    await user.save();

    return { user, token };
};

export const getUserByIdService = (id) => {
    return User.findById(id);
};

export const logoutUserService = async (userId) => {
    const user = await User.findById(userId);

    if (!user) {
        throw HttpError(401, "Unauthorized");
    }

    user.token = null;

    await user.save();
};

export const updateUserService = async (userData, userId) => {

    const updatedUser = await Contact.findByIdAndUpdate(contact.id, body, {
        new: true,
    });

    return updatedContact;
};