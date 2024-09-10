import express from 'express';
const app=express();
app.get('/',(req,res)=>{
    res.send('Server is ready');
})
app.get('/api/jokes',(req,res)=>{
    const jokes=[
        {
            id:1,
            title:'a joke',
            content:'this is a joke'
        },
        {
            id:2,
            title:'b joke',
            content:'this is b joke'
        },
        {
            id:3,
            title:'c joke',
            content:'this is c joke'
        },
        {
            id:4,
            title:'d joke',
            content:'this is d joke'
        }
    ]
    res.send(jokes);
});
const port =process.env.PORT||3000;
app.listen(port,()=>{
    console.log(`Server at http://localhost:${port} `)
})