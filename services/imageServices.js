import path from "path";
import Jimp from "jimp";
import {HttpError} from "../utils/HttpError.js";
import * as fse from "fs-extra"
import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";

dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET,
});

export class ImageService {
    static initUploadImageMiddleware(fieldName) {
        const multerStorage = multer.memoryStorage();
        const multerFilter = (req, file, cbk) => {
            if (file.mimetype.startsWith("image/")) {
                cbk(null, true);
            } else {
                cbk(HttpError(400, "Upload images"), false);
            }
        };
        return multer({
            storage: multerStorage,
            fileFilter: multerFilter,
        }).single(fieldName);
    }

    static async saveImage(file, userId, options, ...pathSegments) {
        if (file.size > (options?.maxFileSize ? options.maxFileSize * 1024 * 1024 : 1 * 1024 * 1024)) {
            throw HttpError(400, "File is too large");
        }
        const fileName = `${userId}.jpeg`;
        const avatarsFolderPath = path.join(process.cwd(), ...pathSegments);

        await fse.ensureDir(avatarsFolderPath);

        const avatar = await Jimp.read(file.buffer);

        await avatar
            .quality(100)
            .writeAsync(path.join(avatarsFolderPath, fileName));

        const resultUrl = await cloudinary.uploader.upload(
            path.join(avatarsFolderPath, fileName),
            {
                public_id: `${userId}`,
            }
        );


        await fse.remove(path.join(avatarsFolderPath, fileName));

        return resultUrl.secure_url;
    }


}