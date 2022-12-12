"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        //   private id: string;
        //   public name: string; //這是類別中的key , 與obj 中的不同 ,不需要給value
        this.employees = [];
        // this.name = n; //將n 指向name
        // this.id=id
    } // constuctor 是類中的方法
    //static method
    static createEmployee(name) {
        return { name: name };
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
Department.fiscalYear = 2020;
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
    }
    describe() {
        console.log("IT Department - ID: " + this.id);
    }
}
class AccountingDepartment extends Department {
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("No report found");
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error('Please pass in a valid value');
        }
        this.addReport(value);
    }
    describe() {
        console.log('Accounting - ID: ' + this.id);
    }
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
        this.lastReport = reports[0]; //將lastReport 初始化
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
    }
    addEmployee(name) {
        if (name === "Max") {
            return;
        }
        this.employees.push(name);
    }
}
const employee1 = Department.createEmployee('Max');
console.log(employee1, Department.fiscalYear);
const accounting = new AccountingDepartment("d2", []);
accounting.describe();
accounting.addReport("something wrong...");
console.log(accounting.mostRecentReport);
accounting.mostRecentReport = 'Dairy Report';
accounting.printReports();
accounting.addEmployee("Max");
accounting.addEmployee("Manu");
accounting.printEmployeeInfo();
const IT = new ITDepartment("d1", ["Max"]);
IT.addEmployee("Max");
IT.addEmployee("Joe");
//示範在class外改變employees 陣列內容
// accounting.employees[2] = "Anna";
IT.describe();
IT.printEmployeeInfo();
console.log(IT);
// const accountingCopy = { name: "Joe", describe: accounting.describe };
// accountingCopy.describe();
