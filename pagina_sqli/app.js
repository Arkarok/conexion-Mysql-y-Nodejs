var mysql=require("mysql");

var conexion=mysql.createConnection({
    host: "localhost",
    database: "escuela",
    user: "root",
    password: "root"
});

conexion.connect(function(error){
    if(error){
        throw error;
    }else{
        console.log("conexion exitosa");
    }
})

conexion.query("SELECT * from alumno", function(error,results,fields){
    if(error)
    throw error;

    results.forEach(element => {
        console.log(element)
    });

})

conexion.end();