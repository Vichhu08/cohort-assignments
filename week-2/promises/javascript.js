class rectangle{
    constructor (width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    area (){
        const area = this.width * this.height;
        return area;
    }

    paint(){
        console.log(`Painting this in ${this.color}`);
    }
}

const rect = new rectangle(2,5,"red");
const area = rect.area();
console.log (area);
rect.paint();