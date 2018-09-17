
let rand = Math.random();
console.info(`rand: ${rand}`)
console.info('change with --watch option ...')


function print_hello() {
    console.info('hello print ...')
}
function hello() {
    console.info('hello from hello function ...')
    print_hello();
    document.addEventListener('DOMContentLoaded', function(){
        alert('hello world');
    });
}



hello()