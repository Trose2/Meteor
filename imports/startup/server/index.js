import '/imports/api/methods'
import '/imports/api/posts/methods';
import '/imports/api/posts/securedMethods';
import '/imports/api/posts/publications';
import '/imports/api/users/methods';
//import Donuts from '/imports/api/donuts/collection.js';



import moment from 'moment';

const date = moment(new Date()).format('YYYY-MM-DD')
console.log(date)
