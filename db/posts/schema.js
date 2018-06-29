import SimplSchema from 'simpl-schema';
import moment from 'moment';
import PostTypesEnum from '/db/posts/enums/types';

export default new SimplSchema({
    title: String,
    description: String,

    CommentCount: {
        type: Number,
        optional: true 
     },

    views: {

        type: Number,
        optional: true 
    },

    CreatedAt:{
        type: Date,
        autoValue: function(){       
             return new Date()
        },
             optional:true
    }, 



    Posttype: {
        type: String,
        optional:true,
        allowedValues: _.values(PostTypesEnum)
    },

    userId: {
        type: String,
        optional: true    
    }
});



