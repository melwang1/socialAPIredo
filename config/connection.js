const mongoose = require('mongoose');

mongoose.connect(process.env.MONOGDB_URI || 'mongodb://localhost:27017/TheSocialMongoose',{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
});


module.exports = mongoose.connection