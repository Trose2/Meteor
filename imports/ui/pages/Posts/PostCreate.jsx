import React from 'react';
import {AutoForm, AutoField, LongTextField, SelectField, HiddenField} from 'uniforms-unstyled';
import PostSchema from '/db/posts/schema';
import moment from 'moment';

export default class PostCreate extends React.Component {
    constructor() {

        super();    
        this.state = {post: null};
     
    }


    submit = (post) => {
        Meteor.call('secured.post_create', post, this.userId, (err) => {
            if (err) {
                return alert(err.reason);
            }
           
            alert('Post added!');
            
        });
    };
  



    render() {  
 
        const {history} = this.props;                
        
        return (

            <div className="post">

                <AutoForm onSubmit={this.submit} schema={PostSchema}>
                    <AutoField name="title"/>
                    <LongTextField name="description"/>
                    <SelectField name="Posttype" type="string"   allowedValues={["Nature", "Psychology","Music","Programming","Project Management","Other"]}  />

                    <button type='submit'>Add post</button>
                    <button onClick={() => history.push('/posts')}>Back to posts</button>

                </AutoForm>



            </div>
        )
    }
}
