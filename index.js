// Code your solution in this file!
function distanceFromHqInBlocks(street){
    let hq=42;
    if(street > hq){
        return street -hq;
    } else {
        return hq - street;
    }
}
function distanceFromHqInFeet(feet){
    const blocks= distanceFromHqInBlocks(feet);
    let feetPerBlock=264;
      return blocks*feetPerBlock
}
function distanceTravelledInFeet(start , destination){
    const feetPerBlock=264
    if(start > destination){
        return (start - destination)*feetPerBlock;
    } else{

    } return (destination - start)*feetPerBlock;    
}
function calculatesFarePrice(start,destination){
    const distanceFromHqInFeet=distanceTravelledInFeet(start, destination);
    if (distanceFromHqInFeet<=400){
        return 0;
    } else if (distanceFromHqInFeet > 400 && distanceFromHqInFeet <= 2000){
        return (distanceFromHqInFeet - 400)*0.02
    } else if (distanceFromHqInFeet>2000 && distanceFromHqInFeet <=2500){
        return 25;
    } else {
        return "cannot travel that far"
    }
}
console.log(calculatesFarePrice(45,50));