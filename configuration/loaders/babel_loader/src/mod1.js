
class Mod1{
    hello_mod1() {
        console.info('from mod1 hello ...');
    }

    open_page() {
        open('https://www.v2ex.com/');
        console.info(`open url from Mod1 ... `);
    }
}

export {Mod1}