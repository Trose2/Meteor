import Security from '/imports/api/security.js';
import {Meteor} from "meteor/meteor";
import {Posts} from '/db';
import {Comments} from '/db';

Meteor.publish('posts', function () {
    return Posts.find({userId: this.userId});
})

Meteor.publish('comments', function () {
    return Comments.find({userId: this.userId});
})
