import multer from "multer";
import path from "path";
import Jimp from "jimp";
import HttpError from "../helpers/HttpError.js";
import { v4 } from "uuid";
import * as fse from "fs-extra"

export class ImageService {
    static async saveImage(file, options, ...pathSegments) {
        if (file.size > (options?.maxFileSize ? options.maxFileSize * 1024 * 1024 : 1 * 1024 * 1024)) {
            throw HttpError(400, "File is too large");
        }
        const fileName = `${v4()}.jpeg`;
        const tmpFilePath = path.join(process.cwd(), "tmp")
        const avatarsFolderPath = path.join(process.cwd(), ...pathSegments);

        await fse.ensureDir(avatarsFolderPath);

        const avatar = await Jimp.read(file.buffer);

        await avatar
            .cover(options?.width ?? 300, options?.height ?? 300)
            .quality(90)
            .writeAsync(path.join(tmpFilePath, fileName));

        return path.join("avatars", fileName);
    }


}