function mobileQuery() {
    return 'select topic as top, descript as dis from recipes where concat(ing1, ing2, ing3) like $1 and concat(ing1, ing2, ing3) like $2 and concat(ing1, ing2, ing3) like $3 order by random()';
}

function browserQuery() {
    let q = 'where concat(ing1, ing2, ing3) like $1 and concat(ing1, ing2, ing3) like $2 and concat(ing1, ing2, ing3) like $3';
    return 'select items.total, topic as top, descript as dis, picture as pic FROM recipes, (select count(*) as total FROM recipes ' + q + ') as items ' + q + ' ORDER BY id limit $4 offset $5';
}

function mobileVariables(req) {
    let ing1 = req.query.ing1;
    let ing2 = req.query.ing2;
    let ing3 = req.query.ing3;

    let i1 = ing1 !== undefined ? "%" + ing1 + "%" : '%';
    let i2 = ing2 !== undefined ? "%" + ing2 + "%" : '%';
    let i3 = ing3 !== undefined ? "%" + ing3 + "%" : '%';

    return [i1, i2, i3];
}

function browserVariables(req) {
    let ing1 = req.query.ing1;
    let ing2 = req.query.ing2;
    let ing3 = req.query.ing3;
    let r = req.query.rows;
    let f = req.query.first;

    // to avoid huge if-else constructions in return-query functions
    let i1 = ing1 !== undefined ? "%" + ing1 + "%" : '%';
    let i2 = ing2 !== undefined ? "%" + ing2 + "%" : '%';
    let i3 = ing3 !== undefined ? "%" + ing3 + "%" : '%';
    let rows = r !== undefined ? r : 100; // maximum ammount of results
    let first = f !== undefined ? f : 0; // number of first result to get

    return [i1, i2, i3, rows, first];
}


module.exports = {
    mobileQuery, mobileVariables, browserQuery, browserVariables
}