import * as GSAP from 'gsap';

import nav from './nav';
import footer from './footer';
import content from './content';

const container = document.createElement('div');

container.appendChild(nav);
container.appendChild(content());
container.appendChild(footer);
document.body.appendChild(container);
