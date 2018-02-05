const koa = require('koa'); 
const koaRouter = require('koa-router'); 
const koaBody = require('koa-bodyparser'); 
const { graphqlKoa, graphiqlKoa } = require('graphql-server-koa');
const myGraphQLSchema = require('./graphql/schemas/index');
const cors = require('koa-cors');
const app = new koa();
const router = new koaRouter();
const PORT = process.env.PORT || 3001;

app.use(cors());
router.post('/graphql', koaBody(), graphqlKoa({ schema: myGraphQLSchema }));
router.get('/graphql', graphqlKoa({ schema: myGraphQLSchema }));

router.get('/graphiql', graphiqlKoa({ endpointURL: '/graphql' }));

app.use(router.routes());
app.use(router.allowedMethods());
app.listen(PORT, () => {
	console.log('Graphql Server is running in port', PORT);
});