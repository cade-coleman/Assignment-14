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
        ]
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
    )
    
    const User = model('user', userSchema);
    module.exports = User;