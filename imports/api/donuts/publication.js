import {Meteor} from 'meteor/meteor';
import Donuts from '/imports/api/donuts/collection';

Meteor.publish('donuts', function () {
    return Donuts.find();
});