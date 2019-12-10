export function stylo2(inp1) {
    var stylo;
    if (inp1 !== '') {stylo = "fadein"} else {stylo = "fadeout";}
    return("col-lg-3 col-12 " + stylo)
}

export function stylo3(inp1, inp2) {
    var stylo;
    if (inp1 !== '' && inp2 !== '') {stylo = "fadein"} else {stylo = "fadeout";}
    return("col-lg-3 col-12 " + stylo)
}