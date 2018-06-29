import {Meteor} from 'meteor/meteor'
import {Posts} from '/db';
import Security from '/imports/api/security';
import {Comments} from '/db';
import PostServices from '/imports/api/posts/Services';
Meteor.methods({


    'secured.post_create'(post, PostersId) {
        Security.checkLoggedIn(this.userId);
       PostServices.create_post(post, PostersId);
    

    },



     'secured.comment_create'(Comment, _id) {
        Security.checkLoggedIn(this.userId);
        PostServices.create_comment(Comment, _id);
    
    },




    'secured.post_list' () {
         Security.checkLoggedIn(this.userId);

       return PostServices.post_list();
       
    },





    'secured.comments_list' (_id) {
         Security.checkLoggedIn(this.userId);
   
         return PostServices.comments_list(_id);
    },





    'secured.post_get' (_id) {
        Security.checkLoggedIn(this.userId);
         
          return PostServices.post_get(_id);
    },








 'secured.comments_count' (_id) {
    
    return Comments.find({PostId: _id}).count();


    },






    'secured.post_edit' (_id, postData) {
        Security.checkLoggedIn(this.userId);
        PostServices.post_edit(_id, postData);

    },







'secured.Comment_remove' (_id,PostId){
        Security.checkLoggedIn(this.userId);
        PostServices.comment_remove(_id,PostId);
        

    },






'secured.post_remove' (_id){
        Security.checkLoggedIn(this.userId);
        PostServices.post_remove(_id);

    },




});
