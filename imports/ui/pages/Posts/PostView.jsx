















import React from 'react';
import {AutoForm, AutoField, LongTextField,SelectField } from 'uniforms-unstyled';
import PostSchema from '/db/posts/schema';
import CommentsSchema from '/db/comments/schema';
import moment from 'moment';
export default class PostView extends React.Component {
    constructor(props) {
        super(props);
     this.state = {Comments: null};
        this.state = {post: null};
      this.state = {Comment: null};







    }

  submit = (Comment) => {
      
        Meteor.call('secured.comment_create', Comment,  this.props.match.params._id, this.userId, (err) => {           
 

            if (err) {
 alert('error!');

alert(this.props.match.params._id);
                return alert(err.reason);

            }






Meteor.call('secured.post_get', this.props.match.params._id, (err, post) => {
post.CommentCount= post.CommentCount +1;


 


Meteor.call('secured.post_edit', this.props.match.params._id, post, (err) => {           


            if (err) {
                return alert(err.reason);
            }
            
        });




         
        });













            alert('comment created!');

         

        });
    };
    componentDidMount() {



       
Meteor.call('secured.post_get', this.props.match.params._id, (err, post) => {
post.views= post.views +1;


 


Meteor.call('secured.post_edit', this.props.match.params._id, post, (err) => {           


            if (err) {
                return alert(err.reason);
            }
            
        });




            this.setState({post});
        });





Meteor.call('secured.comments_list',this.props.match.params._id, (err, Comments) => {

 if (err) {


alert(this.props.match.params._id);
                return alert(err.reason);
            }


 this.setState({Comments});
});

 















    }

    










    render() {
        const {history} = this.props;
        const {post} = this.state;
        const {Comment} = this.state;
        const {Comments}= this.state;
        if (!post) {
            return <div>Loading  </div>
        }

          if (!Comments) {
            return <div>Loading....</div>
        }   



        return (
          
               <div className="Comment">    
        <p>Post Title: {post.title} </p>           
         <p>Post id: {post._id} </p>
          <p> Views  {post.views} </p>

          <p>Type:{post.Posttype}</p>
          <p> Description: {post.description}</p>
                  
                
                














{



Comments.map((Comment) => {  
                        return (
                            <div key={Comment._id}>
                               
                                 <p> {Comment.commentText} </p>
                                 <p> PostId: {Comment.PostId}</p>
                              <p>UserId: {Comment.userId}</p>
                                   <p>UserEmail: {Comment.userEmail}</p>
                               


<button onClick={() =>{Meteor.call('secured.Comment_remove', Comment._id, (err) => {
  


Meteor.call('secured.comments_count', this.props.match.params._id, (err,CommentCount) => {





Meteor.call('secured.post_get', this.props.match.params._id, (err, post) => {
post.CommentCount= CommentCount;


 


Meteor.call('secured.post_edit', this.props.match.params._id, post, (err) => {           


            if (err) {
                return alert(err.reason);
            }
            

        });



}); 
        










});
         if (err) {
               alert('Error!')
                return alert(err.reason);
            }
            alert('Comment deleted!')
        });
                        }

         } > Delete Comment
    </button>





                            </div>
                        )
                    } )

}






















 
              <AutoForm onSubmit={this.submit} schema={CommentsSchema}>
                    
                    <LongTextField name="commentText"/>
                    

                    <button type='submit'>Add Comment</button>
                    <button type='button' onClick={() => history.push('/posts')}>Back to posts</button>
                





<button onClick={() =>{Meteor.call('secured.post_remove', this.props.match.params._id, (err) => {

            if (err) {
                return alert(err.reason);
            }
            alert('Post deleted!')
        });
                        }

         } > Delete Post
    </button>






</AutoForm>







            </div>
        )
    }






















}
