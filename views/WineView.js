class WineView {
    static help(){
        console.log(`Wine Management command center : `);
        console.log(`node app.js`);
        console.log(`node app.js help`);
        console.log(`node app.js wines`);
        console.log(`node app.js add <wine_name>`);
        console.log(`node app.js sell <wine_id>`);
        console.log(`node app.js rename <wine_id> <wine_name>`);
        console.log(`node app.js findById <wine_id>`);
    }
    static wines(wines){
        console.log(`Wine Management apps : `);
        wines.forEach(wine => {
            const {id, name} = wine;
            console.log(`${id}. ${name}`)
        });
    }
    static message(message){
        console.info(message)
    }
}

module.exports = WineView;