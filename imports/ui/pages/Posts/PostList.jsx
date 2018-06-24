import React from 'react';
import moment from 'moment';

export default class PostList extends React.Component {
    constructor() {
        super();
        this.state = {posts: null};
        this.state ={comments:null};
    }

    componentDidMount() {





 Meteor.call('secured.comments_count', this.props.match.params._id, (err, comments) => {
            this.setState({comments});
        });



 Meteor.call('secured.post_list', (err, posts) => {
            this.setState({posts});
        });


   
         
    }


    render() {
        const {posts} = this.state;
        const {history} = this.props;
        
        
        if (!posts) {
            return <div>Loading....</div>
        }

        return (
            <div className="post">
                {
                    posts.map((post) => {
                        return (
                            <div key={post._id}>
                                <p>Post id: {post._id} </p>
                                 <p>views: {post.views}, Comments: {post.CommentCount} </p>
                                <p>Post title: {post.title}, Post Description: {post.description} Type: {post.Posttype} Created  {JSON.stringify(post.CreatedAt)} </p>
                                
                                
                                <button onClick={() => {
                                    history.push("/posts/edit/" + post._id)
                                }}> Edit post
                                </button>

                           <button onClick={() => {
                                    history.push("/posts/View/" + post._id)
                                }}> View post
                                </button>


<button onClick={() =>{Meteor.call('secured.post_remove', post, (err) => {

            if (err) {
                return alert(err.reason);
            }
            alert('Post deleted!')
        });
                        }

         } > Delete Post
    </button>





                            </div>
                        )
                    })}
          
  

                <button onClick={() => history.push('/posts/create')}>Create a new post</button>
            </div>
        )




    }


 




}
