import Posts from "/db/posts/collection";   
import Comments from "/db/comments/collection";
Comments.addLinks({
    'posts':{
         collection: Posts,
         inversedBy:'comments',
    }
})


 
