const { Schema } = require('mongoose')

const PostSchema = new Schema(
  {
    userId: {
      type: Number,
      required: false,
      default: 0
    },
    title: {
      type: String,
      required: false,
      default: 'New Headline'
    },
    body: {
      type: String,
      required: false,
      default: 'New blog post body text ...'
    }
  },
  {
    timestamps: {}
  }
)

module.exports = PostSchema
