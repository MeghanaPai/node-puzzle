# Build your comprehensive validation function here!
# Feel free to use any third party librarys from NPM (http://npmjs.org) for data validation.

Ajv = require("ajv")
addFormats = require("ajv-formats")
ajv = new Ajv({strict: false, allErrors: true})
addFormats(ajv)

schema = {
  type: "object",
  properties: {
    id: {type: "integer", minimum: 0},
    name: {type: "string", maxLength: 63},
    email: {type: "string", maxLength: 255, format: "email"},
    taxRate: {type: "number", minimum:0, exclusiveMaximum: 1},
    favouriteColour: {type: "string", regexp: { pattern: "/^#([0-9A-F]{3}){1,2}$/", flags: "i"} },
    interests: { type: "array", maxItems: 4, items: {type: "string", maxLength: 31 }}
    },
  required: [
    "id",
    "name",
    "email",
    "taxRate"
    ],
  additionalProperties: false
}

validate = ajv.compile(schema)

exports.validate = (ajv.compile(schema))