class Calc{
constructor(){

console.log('this is the constructor called');

}


sum(num1:number, num2:number):number{
    let _sum : number;
    _sum=num1+num2;
    console.log(_sum);
return (num1+num2);
}
}

var c=new Calc();
c.sum(10,40);

