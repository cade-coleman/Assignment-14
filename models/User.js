const { Schema, model } = require('mongoose');


const userSchema = new Schema(
    {
        userName:{
            type: String,
            unique: true,
            required: true,
        },
        email:{
            type: String,
            unique: true,
            required: true,
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            },
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            },
        ]
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
    )
    

    userSchema.virtual('friendsCount').get(function() {
        return this.friends.length;
    })

    const User = model('user', userSchema);
    
    module.exports = User;