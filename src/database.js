const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/diario_online', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false
})
    .then(db => console.log('DB is connect'))
    .catch(err => console.error(err));