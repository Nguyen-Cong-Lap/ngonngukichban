const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const postSchema = new Schema(
  {
    content: { type: String, required: true },
    postedBy: { type: Schema.Types.ObjectId, ref: "User" },
    image: {
      url: String,
      public_id: String,
    },
    likes: [{ type: Schema.Types.ObjectId, ref: "User" }],
    comments: [
      {
        text: String,
        postedBy: { type: Schema.Types.ObjectId, ref: "User" }, // Người bình luận
        createdAt: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true }
);

module.exports = model("Post", postSchema);
