import React from 'react';
import moment from 'moment';

export default class CommentsList extends React.Component {
    constructor() {
        super();
        this.state = {Comments: null};
    }

    componentDidMount() {
   //     Meteor.call('post.list', (err, posts) => {
      //   Meteor.call('secured.comments_list2', (err, Comments) => {
Meteor.call('secured.comments_list', this.props.match.params._id,(err, Comments) => {

 if (err) {

return alert('error :(');
                return alert(err.reason);
            }



return alert(this.props.match.params._id);

 // Meteor.call('secured.comments_list', (err, Comments) => {
            this.setState({Comments});
        });

    }

    render() {
        const {Comments} = this.state;
        const {history} = this.props;
        
        
        if (!Comments) {
            return <div>Loading....</div>
        }

        return (
            <div className="comment">
                {
                    Comments.map((comment) => {
                        return (
                            <div key={comment._id}>
                               
                                
                                <p>Post Comment: {comment.commentText} </p>
                               <p>Post Post ID: {comment.PostId} </p>
                                     <p>Post UserId: {comment.userId} </p>
                           






                            </div>
                        )
                    })}
          
  

               
            </div>
        )




    }


 



}
