
import { v2 as cloudinary } from "cloudinary";
import streamifier from "streamifier";

const uploadSingleImageIntoCloudinary = (image:string) => {
//   here image is base64 string
//   return new Promise((resolve, reject) => {
//     const stream = cloudinary.uploader.upload_stream(
//       { folder: "book-shop" },
//       (error, result) => {
//         if (result) resolve(result);
//         else reject(error);
//       }
//     );
//     streamifier.createReadStream(Buffer.from(image, 'base64')).pipe(stream);
//   });
}

export default uploadSingleImageIntoCloudinary