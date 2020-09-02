import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const parentSchema = new SimpleSchema({
    name: {
        type: String
    },
    children: {
        type: [Child],
        optional: true
    },
});