import { Component } from "react";
import booksData from "./books/fantasy.json";

class AllTheBooks extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          {booksData.map((book) => (
            <div key={book.asin} className="col-md-3 mb-4">
              <div className="card h-100">
                <img src={book.img} alt={book.title} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{book.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default AllTheBooks;
