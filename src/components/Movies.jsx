
import React, { useState } from "react";
 import meridaImg from '../assets/merida.jfif'
import moanaImg from '../assets/moana.jfif'
import soulImg from '../assets/soul.jfif'
import wolfImg from '../assets/wolf.jfif'

 function Movies() {
  const [movies, setMovies] = useState([
    { id: 1, name: "Merida", tiket: 7, price: 150, year: 2021, img: meridaImg },
    { id: 2, name: "Moana", tiket: 5, price: 120, year: 2020, img: moanaImg },
    { id: 3, name: "Soul", tiket: 3, price: 100, year: 2019, img: soulImg },
    { id: 4, name: "Wolf Children", tiket: 2, price: 130, year: 2021, img: wolfImg },
  ]);
 const bookTicket = (id) => {
    setMovies((prevMovies) =>
      prevMovies.map((movie) =>
        movie.id === id && movie.tiket > 0
          ? { ...movie, tiket: movie.tiket - 1 }
          : movie
      )
    );
  };
  return (
    <>
      <div className="container my-5">
        <div className="bg-dark py-4">
        <h2 className="text-center text-light ">Movies</h2>
        </div>
        <div className="row my-5" >
          {movies.map((movie) => (
            <div className="col-md-3 mb-4" key={movie.id}>
              <div className="card h-100 shadow">
                <img
                  src={movie.img}
                  className="card-img-top h-75"
                  alt={movie.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{movie.name}</h5>
                  <p className="card-text">
                     Tickets: {movie.tiket} <br />
                     Price: {movie.price} EGP <br />
                    Year: {movie.year}
                  </p>
                </div>
                <div className="card-footer text-center">
                  <button
                  onClick={() => bookTicket(movie.id)}
                  disabled={movie.tiket === 0}
                  className={`btn w-100 ${
                    movie.tiket === 0
                      ? "btn-secondary" 
                      : movie.tiket < 2
                      ? "btn-danger" 
                      : movie.tiket <= 4
                      ? "btn-warning" 
                      : "btn-success"
                  }`}
                >
                  {movie.tiket === 0 ? "Sold Out" :movie.tiket==1? "Last Ticket" :"Buy Now"}
                </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Movies