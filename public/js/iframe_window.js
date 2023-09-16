
function IFrameWindow(id, url, options = {}) {
    this.id = id;
    this.url = url;
    this.options = options;
}


IFrameWindow.prototype.open = function() {
  let html = `
<iframe src="${this.url}" style="${this.options.styles}" id="${this.id}">

</iframe>
`;
  let idSelector = `#${this.id}`;
  $(idSelector).replaceWith(html);
}

IFrameWindow.prototype.close = function() {
    this.cancel();
    let html = `
<div id="${this.id}" />    
`;
  let idSelector = `#${this.id}`;
  $(idSelector).replaceWith(html);
}

IFrameWindow.prototype.cancel = function() {
    if (this._iid) {
      window.clearInterval(this._iid);
      this._iid = null;
    }
}

IFrameWindow.prototype.then = function (callback) {
    return this.promise.then(callback);
}

IFrameWindow.prototype.catch = function(callback) {
    return this.promise.catch(callback);
}

IFrameWindow.prototype.poll = function() {
    this.promise = new Promise((resolve, reject) => {
      this._iid = window.setInterval(() => {
        try {
          var frames = window.frames || window.document.frames;
          var frame = frames[this.id];

          if (!frame) {
            this.close();

            reject(new Error('The frame window was closed'));

            return;
          }

          if (frame.location.href === this.url || frame.location.pathname === 'blank') {
            return;
          }

          const params = toParams(frame.location.search.replace(/^\?/, ''));

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

function show_frame_window(id, url, options = { styles:"height: 1000; width: 600" }) {
    const frameWindow = new IFrameWindow(id, url, options);

    frameWindow.open();
    frameWindow.poll();

    return frameWindow;
}


function toParams(query) {
    const q = query.replace(/^\??\//, '');
  
    return q.split('&').reduce((values, param) => {
      const [key, value] = param.split('=');
  
      values[key] = decodeURIComponent(value);
  
      return values;
    }, {});
}
  
function toQuery(params, delimiter = '&') {
    const keys = Object.keys(params);
  
    return keys.reduce((str, key, index) => {
      let query = `${str}${key}=${params[key]}`;
  
      if (index < (keys.length - 1)) {
        query += delimiter;
      }
  
      return query;
    }, '');
}
