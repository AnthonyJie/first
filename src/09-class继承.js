class Teacher {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  sayHi() {
    console.log('hi')
  }
}

class Afkie extends Teacher {
  constructor(name, age) {
    super(name, age)
    this.skgi = 'black'
  }
}

const anthony = new Afkie('安东尼', 20)
console.log(anthony)
anthony.sayHi()

function Ddddd(name, age) {
  this.name = name
  this.age = age
}
Ddddd.prototype.sayHi = function () {
  console.log('hihihi')
}

function Jicheng(name, age, gender) {
  Ddddd.call(this, name, age)
  this.gender = gender
}

Jicheng.prototype = Object.create(Ddddd)

const demo = new Jicheng('大苏打', 99, '男')
console.log(demo)
demo.sayHi()

// class Student extends Teacher {
//   // constructor(aa) {
//   //   super('文杰', 20)
//   //   this.aa = aa
//   // }
// }

// const stu = new Student('aa', 30)
// stu.sayHi()
// console.log(stu)
