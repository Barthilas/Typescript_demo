//by default public
class Employee {
  protected id!: number;
  private _name!: string;
  //private different syntax
  #address!: string;

  get empId(): number
  {
    return this.id;
  }

  set empId(id: number)
  {
    if(id<0) throw new Error();
    this.id = id;
  }

  // constructor(){} not supported
  constructor(id: number, name: string, address: string) {
    this.id = id;
    this._name = name;
    this.#address = address;
  }

  getNameWithAddress() {
    // return this._name + " " + this.address;
    return `${this._name} ${this.#address}`;
  }

  static getEmployeeCount(): number
  {
    return 50;
  }
}

class Manager extends Employee {
  constructor(id: number, name: string, address: string) {
    super(id, name, address);
  }
  getNameWithAddress() {
    return `I am overriden`;
  }
}

let emp = new Employee(1, "John", "Earth");
let mana = new Manager(2, "Punisher", "Mars")
let addr = emp.getNameWithAddress();
let staticNum = Manager.getEmployeeCount();
