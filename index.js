// Your code here
class Polygon {
    constructor(a) {
        this.a = a;
      }
    get countSides() {
        return this.a.length;
    }
    get perimeter(){
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        return this.a.reduce(reducer)
    }
}

class Triangle extends Polygon{
    get isValid(){
        let sides = [
        this.a[0] + this.a[1],
        this.a[0] + this.a[2],
        this.a[1] + this.a[2]
        ]

        for (const [i, value] of sides.entries()) {
            sides[i] = !this.a.some((x) => value < x)
        }
        
        return !sides.includes(false)
    }
}

class Square extends Polygon{
    get area(){
        return Math.pow(this.a[0], 2)
    }
    get isValid(){
        let unique = [...new Set(this.a)];
        return unique.length == 1
    }
}