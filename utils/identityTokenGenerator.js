module.exports = function generator(options) {
    const text = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!&@';
    let id = '';
    if (options === 'AuthToken') return (Date.now() + "").split('').reverse().join('').substring(0, 6);
    if (options === 'MAILID') {
        while (id.length < 15) {
            id += text[(Math.random() * 65).toFixed(0)];
        }
    }
    return id;
}
