

class Fruit {
    constructor(x, y) {
        this.x = x || floor(random(width/100, (width / 10)-width/100)) * 10;
        this.y = y || floor(random(height/100, (height / 10)-height/100)) * 10;
    }

    clone() {
        return new Fruit(this.x, this.y);
    }

    getX() { return this.x; }

    getY() { return this.y; }

}