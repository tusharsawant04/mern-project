// const dbUser = process.env.DB_USERNAME;
// const dbPassword = process.env.DB_PASSWORD;
// const dbDatabase = process.env.DB_DATABASE;
// const dbHost = process.env.DB_HOST;
// const dbPORT = process.env.DB_PORT;
// const mongoURI = `mongodb://${dbUser}:${dbPassword}@${dbHost}:${dbPORT}/${dbDatabase}?authSource=admin`;

// module.exports =  {
//     'host': dbHost,
//     'user': dbUser,
//     'password':dbPassword,
//     'port' : dbPORT,
//     'database' : dbDatabase,
//     'mongoUri' : mongoURI
// };
const dbUser = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;
const dbDatabase = process.env.DB_DATABASE;
const dbHost = process.env.DB_HOST;

const mongoURI = `mongodb+srv://${dbUser}:${dbPassword}@${dbHost}/?retryWrites=true&w=majority`;

module.exports = {
    'mongoUri': mongoURI,
    'port': process.env.PORT || 5000,
    'email': {
        'host': process.env.EMAIL_HOST,
        'port': process.env.EMAIL_PORT,
        'user': process.env.EMAIL_USER,
        'password': process.env.EMAIL_PASSWORD,
        'encryption': process.env.EMAIL_ENCRYPTION
    },
    'from': process.env.FROM
};
