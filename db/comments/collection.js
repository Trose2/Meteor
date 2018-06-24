import {Mongo} from "meteor/mongo";
import CommentsSchema from './schema'

const Comments = new Mongo.Collection('Comments');

Comments.attachSchema(CommentsSchema);

export default Comments;
