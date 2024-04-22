import User from '../database/models/User';
import KafkaProducer from './KafkaProducer.service';

class UserService {
  async createUser(userData) {
    const user = new User({...userData});
    await user.save();
    await KafkaProducer.sendMessage('topic_raihan_betest', user);
    return user;
  }

  async getUserByAccountNumber(accountNumber) {
    return await User.findOne({ accountNumber });
  }

  async getUserByIdentityNumber(identityNumber) {
    return await User.findOne({ identityNumber });
  }

  async getUsers() {
    return await User.find({});
  }

  async updateUser(userId, newData) {
    return await User.findByIdAndUpdate(userId, newData, { new: true });
  }

  async deleteUser(userId) {
    return await User.findByIdAndDelete(userId);
  }
}

module.exports = new UserService();
