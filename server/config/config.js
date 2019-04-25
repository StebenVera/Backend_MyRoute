//Condiguracion para escuchar por puerto 

process.env.PORT = process.env.PORT || 8080;



//Configuracion para comparar si es entorno de despliegue o de desarrollo
process.env.NODE_ENV = process.env.NODE_ENV || 'dev'



let urlDB 

if(process.env.NODE_ENV === 'dev')
{
    urlDB = 'mongodb://localhost:27017/my_rute'
}else{
    urlDB = 'mongodb+srv://admin:dsav1648_@prototypecluster-idoet.mongodb.net/my_rute?retryWrites=true'
}

process.env.URLDB = urlDB