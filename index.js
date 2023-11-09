const jsonServer=require("json-server")

const server = jsonServer.create()

//path for menu.json
const router = jsonServer.router("menu.json")

//return middleware used by json server 
const middleware = jsonServer.defaults()

//set up port
const PORT = process.env.PORT || 3000

server.use(middleware)
server.use(router)

//app listen
server.listen(PORT,()=>{
    console.log(`Server running at ${PORT}`);
})
