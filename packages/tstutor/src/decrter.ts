function first() {
  console.log("first(): factory evaluated");
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("first(): called");
  };
}

function second() {
  console.log("second(): factory evaluated");
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
      console.log(target)
    console.log("second(): called");
  };
}

class ExampleClass {
  @first()
  @second()
  method() {}
}

let exp=new ExampleClass()
exp.method()
