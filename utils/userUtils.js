const bcrypt = require('bcrypt');

/**
 * Should receive a password (string)
 * @param {*} password 
 */
const encryptPass = async(password)=>{

    const saltRounds = 10;

    const hashedPassword = await bcrypt.hash(password, saltRounds);

    return hashedPassword;
};

/**
 * Should receive the password (string) and the encrypted password (hash) to check the autentication
 * @param {*} password 
 * @param {*} encryptPass 
 * @returns 
 */
const comparePass = async(password, encryptPass)=>{

    return await bcrypt.compare(password, encryptPass);

};

module.exports = {encryptPass,comparePass};