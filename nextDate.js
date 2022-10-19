Date.prototype.nextDate = function(){
    const  currentDate = this.getDate();
    return new Date(this.setDate(currentDate + 1))
}
const date = new Date();
console.log(date.getDate());

console.log(date.nextDate());