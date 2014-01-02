var Category = kendo.data.Model.define({
    id: "id",
    fields: {
        "name": {
            type: "string"
        }
    }
});

var Product = kendo.data.Model.define({
    id: "id",
    fields: {
        "name": {
            type: "string"
        },
        "minCount": {
            type: "number"
        },
        "actualCount": {
            type: "number"
        },
        "categoryId": {
            type: "number"
        }
    }
});