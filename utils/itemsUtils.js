
/**
 * Should receive the size object to make a sum and autocalculate "quantity" field
 * @param {*} sizeObject 
 * @returns 
 */
const quantityCalulator = (sizeObject)=>{

    return Object.values(sizeObject).reduce((acc,curr)=>{return acc + curr},0)

};

module.exports = {quantityCalulator};