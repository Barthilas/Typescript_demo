//Decorators called at runtime. Syntax sugar pretty much.
//usages: logging, caching, data validation
//class decorator
function Component(options: { id: string }) {
  return (target: Function & typeof TestClass) => {
    target.elementId = options.id;
  };
}

//method decorator
function MethodTest(
  target: Object,
  propertyKey: string, //name of the function
  propertyDescriptor: PropertyDescriptor //represents the actual output
) {
  console.log(target);
  console.log(propertyKey);
  propertyDescriptor.value = function (...args: any[]) {
    return `Hello ${args}`;
  };
}

//property decorator
function Prop(target: Object, propertyName: string) {
  let value: number;
  const getter = () => {
    console.log("Getting value ...");
    return value;
  };

  const setter = (newVal: number) => {
    console.log(`Setting value to: ${newVal}`);
    value = newVal;
  };

  Object.defineProperty(target, propertyName, {
    get: getter,
    set: setter,
  });
}

//function decorator
function Param(_target: Object, propertyName: string, index: number)
{
    console.log(propertyName, index);
}


@Component({
  id: "Hello World",
})
export class TestClass {
  static elementId: string;

  @Prop
  id?: number;

  @MethodTest
  printId(@Param prefix: string = ""): string {
    return prefix + this.id;
  }
}

console.log(new TestClass().printId("Bart"));
