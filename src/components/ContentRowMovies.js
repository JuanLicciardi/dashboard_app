import React from 'react'
import ContentRowMoviesCard from './ContentRowMoviesCard'

let moviesInDb ={
    titulo: "Movies in Data Base",
    color: "primary",
    cifra : 221,
    icono : "fa-film"
}

let awardsTotal ={
    titulo: "",
    color: "",
    cifra : 221,
    icono : ""
}

let actorsTotal ={
    titulo: "",
    color: "",
    cifra : 221,
    icono : ""
}

let valueCards = [moviesInDb,awardsTotal,actorsTotal]

function ContentRowMovies() {
  return (

    <div className="row">
        <ContentRowMoviesCard {...moviesInDb} />
    </div>
    
  )
}

export default ContentRowMovies
