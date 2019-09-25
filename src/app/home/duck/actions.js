import types from './types.js';

const incrementCount = (value) => ({
    type: types.INCREMENT_COUNT,
    value: value    
});

export default {
    incrementCount
}