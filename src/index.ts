// const func = (names:string[]): void => {
// }
//
// func(['max', 'ira'])
// func(['dsfd', 'ira'])
// func(['dddd', 'ira'])
// ---------------------------------------------------------------------------
//
// let a:number =6
// a= 12213
//------------------------------------------------------------------------------------
// let b:string =toString()
// =====================================
// interface IUser {
//     name:string,
//     age:number,
//     house:number
//
// }
// const user:IUser  = {
//     name:'Max',
//     age:15,
//     house:20
// }
// const user2:IUser={
//     name:'Kira',
//     age:25,
//     house:12
// }
// console.log(user,user2)
//================================================
// interface IUser<DATA> {
//     name:string,
//     age:number,
//     house:number,
//     data:DATA
// }
// const user1:IUser<number[]>={
//     name:'Max',
//     age:12,
//     house:12,
//     data:[1,2,2,2]
// }
//
// const user2:IUser<string>={
//     name:'Max',
//     age:12,
//     house:12,
//     data:'dsdasfd'
// }
// console.log(user1,user2)
//==================================================
// interface IUser {
//     name:string,
//     age:number,
//     house?:number
// }

// interface IUser {
//     name:string,
//     age:number,
//     house:number,
//
// }
// const user:Partial<IUser>={
//     name:'nana',
// }

// class User{
//
//     constructor(protected name:string,age:number) {
//     }
//     getName():string{
//      return this.name
//     }
// }
// let user =new User('mana', 1245)
// console.log(user.getName())
//
// const users:User[]=[
//     new User('Max',122),
//     new User('REs', 13),
// ]
//================================================================================
// interface IElectric{
//     enginePower:number;
//
//     getLedStatus():boolean;
// }
// class Car implements IElectric{
//     enginePower: number
//     constructor(private seats:number,private brend:string,private year:number, enginePower:number) {
//         this.enginePower = enginePower;
//     }
//
//     getLedStatus(): boolean {
//       return true
//     }
//     start():void{
//         console.log('rrrrrrrrrrrr')
//     }
//     getInfo():void{
//         console.log(`Brand:${this.brend}--seats${this.seats}---year${this.year}`)
//     }
// }
// const = new Car(5,'BMW',2333)
// car.getInfo()
// car.start()
//
// class ElecrtroCar extends Car{
//
//     constructor(seats: number, brend: string, year: number,private enginePower:number) {
//         super(seats, brend, year);
//     }
// }
//=============================================================================
// interface IElectric{
//     enginePower:number;
//
//     getLedStatus():boolean;
// }
// class Car implements IElectric{
//      enginePower: number;
//     constructor(private seats: number, private brand:string, private year:number, enginePower: number) {
//    this.enginePower = enginePower
//     }
//
//
//     getLedStatus(): boolean {
//       return true
//     }
//     start():void{
//         console.log('rrrrrrrrr')
//     }
//     getInfo():void{
//         console.log(`Brand: ${this.brand}-- seats:${this.seats}--year:${this.year}`)
//     }
//
// }
// const car= new Car(5, "BMW",2000);
//
// car.getInfo()
// car.start()

// class ElektroCar extends Car{
//
//
//     constructor(seats: number, brand: string, year: number,private  enginePower:number) {
//         super(seats, brand, year);
//     }
// }
//====================================================================
// abstract class Shape{
//     abstract  perimeter (): number;
//
//     abstract  area ():number;
//
// }
// class Triangle extends Shape{
//
//     constructor(private a :number,private b:number, private c:number) {
//         super();
//     }
//     perimeter(): number {
//         return this.a + this.b/ this.c;
//     }
//
//     area(): number {
//         return this.c/ this.a + this.b;
//     }
// }
//
// class Rectangle extends Shape{
// constructor(private a:number, private b:number) {
//     super();
// }
//     perimeter(): number {
//         return this.a + this.a;
//     }
//
//     area(): number {
//         return this.a + this.b+2;
//     }
// }
//
// const shapes:Shape[] = [
//     new Triangle(1,2,3),
//     new Rectangle(2, 3),
//     new  Triangle(3, 3 , 4)
// ]
// for (let shape of shapes) {
//     console.log(shape.constructor['name']);
//     console.log(shape.area());
//     console.log(shape.perimeter());
//
// }
interface IDog<Type>{
    name:string;
    age:number
    box:Type
}
const dog1:IDog<string[]> = {
    name:'max',
    age:14,
    box:['2','wesf']
}
const dog2:IDog<number>={
    name:'rex',
    age:22,
    box:2323
}
const dog3:IDog<boolean>={
    name:'rex',
    age:22,
    box:true
}
console.log(dog1, dog2, dog3);