const Conparametro = (params) =>{

    console.log(params)
  //para los stylos se pasa es un objeto
    return <h1 style={{ color : params.color }} >
                {params.message}
            </h1>
}

export default Conparametro