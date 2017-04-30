import { Scheme } from './scheme';
import { SchemeService } from './scheme.service';
import { VillainMethod } from './villain-method';
import { VillainWeakness } from './villain-weakness';

export class Villain {
	scheme: Scheme;
	method: VillainMethod;
	weakness: VillainWeakness;
}
