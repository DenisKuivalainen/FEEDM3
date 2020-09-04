export function styles(vw, vh, rows, rk, ing, wg, jd, top, dis, pic, fr, usb, aop) {
    let ftth = require('./UtilityMethods');
    let lk = 1 - rk;
    let urlIsIdentified = ing !== '';

    let rg = (vh - (ftth.floorToTenHundreads((vh - ftth.floorToTenHundreads(vh* 0.15)))) - ftth.floorToTenHundreads(vh* 0.05)) / 2;

    return {
        rows: rows,
        widthGreater: wg,
        jsonData: jd,
        selectedRecipe: {
            "top": top,
            "dis": dis,
            "pic": pic
        },
        ingredients: ing,
        firstRecipe: fr,
        unlockSearchButton: usb,
        ammountOfPages: aop,

        app: {
            visibility: vw > 0 ? "visible" : "hidden",
            overflow: "hidden",
            width: vw, 
            maxWidth: vw, 
            height: vh, 
            maxHeight: vh,
        },
        mainGrid: {
            width: vw, 
            display: "flex",
            flexWrap: "wrap",
            boxSizing: "border-box",
        },
        mainGridLeft: {
            flexGrow: 0,
            maxWidth: urlIsIdentified ? ftth.floorToTenHundreads(vw*lk) : vw,
            flexBasis: urlIsIdentified ? ftth.floorToTenHundreads(vw*lk) : vw,
            boxSizing: "border-box",
        },
        mainGridRight: {
            flexGrow: 0,
            maxWidth: ftth.floorToTenHundreads(vw*rk),
            flexBasis: ftth.floorToTenHundreads(vw*rk),
            boxSizing: "border-box",
        },
        leftGrid: {
            width: ftth.floorToTenHundreads(vw*lk) - ftth.floorToTenHundreads(vw*0.1), 
            display: "flex",
            flexWrap: "wrap",
            boxSizing: "border-box",
            marginTop: ftth.floorToTenHundreads(vh* 0.065),
            marginLeft: urlIsIdentified ? ftth.floorToTenHundreads(vh* 0.05) : ftth.floorToTenHundreads(vw*rk/2) + ftth.floorToTenHundreads(vh* 0.05),
            marginRight: urlIsIdentified ? ftth.floorToTenHundreads(vh* 0.05) : ftth.floorToTenHundreads(vw*rk/2) + ftth.floorToTenHundreads(vh* 0.05),
        },
        rightGrid: {
            visibility: urlIsIdentified ? "visible" : "hidden",
            width: ftth.floorToTenHundreads(vw*rk) - ftth.floorToTenHundreads(vh* 0.05), 
            display: "flex",
            flexWrap: "wrap",
            boxSizing: "border-box",
            marginTop: ftth.floorToTenHundreads(vh* 0.05),
            marginRight: ftth.floorToTenHundreads(vh* 0.05),
        },
        leftItemGrid: {
            flexGrow: 0,
            maxWidth: ftth.floorToTenHundreads(vw*lk) - ftth.floorToTenHundreads(vw*0.1), 
            flexBasis: ftth.floorToTenHundreads(vw*lk) - ftth.floorToTenHundreads(vw*0.1), 
            boxSizing: "border-box",
            marginBottom: ftth.floorToTenHundreads(vh* 0.025),
        },
        rightItemGrid: {
            flexGrow: 0,
            maxWidth: ftth.floorToTenHundreads((ftth.floorToTenHundreads(vw*rk) - ftth.floorToTenHundreads(vh* 0.05)) / rows),
            flexBasis: ftth.floorToTenHundreads((ftth.floorToTenHundreads(vw*rk) - ftth.floorToTenHundreads(vh* 0.05)) / rows),
            boxSizing: "border-box",
            padding: ftth.floorToTenHundreads(vh * 0.015),
        },
        fullWidth: {
            flexGrow: 0,
            maxWidth: vw,
            width: vw,
            height: rg,
            boxSizing: "border-box",
            bottom: 0,
            paddingTop: rg * 0.5,
            fontSize: rg * 0.4,
        },
        pageSwitchButtons: {
            height: rg,
            boxSizing: "border-box",
            bottom: rg,
            padding: 5,
            display: "flex", 
            justifyContent: "flex-end",
        },
        pageSwitchButton: {
            flexGrow: 0,
            width: rg - 20,
            height: rg - 20,
            fontSize: rg - 20,
            marginRight: ftth.floorToTenHundreads(vh* 0.05),
        },
        boxGrid: {
            flexGrow: 0,
            maxWidth: vw,
            flexBasis: vw,
            boxSizing: "border-box",
        },
        logo: {
            width: "100%", 
            marginBottom: ftth.floorToTenHundreads(vh* 0.075),
        },
        recipeBox: {
            width: ftth.floorToTenHundreads((ftth.floorToTenHundreads(vw*rk) - ftth.floorToTenHundreads(vh* 0.05)) / rows) - ftth.floorToTenHundreads(vh * 0.03) - 20,
            height: ftth.floorToTenHundreads((vh - ftth.floorToTenHundreads(vh* 0.15)) / 3) - ftth.floorToTenHundreads(vh * 0.03) - 20
        },
        recipeImage: {
            width: ftth.floorToTenHundreads((ftth.floorToTenHundreads(vw*rk) - ftth.floorToTenHundreads(vh* 0.05)) / rows) - ftth.floorToTenHundreads(vh * 0.03) - 20,
            height: (ftth.floorToTenHundreads((vh - ftth.floorToTenHundreads(vh* 0.15)) / 3) - ftth.floorToTenHundreads(vh * 0.03) - 40) *3/4
        },
        badBatchMain: {
            marginLeft:  vw * 0.2,
            marginRight: vw * 0.2,
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            width: vw * 0.6,
        },
        badBatchText: {
            marginBottom: vw * 0.05,
        },
        badBatchLogo: {
            width: vw * 0.5,
            marginLeft: vw * 0.05,
            marginRight: vw * 0.05,
            marginBottom: vw * 0.05,
        },
        recipeMain: {
            marginTop: ftth.floorToTenHundreads(vh* 0.05),
            marginLeft: ftth.floorToTenHundreads(vh* 0.05),
            marginRight: ftth.floorToTenHundreads(vh* 0.05),
            width: ftth.floorToTenHundreads(vw - vh*0.1),
            height: vh-rg
        },
        recipeBorder: {
            width: ftth.floorToTenHundreads(vw - vh*0.1),
            height: ftth.floorToTenHundreads((vh-rg*3)),
            marginBottom: ftth.floorToTenHundreads(rg/4),
        },
        recipePic: {
            marginTop: ftth.floorToTenHundreads(vh* 0.05),
            marginLeft: ftth.floorToTenHundreads(vh* 0.05),
            width: ftth.floorToTenHundreads(vw - vh*0.1) - ftth.floorToTenHundreads(vh* 0.1),
            height: ftth.floorToTenHundreads((ftth.floorToTenHundreads(vh-rg*3) - ftth.floorToTenHundreads(vh* 0.1)) * 0.3),
        },
        recipeName: {
            marginTop: ftth.floorToTenHundreads(vh* 0.05),
            marginLeft: ftth.floorToTenHundreads(vh* 0.05),
            width: ftth.floorToTenHundreads(vw - vh*0.1) - ftth.floorToTenHundreads(vh* 0.1),
            fontSize: ftth.floorToTenHundreads((ftth.floorToTenHundreads(vh-rg*3) - ftth.floorToTenHundreads(vh* 0.1)) * 0.07),
        },
        recipeDesc: {
            marginTop: ftth.floorToTenHundreads(vh* 0.03),
            marginLeft: ftth.floorToTenHundreads(vw* 0.07),
            width: ftth.floorToTenHundreads(vw - vh*0.1) - ftth.floorToTenHundreads(vw* 0.14),
            fontSize: ftth.floorToTenHundreads((ftth.floorToTenHundreads((vh-rg*3)) - ftth.floorToTenHundreads(vh* 0.08) - (ftth.floorToTenHundreads((ftth.floorToTenHundreads(vh-rg*3) - ftth.floorToTenHundreads(vh* 0.1)) * 0.07) + ftth.floorToTenHundreads(vh* 0.05)) - ftth.floorToTenHundreads((ftth.floorToTenHundreads(vh-rg*3) - ftth.floorToTenHundreads(vh* 0.1)) * 0.3))/17),
        },
        backButton: {
            width: ftth.floorToTenHundreads(((rg - 20)*5/6)*7/2) + 20,
            height: rg - 20,
            fontSize: ftth.floorToTenHundreads((rg - 20)*5/6),
        },
    }
}