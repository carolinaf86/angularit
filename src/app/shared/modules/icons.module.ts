import {NgModule} from '@angular/core';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faClock} from '@fortawesome/free-regular-svg-icons';
import {faUserCircle} from '@fortawesome/free-solid-svg-icons/faUserCircle';
import {
  faArrowCircleDown,
  faArrowCircleUp, faArrowDown, faArrowUp,
  faEdit,
  faPlus,
  faSave, faSignInAlt, faSignOutAlt,
  faTimes,
  faTrash, faTrophy, faUser,
  faUserPlus
} from '@fortawesome/free-solid-svg-icons';

library.add(faUserCircle);
library.add(faClock);
library.add(faArrowCircleUp);
library.add(faArrowCircleDown);
library.add(faPlus);
library.add(faEdit);
library.add(faSave);
library.add(faTrash);
library.add(faTimes);
library.add(faSignInAlt);
library.add(faSignOutAlt);
library.add(faUser);
library.add(faUserPlus);
library.add(faTrophy);
library.add(faArrowUp);
library.add(faArrowDown);

@NgModule({
  imports: [FontAwesomeModule],
  exports: [FontAwesomeModule]
})
export class IconsModule {

}
