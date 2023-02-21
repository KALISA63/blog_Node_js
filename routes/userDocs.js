const Getuser = {
    tags: ["USERS"],
    description: "GET USER",
    description: "This Api generated for accessing a Post only by the post owner by using ID of the post",
    // security:[{
        // token :[]
    // }],
    parameters: [
        {
            name: "id",
            in: "path",
            description: "id of user",
            type: "string",
            example: "63e9227fc807f6e9217d955a"
        }
    ],
    responses: {
        200: {
            description: "OK",
            content: {
                "application/json": {
                    type: 'object',
                    example: {
                        status: "success",
                        data: []
                    },
                },
            },
        },
    },

};


const UpdateUser={
    tags: ["USERS"],
    description: "UPDATE USER",
    parameters: [
        {
            name: "id",
            in: "path",
            description: "id of user",
            type: "string",
            example: "63e9227fc807f6e9217d955a"
        }
    ],
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
                            type:String,
                            required:true,
                        },
                        password:{
                            type:"string",
                            example:"12345"
                        },
                        userId:{
                            type:"string",
                            example:"admin"
                        },
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


const DeleteUser={
    tags: ["USERS"],
    description: "DELETE USER",
    parameters: [
        {
            name: "id",
            in: "path",
            description: "id of user",
            type: "string",
            example: "63e9227fc807f6e9217d955a"
        }
    ],
    requestBody:{
        content:{
            "application/json":{
                schema:{
                    type:"object",
                    properties:{
                        userId:{
                            type:"string",
                            example:"admin"
                        },
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



const userGet= {
    "/api/users/getById/{id}":{
        get:Getuser,
},
"/api/users/updateById/{id}":{
    put:UpdateUser,
},
"/api/users/deleteById/{id}":{
    delete:DeleteUser
}
}
module.exports = userGet;
