const router = require('express').Router();

const {
    getAllThoughts,
    getThoughts,
    createThought,
    deleteThought,
    updateThought,
    createReaction,
    deleteReaction,
} = require('../../controllers/thoughtController');
 
router.route('/').get(getAllThoughts).post(createThought);

router.route('/:thoughtId')
    .get(getThoughts)
    .put(updateThought)
    .delete(deleteThought);

router.route('/:thoughtId/reactions').post(createReaction);

router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;