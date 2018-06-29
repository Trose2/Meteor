import '/imports/ui/init';


import route from '/imports/routing/router.js'; 

import Home from '/imports/ui/pages/Home.jsx';  
route('/', Home); 
 

import Register from '/imports/ui/pages/Users/Register.jsx';
route('/Register', Register);


import Login from '/imports/ui/pages/Users/Login.jsx';
route('/Login', Login);


import PostList from '/imports/ui/pages/Posts/PostList';
route  ('/posts',PostView);

import PostView from '/imports/ui/pages/Posts/PostView';
route ('/posts/View/:_id',PostView);
