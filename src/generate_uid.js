function uidPart(){
    var part = (Math.random() * 46656) | 0;
    part = ("000" + part.toString(36)).slice(-3);
    return part
}

 export function generateUID() {
    return uidPart() + uidPart();
}
