
function PopupWindow(id, url, options = {}) {
    this.id = id;
    this.url = url;
    this.options = options;
}

PopupWindow.prototype.open = function() {
    this.window = window.open(this.url, this.id, toQuery(this.options, ','));
}

PopupWindow.prototype.close = function() {
    this.cancel();
    this.window.close();
}

PopupWindow.prototype.cancel = function() {
    if (this._iid) {
      window.clearInterval(this._iid);
      this._iid = null;
    }
}

PopupWindow.prototype.then = function (callback) {
    return this.promise.then(callback);
}

PopupWindow.prototype.catch = function(callback) {
    return this.promise.catch(callback);
}

PopupWindow.prototype.poll = function() {
    this.promise = new Promise((resolve, reject) => {
      this._iid = window.setInterval(() => {
        try {
          const popup = this.window;

          if (!popup || popup.closed !== false) {
            this.close();

            reject(new Error('The popup was closed'));

            return;
          }

          if (popup.location.href === this.url || popup.location.pathname === 'blank') {
            return;
          }

          const params = toParams(popup.location.search.replace(/^\?/, ''));

          resolve(params);

          this.close();
        } catch (error) {
          /*
           * Ignore DOMException: Blocked a frame with origin from accessing a
           * cross-origin frame.
           */
        }
      }, 500);
    });
}

function popup_auth_window(id, url, options = {}) {
    const popup = new PopupWindow(id, url, options);

    popup.open();
    popup.poll();

    return popup;
}
