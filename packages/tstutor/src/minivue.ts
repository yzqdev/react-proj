export function createAppApi() {
  let app = "aaa";
  return function createApp(appname:string) {
      console.log(appname)
  };
}
