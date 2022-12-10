const main = (() => {
  const hello = () => {
    console.log('hello');
  };
  const world = () => {
    console.log('world!');
  };

  return { hello, world };
})();

main.hello();
main.world();