# FEEDM3 - a recipe book

This project was started as a university project with [Vladimir Priede](https://github.com/Vladimirs-pr) and [Edward Brovkin](https://github.com/EdwardBro). Originaly project was developed on React + PHP and hosted on Respberry Pi (as server).

Later I decided to remaster this project, as some aspects did not sutisfy me, so I change the whole structure of the project. Now it is React + Node and hosted on Heroku.

## Links

* [Webpage](https://feedm3.herokuapp.com/) hosted on Heroku.

### Technologies

* React js
* Node js

### Application logic

##### User side

When creating a project, I pursued to create a simple and intuitive interface for the user so that it was possible to use the web application easily and without instructions.

There are 4 main components of the interface: the search fields, the results field, the recipe field and the field with information about the incorrect format. In the search fields, the user enters the search criteria for recipes, and by clicking on the button, the result is displayed in the results field. The result field is a collection of cards. Their number on the page is determined by the size of the user's screen. By clicking on the card, the user will go to the recipe field, from where he can return to view the results by clicking on the back button.

All input fields and results are rendered depending on the data already entered. Styles are also defined depending on the user's settings. If the screen is too long, then the user will be presented with a field informing about this with a request to change the parameters.

##### Server side

The server, receiving a request, uses the query parameters to compose the query into the database. The request will be composed in such a way that even an incomplete spelling of the ingredient will give the desired result.

```sh
function browserQuery() {
    let q = 'where concat(ing1, ing2, ing3) like $1 and concat(ing1, ing2, ing3) like $2 and concat(ing1, ing2, ing3) like $3';
    return 'select items.total, topic as top, descript as dis, picture as pic FROM recipes, (select count(*) as total FROM recipes ' + q + ') as items ' + q + ' ORDER BY id limit $4 offset $5';
}
```

It also uses injection protection to avoid intruders into the database.

In addition to the main code for the web application, the server also contains modules that provide the [mobile version](https://github.com/DenisKuivalainen/FEEDM3-mobile) of this application.

```sh
// download mobile app
app.get('/download', function (req, res) {
    let file = "FEEDM3.apk";
    let fPath = path.join(__dirname, file);
    res.download(fPath);
});
```

## License

MIT
