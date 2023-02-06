const sizeValidators = (sizeObject)=>{

    const expectedKeys = ["XXL","XL","L","M","S","XS","36","38","40","42","44","46"];

    const hasExpectedKeys = expectedKeys.every(element=> element in sizeObject);

    return (hasExpectedKeys) ? true : false;

};

module.exports = {sizeValidators};
