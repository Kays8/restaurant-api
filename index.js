const express = require('express');
const app = express();
const PORT = 5000; // ตั้งค่าพอร์ตเป็น 5000

app.get('/', (req,res)=>{
    res.send('<h1>Hello Restaurant API<h1/>');
});

app.listen(PORT, ()=>{
    console.log('listening to http://localhost:'+PORT);
});