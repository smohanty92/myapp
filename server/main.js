import { Meteor } from 'meteor/meteor';
const Parents = new Mongo.Collection('Parents');

Meteor.startup(() => {
  if (Meteor.isServer) {
    
    Meteor.publish('Parents', function parentsPublication() {
      return Parents.find();
    });

    Meteor.methods({
      'updateParent'(parentName, children) {
        Parents.update({name: parentName}, { $set: {children: children} });
      }
    });

  }
});
