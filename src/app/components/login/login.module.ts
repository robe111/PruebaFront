import {
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA,
  NO_ERRORS_SCHEMA,
} from '@angular/core';

import { LoginComponent } from './login.component';

@NgModule({
  declarations: [],
  imports: [LoginComponent],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class LoginModule {}

module.exports = LoginComponent;
