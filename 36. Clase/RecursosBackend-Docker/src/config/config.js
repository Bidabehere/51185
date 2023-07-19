const MONGO_URL = ''

export default {
    mongo:{
        URL: process.env.MONGO_URL || 'http://localhost:27017'
    }
}