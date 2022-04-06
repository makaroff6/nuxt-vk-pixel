export default ({ app: { router } }, inject) => {
    function create() {
        const pixel = new VK.Pixel('<%= options.id %>')
        inject('vkpx', pixel);
        router.afterEach(() => {
            pixel.Hit();
        });
    }
    if (window.VK && window.VK.Pixel) {
        create();
    } else {
        (function (w, c) {
            (w[c] = w[c] || []).push(create)
        })(window, 'vkAsyncInitCallbacks');
    }
}