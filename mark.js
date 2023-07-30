let mark = prompt('enter your marks: ');
if(mark<0 || mark>100){
    console.log('enter within given range: 1 - 100');
}
else if(mark>=90){
    console.log('Excellent');
}
else if(mark>=80 && mark<90){
    console.log('Good');
}
else if (mark>=70 && mark<=79){
    console.log('Satisfactory');
}
else if (mark<70){
    console.log("Needs Improvement");
}
