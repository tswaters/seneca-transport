require('seneca')()
  .declare('foo')
  .proxy({type:'pubsub',pin:'foo:*'})
  .ready(function(){
    this.act('foo:1,bar:A',function(err,out){console.log(out)})
    this.act('foo:2,bar:B',function(err,out){console.log(out)})
  })
