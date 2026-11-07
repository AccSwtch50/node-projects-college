const express = require('express');
const path = require('path');
const app = express();
const port = 43254;
const websiteModule = require('./websiteModule.js');
const fileListModule = require('./server_side/file_list.js');

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
	res.render('index.ejs', { title: "", content: websiteModule.homeContent(), pageStyle: "/styles/home.css" });
});

app.get('/file_list', (req, res) => {
	res.render('index.ejs', { title: "File List - ", content: "", pageStyle: "/styles/file_list.css" });
});

app.get('/article{/:id}{/:name}', (req, res) => {
	res.render('index.ejs', { title: "Article List - ", content: "", pageStyle: "/styles/file_list.css" });
});

app.get('/flash{/:animation}', (req, res) => {
	res.render('index.ejs', { title: "Interactives - ", content: "", pageStyle: "/styles/file_list.css" });
});

const server = app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});