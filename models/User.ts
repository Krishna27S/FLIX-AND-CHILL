import { Schema, model, models } from 'mongoose';

const userSchema = new Schema({
  name: String,
  email: {
    type: String,
    unique: true,
    required: [true, 'Email is required'],
  },
  password: String,
  image: String,
  favorites: [String],
  watchlist: [String],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User = models.User || model('User', userSchema);
export default User;