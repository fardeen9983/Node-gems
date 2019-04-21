//Schema validation using Joi for nested data structure
const Joi = require('joi');

//The complex input structure to be validated
const arrayStrings = ['banana','bacon','cheese'];
const arrayObjects = [{example : 'example1'},{example : 'example2'}];
const userInput = {
    personalInfo : {
        streetAddress : '123987987',
        city : 'kljlkajd',
        state : 'fl'
    }, 
    preferences : arrayStrings,
    preferenceObjects : arrayObjects
}

//For nested objects we need to create seperate schemas and combine them for the entire structure validation

//Schema for a simple Object
const personalInfoSchema = Joi.object().keys({
    streetAddress : Joi.string().trim().required(),
    city : Joi.string().trim().required(),
    state : Joi.string().required().length(2)
});

//Schema for an array of objects. Uses Joi.array and items is an helper method which sets up the schema for every item in the array
const preferencesSchema = Joi.array().items(Joi.string()); 

//Schema for array of objects
const preferenceObjectsSchema = Joi.array().items(Joi.object().keys({
    example : Joi.string().trim().required()
}));

//Combine the two preferences  together to create a single schema
const userInfoSchema = Joi.object().keys({
    preferences : preferencesSchema,
    personalInfo : personalInfoSchema,
    preferenceObjects : preferenceObjectsSchema
}); 

//Validate UserInput fields with a sample example
Joi.validate(userInput,userInfoSchema,(err,result)=>{
    if(err)
        console.log(err);
    else
        console.log(result);      
});