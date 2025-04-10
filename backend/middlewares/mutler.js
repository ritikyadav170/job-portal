import multer from "multer";

const storage = multer.memoryStorage(); // Store files in memory before processing

const upload = multer({
    storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // Limit file size (5MB max)
});

export const singleUpload = upload.single("profilePhoto");
