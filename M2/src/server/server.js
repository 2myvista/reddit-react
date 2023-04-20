import express from 'express'
import ReactDOM from 'react-dom/server';
import { indexTemplate } from './indexTemplate';
import {App} from '../App';
import axios from 'axios';
import { log } from 'console';

const app = express();

app.use('/static', express.static('./dist/client'));

app.get('/', (req, res)=>{
    res.send(
        indexTemplate(ReactDOM.renderToString(App()),)
    );
});

app.get('/auth', (req, res)=>{
	//console.log();
	axios.post(
		'https://www.reddit.com/api/v1/access_token',
		`grant_type=authorization_code&code=${req.query.code}&redirect_uri=http://localhost:3000/auth`,
		{
			auth: {username:process.env.CLIENT_ID, password:'OLw49h6TXoLF7hXpv16ecuXK2Hji9g'},
			headers: {'Content-type' : 'application/x-www-form-urlencoded'}
		}
	)
	.then(({ data })=> {
        console.log(data);
			res.send(
				indexTemplate(ReactDOM.renderToString(App()),data['access_token'])
			);

	})
	.catch(console.log);
});

app.listen(3000, () =>{
    console.log('server started on 3000 port http://localhost:3000');
})