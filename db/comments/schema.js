import SimplSchema from 'simpl-schema';
import moment from 'moment';


export default new SimplSchema({
 
    PostId: {
 type: String,
  optional:true
},





  commentText:{
type: String,
optional:true

}, 







    userId: {
        type: String,
        optional: true    }

,

userEmail: {
        type: String,
        optional: true    }


});

        
