import { types, validator } from './validator';

export default validator([
  {
    required: true,
    label: 'name',
    type: types.STRING,
    value: 'Any_Name'
  },
  {
    required: false,
    label: 'document',
    type: types.STRING,
    value: '12345678910'
  }
]);
