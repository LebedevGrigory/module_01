'use strick'


const getLargestDivisor = (a,b) => {
    if(b > a) return getLargestDivisor(b,a);
    if(!b) return a;
    return getLargestDivisor(b, a % b);

};

console.log(getLargestDivisor(140,20))


