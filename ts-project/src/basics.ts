// 문자열, 숫자, 불리언
function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
  return;
}

let number: number;
const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = "Result is: ";

add(number1, number2, printResult, resultPhrase);

// 객체, 배열
// const person: {
//   name: string;
//   age: number;
// } = {
// 타입은 추론될 수 있도록 두기
const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; // 튜플 타입은 선언 명시
} = {
  name: "max",
  age: 30,
  hobbies: ["sports", "cooking"],
  role: [2, "author"],
};

// person.role[1] = 10; -> 문자열 자리
// person.role.push('admin'); -> push가 막히진 않음
// person.role = [0, 'admin', 'user']; -> 재할당하면 길이도 검사

let activities: string[];
activities = ["sports"];

console.log(person);

for (const hobby of person.hobbies) {
  console.log(hobby);
}

// enum
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
  ADMIN,
  // ADMIN = 5, 시작값 추가 가능
  // ADMIN = 'admin', 문자열 설정 가능
  READ_ONLY,
  AUTHOR,
}

const person1 = {
  name: "max",
  age: 30,
  hobbies: ["sports", "cooking"],
  role: Role.AUTHOR,
};

if (person1.role === Role.AUTHOR) {
  console.log("is author");
}

// 유니언, 리터럴
function combine(
  input1: string | number,
  input2: string | number,
  resultConversion: "as-number" | "as-text"
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinedAges = combine(20, 26, "as-number");
console.log(combinedAges);

const combinedStringAges = combine("20", "26", "as-number");
console.log(combinedAges);

const combinedNames = combine("max", "anna", "as-text");
console.log(combinedNames);

// 타입 알리어스
type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-text";

function combine1(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

// 타입 알리어스 객체
type User = { name: string; age: number };

function greet(user: User) {
  console.log(`I am ${user.name}`);
}

function isOlder(user: User, checkAge: number) {
  return checkAge > user.age;
}

// 함수
function add1(n1: number, n2: number) {
  return n1 + n2;
}

function printResult2(num: number) {
  console.log(`Result: ${num}`);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

printResult2(add1(5, 12));
// console.log(printResult(add(5, 12))); -> undefined

// let combineValues : Function;
let combineValues: (a: number, b: number) => number;

combineValues = add1;
// combineValues = printResult; -> 에러는 안뜨지만 인수 2개를 가지지 않기 때문에 undefined 출력
// combineValues = 5; -> 실행 O , 런타임 에러 / 함수가 할당될 것을 명시

console.log(combineValues(8, 8));

addAndHandle(10, 20, (result) => {
  console.log(result);
  return result;
  // void을 반환 타입으로 지정해도 리턴되는 이유는 callback이 반환된 값으로 아무 작업을 하지 않는다고 callback 타입에 정의되어 있기 때문
});

// unknown
let userInput: unknown; // 에러없이 어떤 값이든 저장 가능 (any 보다 나은 이유는 할 수 없는 작업을 알 수 있음)
let userName: string;

userInput = 5;
userInput = "max";

// userName = userInput; -> 문자열 할당 X (userInput이 any면 에러 X)
if (typeof userInput === "string") {
  userName = userInput;
}

// never
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError("error", 500);
