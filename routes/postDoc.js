const createPost={
    tags: ["POST"],
    description: "POST CREATION",
    requestBody:{
        content:{
            "application/json":{
                schema:{
                    type:"object",
                    properties:{
                        title:{
                            type:"string",
                            example:"Economics"
                        },
                        desc:{
                            type:"string",
                            example:"breaking news"
                        },
                        photo:{
                            type:"string",
                            example:""
                        },
                        username:{
                            type:"Kalisa",
                            example:"Journalist"
                        },
                        categories:{
                            type:"array",
                            example:"music"
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



const postDocs= {
    "/api/posts/register":{
        post:createPost,
},
// "/api/users/updateById/{id}":{
//     put:UpdateUser,
// },
// "/api/users/deleteById/{id}":{
//     delete:DeleteUser
// }
}
module.exports = postDocs;