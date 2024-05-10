import { model } from 'mongoose';
import userSchema from '../schemas/User.js';

const User = model('User', userSchema);

export default User;
