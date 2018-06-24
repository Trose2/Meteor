import {Meteor} from 'meteor/meteor'
import {Posts} from '/db';
import Security from '/imports/api/security';
import {Comments} from '/db';
Meteor.methods({
    'secured.post_create'(post) {
        Security.checkLoggedIn(this.userId);
        post.userId = this.userId;
        post.views=0;
        post.CommentCount=0;
      
       Posts.insert(post);
        






    },




 'secured.comment_create'(Comment, _id, poster_id) {
        Security.checkLoggedIn(this.userId);
        postersUserId= poster_id; 
        Comment.userId = this.userId;
 Comment.userEmail=Meteor.user(this.userId).emails[0].address;
      
       Comment.PostId= _id;
        Comments.insert(Comment);
    },







    'secured.post_list' () {
        return Posts.find().fetch();
    },




'secured.comments_list2' () {
        return Comments.find().fetch();
    },

 

 'secured.comments_count' (_id) {
   
return Comments.find({PostId: _id}).count();


    },

  'secured.comments_list' (_id) {
     

return Comments.find({PostId: _id}).fetch();

    },


    'secured.post_listSingle' (_id){

       return Posts.findone(_id).fetch();
    },

    'secured.views_update'(_id,postData) {
var NewViews = postData.views+1;
Posts.update({_id: _id, userId: this.userId}, {
             
 $set: {
views: NewViews

}
}
);
},














    'secured.post_edit' (_id, postData) {
        Posts.update({_id: _id, userId: this.userId}, {
            $set: {
                title: postData.title,
                description: postData.description,
               Posttype: postData.Posttype,
               views: postData.views,
               CommentCount: postData.CommentCount

            }
        }

 );
    },






'secured.Comment_remove' (_id){
        Comments.remove({_id: _id, userId: this.userId});
        Comments.remove({_id: _id, postersUserId: this.userId});

    },


    'secured.post_remove' (_id){
        Posts.remove({_id: _id, userId: this.userId});




    },

'secured.post_remove' (_id){
        Posts.remove({_id: _id, userId: this.userId});
 Comments.remove({  PostId: _id, userId: this.userId});


    },




    'secured.post_get' (_id) {
         
        return Posts.findOne(_id);
    },



 'secured.Comments_get' (_id) {
        return Comments.findOne(_id);
    }




});
