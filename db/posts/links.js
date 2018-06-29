    import Posts from "/db/posts/collection";
    import Comments from "/db/comments/collection";

    Posts.addLinks({
       'author': {
        type: 'one',
        collection: Meteor.users,
        field:  'userId',
        }
    })
    

 Posts.addLinks({
       'comments': {
        type: 'many',
        collection: Comments,
        field: '_id',
        }
    })
    

