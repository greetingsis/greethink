const router = require("express").Router();

const b64converter = require("../middlewares/b64converter");
const errorHandler = require("../middlewares/errorHandler");
const { sendUploadToGCS, multer } = require("../middlewares/image");

// // UPLOAD GAMBAR(BACKGROUND) NGEMBALIIN URL GCP
// router.post(
//   "/bg-upload",
//   // kasih ke multer buat diolah
//   multer.single("image"),
//   // upload req.file ke gcs dan dapat url-nya
//   sendUploadToGCS,

//   (req, res, next) => {
//     if (req.file) {
//       // kirim url ke client
//       res.status(200).json(req.file.cloudStoragePublicUrl);
//     } else {
//       res.status(500).send("Unable to upload");
//     }
//   }
// );

// UPLOAD KARTU NGEMBALIIN URL GCP
router.post(
  "/upload",
  // rubah base64 ke buffer untuk dapat disimpan di req.file
  b64converter,
  // upload req.file ke gcs dan dapat url-nya
  sendUploadToGCS,

  (req, res, next) => {
    if (req.file) {
      // kirim url ke client
      console.log(req.file.cloudStoragePublicUrl);
      console.log("sampai disini");
      let a = req.file.cloudStoragePublicUrl.toString();
      console.log(a);
      res.status(200).json(a);
    } else {
      res.status(500).send("Unable to upload");
    }
  }
);

router.use(errorHandler);

module.exports = router;
