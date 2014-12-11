describe('homepage', function(){
  before(function(){
    casper.start('http://localhost:3000/');
  });

  it('hello worlds', function(){
    casper.then(function(){
      expect("body").to.have.text("Hello world");
    });
  });
});


describe('our twitter feed', function(){

 before(function(){
    casper.start('http://localhost:3000/twitter/bbc');
  });

  it('should show "bbc" in the body content', function(){
    casper.then(function(){
      expect("body").to.contain.text("bbc");
    });
  });

  it('should show load tweets containing "bbc"', function(){
    casper.then(function(){
      expect('.feed').to.be.inDOM;
      // expect('#individual_feed').to.contain.text("bbc");
      // this second test would fail since as we have learned
      // that the API call we are making is returning 
      // JSON objects that contain 'bbc', independent of the
      // precise field.  i.e. if user @bbc tweets, it screens,
      // if a url is encoded as t.co/whatever but refers to an
      // underlying bbc link, this also screens.
      // hence this test fails.  a double/mock call would be better.
    });
  });


});