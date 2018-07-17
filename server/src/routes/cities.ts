import citycontroller from "../controllers/city-controller";
import * as router from 'simple-router';
let app = router();

export var route = app.route;

app.get('/', (req: any, res: any) => {
    res.send("Hello world");
});

app.post('/add-city', (req: any, res: any) => {
    console.log('Calling route /add-city');
    const city = req.body;
    return citycontroller.addCity(city)
        .then(result => {
            return res.send(result);
        })
        .catch(err => {
            return res.setatus(err.code).send(err.message);
        })
});

app.post('/add-cities', (req: any, res: any) => {
    console.log('Calling route /add-cities');
    console.log(req.body);
    const cities = req.body;
    return citycontroller.addCities(cities)
        .then(result => {
            return res.send(result);
        })
        .catch(err => {
            return res.setatus(err.code).send(err.message);
        })
});

app.get('/get-cities', (req: any, res: any) => {
    console.log('Calling route /get-cities');
    return citycontroller.getCities()
        .then(result => {
            return res.send(result);
        })
        .catch(err => {
            return res.status(err.code).send(err.message);
        })
});

app.get('/get-city/:name', (req: any, res: any) => {
    console.log('Calling route /get-city');
    return citycontroller.getCityByName(req.params.name)
        .then(result => {
            return res.send(result);
        })
        .catch(err => {
            return res.status(err.code).send(err.message);
        })
});

app.delete('/delete/:name', (req: any, res: any) => {
    console.log('Calling route /delete');
    return citycontroller.deleteCity(req.params.name)
        .then(result => {
            return res.send(result);
        })
        .catch(err => {
            return res.status(err.code).send(err.message);
        })
});

app.delete('/delete-all', (req: any, res: any) => {
    console.log('Calling route /delete-all');
    return citycontroller.deleteAllCities(req.body)
        .then(result => {
            return res.send(result);
        })
        .catch(err => {
            return res.status(err.code).send(err.message);
        })
});
