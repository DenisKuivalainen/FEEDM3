
// TODO: add injection prevention
function t(req) {
    let i1 = req.query.ing1;
    let i2 = req.query.ing2;
    let i3 = req.query.ing3;

    if(i3 !== '') {
        return 'select topic as top, descript as dis from food where (ing1 = $1 or ing2 = $1 or ing3 = $1) and (ing1 = $2 or ing2 = $2 or ing3 = $2) and (ing1 = $3 or ing2 = $3 or ing3 = $3) order by random()'
    } else if(i2 !== '') {
        return 'select topic as top, descript as dis from food where (ing1 = $1 or ing2 = $1 or ing3 = $1) and (ing1 = $2 or ing2 = $2 or ing3 = $2) order by random()';
    } else if(i1 !== '') {
        return 'select topic as top, descript as dis from food where (ing1 = $1 or ing2 = $1 or ing3 = $1) order by random()';
    } else {
        return 'select topic as top, descript as dis from food order by random()';
    }
}

function v(req) {
    let i1 = req.query.ing1;
    let i2 = req.query.ing2;
    let i3 = req.query.ing3;

    if(i3 !== '') {
        return [i1, i2, i3];
    } else if(i2 !== '') {
        return [i1, i2];
    } else if(i1 !== '') {
        return [i1];
    } else {
        return [];
    }
}

module.exports = {
    t, v
}