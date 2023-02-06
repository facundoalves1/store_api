
//Obtain size object and calculate the total of the item
const quantityCalulator = (sizeObject)=>{

    return Object.values(sizeObject).reduce((acc,curr)=>{return acc + curr},0)

};

module.exports = {quantityCalulator};