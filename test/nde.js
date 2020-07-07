/*function test(a, b) {
    console.log(b)
    return {
        test: function(c){
            return test(c, a);
        }
    };
}

var retC = test('good').test('bad');
retC.test('good');
retC.test('good');
retC.test('good');
retC.test('good');
retC.test('good');*/

let cache = new Map();
cache.set('name', 'jack');
cache.set('age', 23);
let keys = cache.keys();
console.log(keys.next()) // 卧槽，Map 的 keys 是个什么结构，居然还有这种用法
