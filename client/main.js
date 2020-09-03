import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const Parents = new Mongo.Collection('Parents');

Template.parents.onCreated(function parentsOnCreated() {
  Meteor.subscribe('Parents');
  this.currentParentName = new ReactiveVar('John');
});

Template.parents.helpers({
  getParent() {
    console.log(Template.currentData());
    const currentParentName = Template.instance().currentParentName.get();

    const parent = Parents.findOne({name: currentParentName});
    return parent;
  },
});

Template.parents.events({
  'click #prev'(e, template) {
    saveParent();
    template.currentParentName.set('John');
  },
  'click #next'(e, template) {
    saveParent();
    template.currentParentName.set('Peter');
  }
});

function saveParent() {
  const children = [
    {name: $('#childName').val()}
  ];

  console.log(children);
  currentParentName = Template.instance().currentParentName.get();

  Meteor.call('updateParent', currentParentName, children);
  console.log('updated parent');
}
