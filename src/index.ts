import App from './app';

const port = process.env.PORT || 3000;

App.listen(port, (err) => {
    if (err) {
        return console.log(err);
    }

    return console.log(`Server is listening on ${port}`);
});