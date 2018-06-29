    import Posts from "/db/posts/collection";
    Meteor.users.addLinks({
        'posts':{
             collection: Posts,
             inversedBy: 'author'
         }
    })

