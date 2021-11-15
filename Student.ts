class student{
    stdid:number=101;
    stdName:string="durga";
    stdClass:string="A";
    display(){
console.log(this.stdid);
console.log(this.stdName);
    }
}

var S1=new student();
S1.display();