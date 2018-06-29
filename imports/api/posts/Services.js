import {Meteor} from 'meteor/meteor'
import {Posts} from '/db';
import {Comments} from '/db';
import Security from '/imports/api/security';

export default class PostServices {

    static create_post(post, PostersId){
        post.userId = this.userId;
        post.views=0;
        post.CommentCount=0;
        Posts.insert(post);
        
    }

      
     static create_comment(Comment, _id){
         
        Comment.userId = this.userId;
        Comment.userEmail=Meteor.user(this.userId).emails[0].address;
        Comment.PostId= _id;
        Comments.insert(Comment);
        PostServices.update_CommentCount(_id);
    
   
        
    }





     static update_CommentCount(_id){
         
         
        const post_copy = PostServices.post_get(_id);
        
        post_copy.CommentCount=Comments.find({PostId: _id}).count();
        PostServices.post_edit(_id,post_copy);
     }

    static post_list(){
        let post= Posts.createQuery({
              title: 1,
              CreatedAt: 1,
              views: 1,
              Posttype: 1,
              description: 1,
              CommentCount: 1,
                  author:{ 
                 _id: 1
                  
             }
        }); 

     return post.fetch();
    }



    static post_edit(_id,postData){
   
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
    }


    static post_remove(_id, PostId){
        Posts.remove({_id: _id, userId: this.userId});       
        Comments.remove({   PostId: _id, userId: this.userId});
    }


    
    static comment_remove(_id,PostId,PostersId){
        Comments.remove({_id: _id, userId: this.userId});
        Comments.remove({_id: _id, PostersId: this.userId});           
        PostServices.update_CommentCount(PostId);

    }



  static post_get(_id){
      let post = Posts.createQuery({ 
          $filters: {_id: _id},
          title: 1,
          CreatedAt: 1,
          views: 1,
          Posttype: 1,
          description: 1,
          CommentCount: 1,
          _id: 1
              
        });
         
         
         return post.fetchOne();


    }


   static comments_list(_id){
          let comments = Comments.createQuery({
             $filters: {PostId: _id},
             commentText:1,
             userEmail:1
             
        }); 

     return comments.fetch();
    }








}
