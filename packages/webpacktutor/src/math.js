let a = [...Array(10000).keys()].filter(x => {
  return (
    x.toString().length > 1 &&
    x ===
      Number(
        x
          .toString()
          .split("")
          .reverse()
          .join("")
      )
  );
});
console.log(a);
function anwser(arr, target) {
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    map[arr[i]] = i;
  }
  for (let i = 0; i < arr.length; i++) {
    var d = target - arr[i];
    if (map[d]) {
      return [i, map[d]];
    }
  }
  return new Error("404 not found");
}
console.log(anwser([34,56,3,3],79))
