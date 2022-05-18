//var students = ["Timmy", "Janessa", "Arun", "Janus"];
//var naughtyList = [];
//naughtyList.push(students[0]);
//var index = naughtyList.indexOf("Timmy");
//console.log(index);
//if (index > -1) {
//    naughtyList.splice(index, 1);
//}
//console.log(students.length);
//for (x = 0; x < students.length; x++) {
//    console.log(students[x]);
//}
var students = [];

function student(first, last, age){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.greeting = function() {
        return "hi, I'm " + this.firstName + " " + this.lastName + " and I'm " + this.age + " years old.";
    }
};

students.push(new student("Bola", "Aseyan", 26));
students.push(new student("Bola", "Aseyan", 27));
for (var key in students) {
console.log(students[key].age);
}

//var s1 = new student("Compton", "Boys", 12);
//console.log(s1);
//console.log(s1.firstName);
//console.log(s1.greeting());