define("Function/splitCb",function(){
  Function.prototype.splitCb = function(n) {
    var self = this,
      args1 = Array.prototype.slice.call(arguments);
    var cbs = [],
        results = [],
        errors = [],
        finalCb = this,
        finished = 0;

    for(var i = 0; i < n; i++){
      cbs.push(function(err, o){
          finished++;
          
          if(err) errors.push(err);
          results.push(o);

          if(finished === n){
            finalCb(errors.length === 0 ? null : errors, results);
          }
      });
    }

    return cbs;
  };
});
