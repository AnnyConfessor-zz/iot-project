require('dotenv').config();

module.exports = {
    FIREBASE_CONFIGS: JSON.parse(process.env.FIREBASE_CONFIGS)
}
