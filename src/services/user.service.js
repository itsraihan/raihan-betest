import User from '../database/models/User';

class UserService {
  async createUser(userData) {
    return await User.create(userData);
  }

  async getUserByAccountNumber(accountNumber) {
    return await User.findOne({ accountNumber });
  }

  async getUserByIdentityNumber(identityNumber) {
    return await User.findOne({ identityNumber });
  }

  async updateUser(userId, newData) {
    return await User.findByIdAndUpdate(userId, newData, { new: true });
  }

  async deleteUser(userId) {
    return await User.findByIdAndDelete(userId);
  }
}

module.exports = new UserService();
