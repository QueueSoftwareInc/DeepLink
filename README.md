# DeepLink
A Javascript Tool for quick deep linking. Unique in its ability to let you know if the custom protocol actually worked and set custom callbacks either way.

## Installation

Include script *after* the jQuery library:

```html
<script src="/path/to/deepLink.js"></script>
```

## Usage

Create a new Deep Link:

```javascript
var link = new DeepLink({
              URI: "Protocol://path/to/resource",
              success: function () {
                  //success callback
              },
              failure: function () {
                  //failure callback
              }
          })

```

This creates a Deep Link that is ready to start. To navigate to the link run:

```javascript
link.start()
```

After 1 second DeepLink will evaluate whether or not the protocol was recognized by the client and if another application was activated. If the deep link worked, the function inputed for success will run, and if it has failed failure will run. 

## Sensitivity

There is a default threshold of 1 second (1000 milliseconds) at which point DeepLink will evaluate if the URI was recognized by the client. Some applications may require more than 1 second to load and get focus on the device. If you wish to change the threshold, simply pass in a timeout key: 

```javascript
...
timeout: 2000
...
```

## Append JSON

If you want to pass JSON into your Application you can do so using DeepLink. This can be useful depending on what kind of information you are passing from one application to another. You can use the key appendAsJSON to use this feature. Pass in any object and it will be converted into JSON, URL encoded, then appended to your URI. 

```javascript
var myObj = {"id": “uniqueid”, "action": "editImage"};

...
appendAsJSON: myObj,
...
```

