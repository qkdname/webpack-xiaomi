var runtime = require('art-template/lib/runtime');
runtime.limitStr = function (value) {
  if(value.length>25){
    return value.slice(0,20)+'...'
  } else {
    return value
  }
}