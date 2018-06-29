import React from 'react';
import {AutoForm, AutoField, LongTextField,SelectField } from 'uniforms-unstyled';
import PostSchema from '/db/posts/schema';
import CommentsSchema from '/db/comments/schema';
import moment from 'moment';

export default class PostView extends React.Component {
    constructor() {
        super();
        this.state = {comments: null};
       
    }


      // Create Comment and update Comment count
      submit = (Comment) => {
         
             
        Meteor.call('secured.comment_create', Comment,  this.props.match.params._id,  (err) => {           

            if (err) {
                


                    return alert(err.reason);

            }



            //update comment state
            Meteor.call('secured.comments_list',this.props.match.params._id, (err, comments) => {

                if (err) {
                   
                    return alert(err.reason);
                }


                this.setState({comments});
            });
        
            alert('comment created!');        
        });
   
    };
    
     

    componentDidMount() {

        // Update views and fetch Post
        Meteor.call('secured.post_get', this.props.match.params._id, (err, post) => {     
        
            post.views= post.views +1;
       
            Meteor.call('secured.post_edit', this.props.match.params._id, post, (err) => {           


                if (err) {
                   alert(post._id);
                    return alert(err.reason);
                }
            
            });
                this.setState({post}); 
        });




        //fetch Comments
        Meteor.call('secured.comments_list',this.props.match.params._id, (err, comments) => {

            if (err) {
                alert(this.props.match.params._id);
                return alert(err.reason);
            }


            this.setState({comments});
        });



    }



    render() {
        const {history} = this.props;
        const {post} = this.state;
        const {Comment} = this.state;
        const {comments}= this.state;
         
        if (!post) {
            return <div>Loading  </div>
        }

          if (!comments) {
            return <div>Loading....</div>
        }   



        return (
          
               <div className="Comment">    
               <p >Post Title: {post.title} </p>           
               <p> Views  {post.views} Posted {JSON.stringify(post.CreatedAt).slice(1,11)}</p>
               <p>Type:{post.Posttype}</p>
               <p>Description</p>
               <p className="TextBox">  {post.description}</p>
               <p> Comments</p>

            {


            comments.map((Comment) => {  
                return (

                    <div key={Comment._id}> 
                              
                       <p className="TextBox"> {Comment.commentText} </p>                          
                       <p>UserEmail: {Comment.userEmail}</p>
                     
                         <button onClick={() =>{Meteor.call('secured.Comment_remove', Comment._id, this.props.match.params._id, post.userId, (err) => {
               
                           if (err) {
                               alert('Error!')
                               return alert(err.reason);
                           }

                             // update comment
                           Meteor.call('secured.comments_list',this.props.match.params._id, (err, comments) => {

                               if (err) {
                                    alert(this.props.match.params._id);
                               return alert(err.reason);
                           }


                        this.setState({comments});
                    });
                           alert('Comment deleted!')
                      });
                      }

                      } > Delete Comment </button>
                     
                    </div>
                    )
             })

         }


 
          <AutoForm onSubmit={this.submit}  schema={CommentsSchema}>
                    
               <LongTextField name="commentText"/>                    
               <button type='submit' name= 'action' value='createcomment'>Add Comment</button>
               <button type='button' onClick={() => history.push('/posts')}>Back to posts</button>
              

         </AutoForm>
         <p></p>
         <button onClick={() =>{Meteor.call('secured.post_remove', this.props.match.params._id, this.props.match.params._id, (err) => {
                    
              if (err) {
                  return alert(err.reason);
              }
                                     
               alert('Post deleted!');
               history.push('/posts'); 
          });
          }
          } > Delete Post
          </button>



     </div>
    )
    }



}
