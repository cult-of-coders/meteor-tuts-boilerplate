import {Meteor} from 'meteor/meteor';
import Donuts from '/imports/api/donuts/collection';
import Security from '/imports/api/security.js';

Meteor.methods({
    'create_a_donut': function () {
        //
        /* Uncomment these lines if you want to throw an exception client side
        throw new Meteor.Error('error', 'I do not really want it', {
            why: "I have eaten too many"
        });
        */
        return Donuts.insert({price: 100})
    },

    'find_a_donut': function (_id) {
        // throw exception if not logged it:
        Security.checkLoggedIn(this.userId);

        return Donuts.findOne({_id: _id});
    }
});