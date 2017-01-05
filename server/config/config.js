const envKeys = {
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT,
    MONGO_URI: process.env.MONGODB_URI
}

var env = envKeys.NODE_ENV || 'development';

if (env === 'development') {
    envKeys.PORT = 3000;
    envKeys.MONGO_URI = 'mongodb://localhost:27017/BookmarkApp'
} else if (env === 'test') {
    envKeys.PORT = 3001;
    envKeys.MONGO_URI = 'mongodb://localhost:27017/TestBookmarkApp';
}

module.exports = {
    envKeys
}
