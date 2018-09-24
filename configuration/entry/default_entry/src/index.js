
console.info('from index.js');

require('./path_mod2')

import {mod1_hello} from './path_mod1.js';

import { Mod2Manager } from "./path_mod2";

let m2manager = new Mod2Manager();

mod1_hello('inside index.js');
m2manager.hello();