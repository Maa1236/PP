// Employees and Managers

function Person(name, surname) {
    this.name = name;
    this.surname = surname;
}

function Employee(name, surname, job, salary) {
    Person.call(this, name, surname);
    this.job = job;
    this.salary = salary;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;
Employee.prototype.getData = function() {
    return this.name + ", " + this.surname + ", " + this.salary;
};
Employee.prototype.getSalary = function() {
    console.log(this.salary);
};
Employee.prototype.increaseSalary = function() {
    return this.salary + this.salary * 10 / 100;
}


function Developer(name, surname, job, salary, spec) {
    Employee.call(this, name, surname, job, salary);
    this.specialization = spec;
}

Developer.prototype = Object.create(Employee.prototype);
Developer.prototype.constructor = Developer;
Developer.prototype.getSpecialization = function() {
    console.log(this.specialization);
}

function Manager(name, surname, job, salary, department) {
    Employee.call(this, name, surname, job, salary);
    this.department = department;
}

Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;
Manager.prototype.getDepartment = function() {
    console.log(this.department);
};
Manager.prototype.changeDepartment = function(newDepartment) {
    this.department = newDepartment;
}


var person = new Person("Petar", "Peric");
var joca = new Employee("Joca", "Bozic", "agent", 300);
var boza = new Developer("Boza", "Bozic", "developer", 600, "JS");
var steva = new Manager("Steva", "Malic", "manager", 1000, "IT");
console.log(person);
console.log(joca);
console.log(boza);
console.log(steva);
steva.changeDepartment("spremacica");
steva.getDepartment();
console.log(steva.increaseSalary());


// Applications

function App(name, licence, stars) {
    this.name = name;
    this.licence = licence;
    this.stars = stars;
}
App.prototype.isCCLicence = function() {
    return this.licence === "CC";
}
App.prototype.like = function() {
    return this.stars++;
}
App.prototype.showStars = function() {
    console.log(this.stars)
}

function WebApp(name, url, techn, licence, stars) {
    App.call(this, name, licence, stars);
    this.url = url;
    this.technologies = techn;
}

WebApp.prototype = Object.create(App.prototype);
WebApp.prototype.constructor = WebApp;
WebApp.prototype.getData = function() {
    console.log(this.name + ", " + this.url + ", " + this.technologies + ", " + this.licence + ", " + this.stars)
}
WebApp.prototype.reactBased = function() {
    console.log(this.technologies.includes("React"));
}

function MobileApp(name, platforms, licence, stars) {
    App.call(this, name, licence, stars);
    this.platforms = platforms;
}

MobileApp.prototype = Object.create(App.prototype);
MobileApp.prototype.constructor = MobileApp;
MobileApp.prototype.getData = function() {
    console.log(this.name + ", " + this.platforms + ", " + this.licence + ", " + this.stars);
}
MobileApp.prototype.forAndroid = function() {
    console.log(this.platforms.includes("Android"));
}

var app = new App("zoo", "extra", 4);
var webApp = new WebApp("zoom", "zoom.com", ["techn1", "techn2", "React"], "extra", 4);
var mobileApp = new MobileApp("yoom", ["Android", "iOS", "Windows"], "CC", 3);
console.log(app);
console.log(app.isCCLicence());
app.like();
app.showStars();
console.log(webApp);
webApp.getData();
webApp.reactBased();
console.log(webApp.isCCLicence());
webApp.like();
webApp.showStars();