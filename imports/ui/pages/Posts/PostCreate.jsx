import React from 'react';
import {AutoForm, AutoField, LongTextField, SelectField, HiddenField} from 'uniforms-unstyled';
import PostSchema from '/db/posts/schema';
import moment from 'moment';

export default class PostCreate extends React.Component {
    constructor() {
        super();

 


    }



































    submit = (post) => {
  
 Meteor.call('secured.post_create', post, (err) => {

            if (err) {
                return alert(err.reason);
            }
            alert('Post added!')
        });
    };




    render() {

        
        const {history} = this.props;

 
  var testV= new Date().toGMTString()
               
                
        return (
            <div className="post">
                <AutoForm onSubmit={this.submit} schema={PostSchema}>
    
                    <AutoField name="title"/>
                    <LongTextField name="description"/>
                    

             

                    <SelectField name="Posttype" type="string"   allowedValues={["Nature", "Psychology","Music","Programming","Project Management","Other"]}  />

                   

                    <button type='submit'>Add post</button>
                    <button onClick={() => history.push('/posts')}>Back to posts</button>


                  




                </AutoForm>

<p>{testV}   </p>

            </div>
        )
    }
}
