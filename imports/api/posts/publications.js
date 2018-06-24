import Security from '/imports/api/security.js';
import {Meteor} from "meteor/meteor";

Meteor.publish('posts', function () {
    return Posts.find({userId: this.userId});
})
