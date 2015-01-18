if (window.jQuery) {

          function DeepLink(options) {

              //the custom protocol & URI we would like to use for this request.
              this.URI = "custom://"
              //how long should we wait before assuming the connection has failed.
              this.timeout = 1000;

              //append encoded JSON
              this.appendAsJSON = false;

              var windowhasfocus = true;
              $(window).blur(function () {
                  windowhasfocus = false;
              })
              $(window).focus(function () {
                  windowhasfocus = true;
              })

              //runs the connection
              this.start = function () {
                  var w = (window.parent) ? window.parent : window;

                  if (this.appendAsJSON) {
                      w.location.assign(this.URI+encodeURIComponent(JSON.stringify(this.appendAsJSON)));
                  } else {
                      w.location.assign(this.URI);
                  }

                  var thisLinkInstance = this;

                  setTimeout(function () {
                      if (windowhasfocus) {
                          thisLinkInstance.failure();
                      } else {
                          thisLinkInstance.success();
                      }
                  }, this.timeout)

              }

              //callback for a successful link
              this.success = function () {
                  console.log("Deep Link was successful. Yeah!")
              }
              //callback for a failed link
              this.failure = function () {
                  console.log("Deep Link failed. Protocol not supported by browser. You may want to redirect your user to a download page")
              }

              //set options
              if (options) {

                  if ("URI" in options) {
                      this.URI = options.URI;
                  }
                  if ("timeout" in options) {
                      this.timeout = options.timeout;
                  }
                  if ("appendAsJSON" in options) {
                      this.appendAsJSON = options.appendAsJSON;
                  }
                  if ("success" in options) {
                      this.success = options.success;
                  }
                  if ("failure" in options) {
                      this.failure = options.failure;
                  }
              }

          }

      } else {
          console.error("DeepLink requires jquery to be included.")
      }