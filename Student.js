var student = /** @class */ (function () {
    function student() {
        this.stdid = 101;
        this.stdName = "durga";
        this.stdClass = "A";
    }
    student.prototype.display = function () {
        console.log(this.stdid);
        console.log(this.stdName);
    };
    return student;
}());
var S1 = new student();
S1.display();
