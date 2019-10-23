const { Schema } = require('mongoose')

const UserSchema = new Schema(
  {
    first_name: String,
    last_name: String,
    username: {
      type: String,
      required: false
    },
    email: {
      type: String,
      required: false
    }
  },
  {
    timestamps: {}
  }
)

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
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User' 
    },
  },
  {
    timestamps: {}
  }
)

// dependent destroy
UserSchema.pre('remove', function(next) {
  this.model('Post').deleteMany({ user: this._id }, next);
})

module.exports = { PostSchema, UserSchema }
