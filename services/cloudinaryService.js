import { v2 as cloudinary } from "cloudinary";
import HttpError from "../utils/HttpError.js";

cloudinary.config({
    cloud_name: "dx4oqrd50",
    api_key: "834871444597432",
    api_secret: "lO18cZXn7eybEvfFNUYblr13p3k",
});

async function uploadFile(filePath) {
    try {
        const result = await cloudinary.uploader.upload(filePath);
        return result;
    } catch (error) {
        throw HttpError(400, "Error uploading file");
    }
}