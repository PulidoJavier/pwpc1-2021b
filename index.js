//1.- Importar el modulo http
import http from 'http';
//2. importando el module de routes
import routes from "./routes.js"
// 3. Importando express
import Express from 'express'


//Crear una instancia de Express
const app = Express();  //(req,res,next)=> {} event handler

//Se debe colocar primero ya que el orden de registro
// determina el orden de verificacion
app.use('/about',(_, res)=>{
    console.log('Se ha realizado la peticion: "/about"');
   res.send("<h1> Acerca de ...</h1>\n Sitio inicial hecho con NodeJS!");
});
//La ruta raiz entra en todo tipo de peticion
app.use(['/','/home'],(_, res)=>{
    console.log('Se ha realizado la peticion: "/"');
   res.send("<h1>Mi APP</h1>\n Bienvenidos a este sitio!");
});

/** 
 * codigo de Emojies
 * Ref: https://www.w3schools.com/charsets/ref_emoji.asp
 */

//Poniendo a escuchar la app de express
app.listen(3000,'0.0.0.0',()=>{
    console.log("Servidor escuchando en http://0.0.0.0:3000");
})

