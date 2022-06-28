export function delegate(element, event, selector, callback) {
    element.addEventListener(event, function (e) {
        var target = e.target;
        while (target && target !== this) {
            if (target.matches(selector)) {
                callback.call(target, e);
                break;
            }
            target = target.parentNode;
        }
    });
}
