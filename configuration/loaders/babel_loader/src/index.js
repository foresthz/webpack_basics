
class LoaderManager {
    hello_loader() {
        console.info('hello loader class');
    }
}

import { Mod1 as Mod1Manager } from "./mod1";

let mod1_manager = new Mod1Manager();

mod1_manager.hello_mod1();

mod1_manager.open_page();