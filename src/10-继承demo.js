// 练习继承demo
class Animal {
  constructor(name, type) {
    this.username = name
    this.type = type
  }

  eat() {
    console.log('食肉动物')
  }
}

class Bird extends Animal {
  constructor(name, type, leg) {
    super(name, type)
    this.leg = leg
  }

  fly() {
    console.log('我会飞')
  }
}

const mcd = new Bird('花', '鸟', 2)
mcd.fly()

class Dog extends Animal {
  constructor(name, type, leg) {
    super(name, type)
    this.leg = leg
  }

  bark() {
    console.log('你在狗叫什么？')
  }
}
const xiugou = new Dog('xiugou', '狗', 4)
console.log(xiugou)

xiugou.bark()
xiugou.eat()
