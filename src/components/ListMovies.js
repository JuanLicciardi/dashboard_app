import React from 'react'

function ListMovies() {
  return (
    <React.Fragment>
    
    <h1 className="h3 mb-2 text-gray-800">All the movies in the Database</h1>
    
    <div className="card shadow mb-4">
        <div className="card-body">
            <div className="table-responsive">
                <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                            <th>Titulo</th>
                            <th>Duración</th>
                            <th>Rating</th>
                            <th>Genero</th>
                            <th>Premios</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Billy Elliot</td>
                            <td>123</td>
                            <td>5</td>
                            <td> <ul> <li>Drama</li><li>Comedia</li> </ul> </td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <td>Alicia en el país de las maravillas</td>
                            <td>142</td>
                            <td>4.8</td>
                            <td> <ul> <li>Drama</li><li>Acción</li><li>Comedia</li> </ul> </td>
                            <td>3</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>            
</React.Fragment> 
    

  )
}

export default ListMovies
