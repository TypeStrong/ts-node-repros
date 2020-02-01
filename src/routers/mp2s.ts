import {MP2Controller, userCanAttachFiles} from '../controllers/MP2Controller';

function ifUser(...args: any[]) {
    return args;
}
const can = [];

const test = [
    ...userCanAttachFiles.map(can => ifUser(...can)),
];