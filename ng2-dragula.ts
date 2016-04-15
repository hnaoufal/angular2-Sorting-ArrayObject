import {Dragula} from './node_modules/ng2-dragula/app/directives/dragula.directive';
import {DragulaService} from './node_modules/ng2-dragula/app/providers/dragula.provider';

export * from './node_modules/ng2-dragula/app/directives/dragula.directive';
export * from './node_modules/ng2-dragula/app/providers/dragula.provider';

export default {
  directives: [Dragula],
  providers: [DragulaService]
}

