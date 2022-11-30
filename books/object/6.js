function Cat(name,color) {
    this.name = name;
    this.color = color;
    this.type = "猫科动物";
    this.eat = function(){console.log("吃老鼠");};
}

var cat1 = new Cat("大毛","黄色");
console.log(cat1.name, cat1.color, cat1.type);
cat1.eat();
var cat2 = new Cat("二毛","黑色");
console.log(cat2.name, cat2.color, cat2.type);
cat2.eat();


    // Cat.prototype.type = "猫科动物";
    
    // Cat.prototype.eat = function(){alert("吃老鼠")};