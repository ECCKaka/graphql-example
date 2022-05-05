const { model, Schema } = require("mongoose");

const postSchema = new Schema({
	body: String,
	username: String,
	createdAt: String,
	comments: [
		{
			type: Schema.Types.ObjectId,
			ref: "Comment",
		},
	],
	likes: [
		{
			username: String,
			createdAt: String,
		},
	],
	user: {
		type: Schema.Types.ObjectId,
		ref: "User",
	},
});

module.exports = model("Post", postSchema);
