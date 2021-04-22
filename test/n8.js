function createFlow(effects = []) {
    const sources = effects.slice().flat();
    return {
        async run(callback) {
            for (let effect of sources) {
                if (typeof effect === 'function') {
                    console.log(effect, '--- 1');
                }
                else {
                    console.log(effect, '--- 2');
                }
                typeof effect === 'function' ? await effect() : await effect.run();
            }
            typeof callback === 'function' && callback();
        }
    }
}

const delay = () => new Promise((resolve) => setTimeout(resolve, 1000));
createFlow([
    () => console.log('a'),
    () => console.log('b'),
    createFlow([() => console.log('c')]),
    [() => delay().then(() => console.log('d')), () => console.log('e')]
]).run(() => {
    console.log('done')
})