const express = require('express');
const app = express();

// app.use((req, res)=>{ 
//     console.log('We got a new request!!!')

//     res.send('<h1>This is my webpage</h1>')
// })
app.get('/', (req, res) => {
    res.send('this is the home page!!!!!')
})

app.get('/r/:subreddit', (req, res) => {
    console.dir(req.params);
    const { subreddit } = req.params;
    res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`)
})

app.get('/r/:subreddit/:postId', (req, res) => {
    console.dir(req.params);
    const { subreddit, postId } = req.params;
    res.send(`<h1>Viewing post Id: ${postId} in the ${subreddit} subreddit</h1>`)
})

app.post("/cats", (req, res) => {
    res.send("post request to /cats!!! this is different than a get request")
})


app.get('/cats', (req, res) => {
    console.log("Cats request!!!")
    res.send('meow')
})

app.get('/dogs', (req, res) => {
    res.send('WOOF WOOFs')
})

app.get('/search', (req, res)=>{
    const {q} = req.query;
    if(!q){
        res.send('Nothing found if nothing searched!!!!')
    }
    res.send(`Search results for ${q} `)
})

app.get('*', (req, res) => {
    res.send('i dont know that path')
})

app.listen(3000, () => {
    console.log('Listening on port 3000')
})