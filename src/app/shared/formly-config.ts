import {ConfigOption} from '@ngx-formly/core';

export const FORMLY_CONFIG: ConfigOption = {
  validationMessages: [
    { name: 'required', message: 'This field is required' },
    { name: 'email', message: 'Must be a valid email address' }
    ]
};
