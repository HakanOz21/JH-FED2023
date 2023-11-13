/* Hello world! */
/* function hello(who: string = "world"): string {
    return `Hello ${who}! `;
  } 
console.log (hello ("Typescript")); */
  
// types are enforced;
// console.log (hello (3));
// let output: number = hello("typie");
  
/* Primitive types */
// const size: number = 42.42; 
// const firstName: string = 'Jane'; 
// const big1: bigint = BigInt(3);
// const big2: bigint = 3n;
// const bool: boolean = true;
// const undef: undefined = undefined;
// const nuuu: null = null;
// const symbol: symbol = Symbol(42);
  
// console.log("typeof size: ", typeof size);
// console.log("typeof firstName: ", typeof firstName);
// console.log("typeof big1: ", typeof big1);
// console.log("typeof big2: ", typeof big2);
// console.log("typeof bool: ", typeof bool);
// console.log("typeof undef: ", typeof undef);
// console.log("typeof nuuu: ", typeof nuuu);
// console.log("typeof symbol: ", typeof symbol);
  
/* any and unknown */
// let value: any;  // change type to unknown
  
// let value1: unknown = value;  
// let value2: any = value;     
// let value3: boolean = value;  
// let value4: number = value; 	
// let value5: string = value;  
// let value6: object = value; 
// let value7: any[] = value;
  
// value.foo.bar;
// value.trim(); 
// value(); 				
// new value(); 		   
// value[0][1]; 		
  
/*   Functions  */
// function sayHello(firstName: string): void { 
// 	console.log(`Hello ${firstName}!`); 
// }
  
// function getHelloNameOption(firstName: string, lastName?: string): string { 
// 	if (lastName) { 
// 		return `Hello ${firstName} ${lastName}!`; 
// 	} else { 
// 		return `Hello ${firstName}`;
//   }
// }
// function getHelloNameDefault(firstName: string, lastName: string = "Bond"): string { 	
// 	return `Hello ${firstName} ${lastName}!`; 
// }
  
// sayHello ("Billie"); 
// console.log(getHelloNameOption ("Bob with optional lastname"))
// console.log(getHelloNameOption ("Bobbie", "Option"));
// console.log(getHelloNameDefault ("Bob with default lastname"));
// console.log(getHelloNameOption ("Bobbie", "Default"));
  
/* typescript-tooling-in-5-minutes
 * Source: 
 * https://www.typescriptlang.org/docs/handbook/typescript-tooling-in-5-minutes.html#interfaces
*/
//   interface Person {
//     firstName: string;
//     lastName: string;
//   }
  
//   function greeter(person: Person) {
//     return "Hello, " + person.firstName + " " + person.lastName;
//   }

//   let user = { firstName: "Jane", lastName: "User" };
//   console.log(greeter(user));

//   class Student {
//     fullName: string;
//     constructor(
//       public firstName: string,
//       public middleInitial: string,
//       public lastName: string
//     ) {
//       this.fullName = firstName + " " + middleInitial + " " + lastName;
//     }
//   }

//   let student = new Student("Jane", "M.", "Student");
//   console.log(greeter(student));
  
/* interface Incident */
  // interface Incident {
  //   id: number;
  //   title: string;
  //   time_category: string | undefined;
  //   date: string | bigint | undefined;
  // };
  
  // const incidentBridge: Incident = {
  //   id: 14,
  //   title: "Pretty bridge",
  //   time_category: "permanent",
  //   date: "1697827548475"
  // };
  
  // const incidentTurnr: Incident = {
  //   id: 15,
  //   title: "No right hand turn",
  //   time_category: "temporary",
  //   date: 1697827548475n
  // };
  
  // const incidentTurnl: Incident = {
  //   id: 15,
  //   title: "No left hand turn",
  //   time_category: "temporary",
  //   date: undefined
  // };

/* tuples */
// let employee: [number, string];
// employee = [1, "Steve"]; 
// employee.push(2, "Bill"); 

// console.log("employee: ", employee);
