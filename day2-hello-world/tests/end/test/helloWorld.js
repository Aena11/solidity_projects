const HelloWorld = artifacts.require('HelloWorld');

contract('HelloWorld', ()=>{
  it('should return Hello World',async() => {
    const helloworld = await HelloWorld.deployed();
    const result = await helloworld.hello();
    assert(result === 'Hello World');
  });
});
