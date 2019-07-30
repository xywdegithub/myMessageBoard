var express=require('express');
var app=express();
var bodyParser = require('body-parser')
console.log(bodyParser)
var list=[{
	name:'张三',
	content:'我是张三',
	datetime:'2018-9-9 21:11:00'
},
{
	name:'张三1',
	content:'我是张三1',
	datetime:'2018-9-9 21:11:00'
},{
	name:'张三2',
	content:'我是张三2',
	datetime:'2018-9-9 21:11:00'
},{
	name:'张三3',
	content:'我是张三3',
	datetime:'2018-9-9 21:11:00'
},{
	name:'张三4',
	content:'我是张三4',
	datetime:'2018-9-9 21:11:00'
},
]
app.use('/res/',express.static('./res/'))
app.engine('html',require('express-art-template'))
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.get('/',(req,res)=>{
	res.render('list.html',{list})
})
app.get('/write.html',(req,res)=>{
	res.render('write.html')
})
app.post('/getData',(req,res)=>{
	var comm=req.body;
	comm.datetime='2019-3-3 00:00:00'
	list.unshift(comm)
	res.redirect('/')
})
app.get('/getData',(req,res)=>{
	var comm=req.query;
	comm.datetime='2019-3-3 00:00:00'
	list.unshift(comm)
	res.redirect('/')
})
app.listen(3000)
