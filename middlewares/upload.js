import multer from "multer";
import { multerSaveFilesOrg } from "multer-savefilesorg";
// import path from "path";
export const localUpload = multer({ dest: 'uploads/'});

export const reportImageUpload = multer({
  storage: multerSaveFilesOrg({
    apiAccessToken: process.env.SAVEFILESORG_API_KEY,
        relativePath: '/G-eye/user/*'
  }),
  preservePath: true
});



export const agentAvatarUpload = multer({
  storage: multerSaveFilesOrg({
    apiAccessToken: process.env.SAVEFILESORG_API_KEY,
        relativePath: '/G-eye/agent/*'
  }),
  preservePath: true
});


// // Configure storage for uploaded files
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/"); 
//   },
//   filename: (req, file, cb) => {
//     const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
//     cb(null, `${file.fieldname}-${uniqueSuffix}${path.extname(file.originalname)}`); 
//   },
// });

// // File filter to restrict file types (optional)
// const fileFilter = (req, file, cb) => {
//   const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
//   if (allowedTypes.includes(file.mimetype)) {
//     cb(null, true); 
//   } else {
//     cb(new Error("Only .jpeg, .jpg, and .png files are allowed"), false);
//   }
// };

// // Set up multer with the configuration
// export const upload = multer({
//   storage,
//   limits: { fileSize: 5 * 1024 * 1024 }, // Set file size limit to 5MB
//   fileFilter,
// });
