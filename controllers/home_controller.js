
module.exports.home = async (req, res) => {
    let name;
    try {
        if (req.query.name){
            name=req.query.name;
            let searchURI='http://universities.hipolabs.com/search?country=India&name='+name;
            let results=await(await fetch(searchURI)).json();
            console.log(results);
            return res.render('home', {
                title: "Home",
                results: results,
                name: name
            })
        }
    }
    catch (err) {
        console.log(err);
    }
    return res.render('home', {
        title: "Home",
        results: null
    })
}