
describe("myApp",function(){


    it("accepts", function () {
        // Invoke the unit being tested as necessary
        var json = {
    username : "tom",
    password : "5f4dcc3b5aa765d61d8327deb882cf99"
};
        

        // Check the results; "expect" and toEqual are Jasmine methods.
        expect(json.username).toEqual("tom");
        expect(json.password).toEqual("5f4dcc3b5aa765d61d8327deb882cf99");
    });

    it("videos", function () {
        // Invoke the unit being tested as necessary
        var json = {
    name : "[0] Getting Started With ReactJs",
    url: "videos/Getting_Started_With_React.js.mp4",
    ratings : [ 
        1, 
        5, 
        5
  	]
	};
        
        // Check the results; "expect" and toEqual are Jasmine methods.
        expect(json.name).toEqual("[0] Getting Started With ReactJs");
        expect(json.url).toEqual("videos/Getting_Started_With_React.js.mp4");
    });

    var $log;
  
  beforeEach(function () {
    console.log("in beforeEach...");
    
    module('myApp', function($provide) {
      // Output messages
      $provide.value('$log', console);
    });
    
  }); 
  
  beforeEach(inject(function (_$log_) {
    $log = _$log_;
  }));
  
  it('should be able to log something', function(){ 
    console.log("in it...");
    $log.info("Using $log for logging...");
  }); 


   
});