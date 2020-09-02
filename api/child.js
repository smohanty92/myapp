import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Child = new Mongo.Collection('Child');
export const childSchema = new SimpleSchema({
    name: {
        type: String
    },
});