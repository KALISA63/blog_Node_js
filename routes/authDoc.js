const createUser={
    tags: ["AUTHENTICATION"],
    description: "REGISTER AND LOG IN TO USER",
    requestBody:{
        content:{
            "application/json":{
                schema:{
                    type:"object",
                    properties:{
                        username:{
                            type:"string",
                            example:"jack"
                        },
                        email:{
                            type:"string",
                            example:"jack@gmail.com"
                        },
                        password:{
                            type:"string",
                            example:"12345"
                        },
                        // role:{
                        //     type:"string",
                        //     example:"admin"
                        // },
                    }
                }
            }
        }
    },
    responses: {
        200: {
            description: "OK",

            content: {
                "application/json": {
                    Schema: {
                        type: "object",
                        example: {
                            count: 0,
                            user: [],
                        },
                    },
                },
            },
        },
    },
}

const logUser={
    tags: ["AUTHENTICATION"],
    description: "REGISTER AND LOG IN TO USER",
    requestBody:{
        content:{
            "application/json":{
                schema:{
                    type:"object",
                    properties:{
                        username:{
                            type:"string",
                            example:"jack"
                        },
                        password:{
                            type:"string",
                            example:"12345"
                        },
                        // role:{
                        //     type:"string",
                        //     example:"admin"
                        // },
                    }
                }
            }
        }
    },
    responses: {
        200: {
            description: "OK",

            content: {
                "application/json": {
                    Schema: {
                        type: "object",
                        example: {
                            count: 0,
                            user: [],
                        },
                    },
                },
            },
        },
    },
}

const postDocs= {
    "/api/auth/register":{
        post:createUser
},
"/api/auth/login":{
    post:logUser
}
}
module.exports = postDocs;
