const { Schema, model } = require('mongoose');


const thoughtSchema = new Schema(
    {
        thoughtText:{
            type: String,
            unique: true,
            required: true,
        },
        createdAt:{
            type: Date,
            default: Date.now,
            get: (currentDate) => dateFormat(currentDate)      
        },
        username:{
            type: String,
            required: true,
        },
        reactions:[
            {
                type: Schema.Types.ObjectId,
                ref: 'Reaction',
            }
        ]
    },
    {
        toJSON: {
        virtuals: true,
        },
        id: false,
      }
)
//virtual thought schema for reactions
thoughtSchema.virtual("reactionCount").get(function () {
    return this.reaction.length;
  });
  //create variable to export Thought
  const Thought = model("thought", thoughtSchema);
  // exporting Thought model
  module.exports = Thought;

