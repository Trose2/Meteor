import React from 'react';
import moment from 'moment';
import {withTracker} from 'meteor/react-meteor-data';
import {Posts} from '/db';
export default class PostList extends React.Component {
    constructor() {
        super();
        this.state = {posts: null};
     
    }

    componentDidMount() {




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
                            <div key={post._id } >
                                <p> Title:
                                <a href={"/posts/View/" + post._id} target= "_self"  title={post.title}> {post.title} </a>  
                                 </p>
                                
                               
                                <p> Category: {post.Posttype}</p>
                                <p>views: {post.views}, Comments: {post.CommentCount} Posted: {JSON.stringify(post.CreatedAt).slice(1,11)}</p>
                                <p> Description: </p>
                                <p className="TextBox">    {post.description}  </p>
                               
                                
                                <button onClick={() => {
                                    history.push("/posts/edit/" + post._id)
                                }}> Edit post </button>

                                
                                <p></p>
                            </div>
                        )
                    })}
                 <p></p>
  

                <button onClick={() => 
                    history.push('/posts/create')}>Create a new post</button>
             </div>
        )




    }


 




}




