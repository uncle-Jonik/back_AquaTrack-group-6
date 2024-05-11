import { createUserService, loginUserService, logoutUserService } from "../services/userServices.js";
import { catchAsync } from "../utils/catchAsync.js";

export const createUser = catchAsync(async (req, res) => {
    const { newUser } = await createUserService(req.body);

    res.status(201).json({
        user: { email: newUser.email },
    });
});

export const loginUser = catchAsync(async (req, res) => {
    const { user, token } = await loginUserService(req.body);

    res.status(200).json({
        user: {
            email: user.email,
            subscription: user.subscription,
        },
        token,
    });
});

export const logoutUser = catchAsync(async (req, res) => {
    const id = req.userId;

    await logoutUserService(id);

    res.sendStatus(204);
});

export const currentUser = (req, res) => {
    const currentUser = req.user;

    res.status(200).json({
        email: currentUser.email,
        name: currentUser.name,
        gender: currentUser.gender,
        avatarURL: currentUser.avatar,
        weight: currentUser.weight,
        sportsActivity: currentUser.sportsActivity,
        waterRate: currentUser.waterRate,
    });
};

export const updateUser = catchAsync(async (req, res, next) => {
    ImageService.initUploadImageMiddleware("avatar");

    const updatedUser = await updateUserService(req.body, req.userId);

    res.status(200).json(updatedUser);
});

