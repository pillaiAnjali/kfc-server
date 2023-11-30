const jsonServer=require("json-server")

const server = jsonServer.create()

//path for db.json
const router = jsonServer.router("db.json")
//return middleware used by json server 
const middleware = jsonServer.defaults()

//set up port
const PORT = process.env.PORT || 3000

server.use(middleware)
server.use(router)
server.use(router1)

//app listen
server.listen(PORT,()=>{
    console.log(`Server running at ${PORT}`);
})
