export const bar = await new Promise(resolve => {
  setTimeout(function() {
	  resolve('this is bar');
  }, 1e3);
});
