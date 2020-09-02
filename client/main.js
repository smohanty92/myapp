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
  parent() {
    const currentParentName = Template.instance().currentParentName.get();
    
    const parent = Parents.findOne({name: currentParentName});
    return parent;
  },

  attributes() {
    return {
      type: 'text',
      id: 'childName',
      value: this.name
    };
  }

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
    $('#childName').val()
  ]; 

  currentParentName = Template.instance().currentParentName.get();
  
  Meteor.call('updateParent', currentParentName, children);
  console.log('updated parent');
}