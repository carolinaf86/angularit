import {NgModule} from '@angular/core';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faClock} from '@fortawesome/free-regular-svg-icons';
import {faUserCircle} from '@fortawesome/free-solid-svg-icons/faUserCircle';
import {faArrowCircleDown, faArrowCircleUp} from '@fortawesome/free-solid-svg-icons';

library.add(faUserCircle);
library.add(faClock);
library.add(faArrowCircleUp);
library.add(faArrowCircleDown);

@NgModule({
  imports: [FontAwesomeModule],
  exports: [FontAwesomeModule]
})
export class IconsModule {

}
