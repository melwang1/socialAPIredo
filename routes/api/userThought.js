const router = require('express').Router();

const {
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUserById,
    addFriend,
    deleteFriend,
    
  } = require('../../controllers/userController');
  
  router.route('/').get(getAllUsers).post(createUser);
  router.route('/:userId')
    .get(getUser)
    .put(updateUser)
    .delete(deleteUserById);
  
  router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend);
  
  module.exports = router;