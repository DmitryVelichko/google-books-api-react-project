import React, { useState } from "react";
import "./App.css";
import {
  InputGroup,
  Input,
  InputGroupAddon,
  Button,
  Spinner,
} from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import axios from "axios";
import BookCard from "./BookCard.js";
import keyAPI from "./KeyAPI";

function App() {
  // Состояние
  const [maxResults, setMaxResults] = useState(30);
  const [startIndex, setStartIndex] = useState(0);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [cards, setCards] = useState([]);
  const [select, setSelect] = useState("");
  //  const [select2, setSelect2] = useState("");

  const handleSelect1 = (e) => {
    const selectedOpt1 = e.target.value;
    setSelect(selectedOpt1);
  };

  const handleSelect2 = (e) => {
    const selectedOpt2 = e.target.value;
    setSelect(selectedOpt2);
  };

  // Основная функция по реализации поиска книг с обработкой пустой строки и строки с пробелами
  const handleSubmit = () => {
    setLoading(true);

    if (query === "" || query.includes(" ", 0)) {
      toast.error("ПОЛЕ НЕ МОЖЕТ БЫТЬ ПУСТЫМ, ВВЕДИТЕ ТЕКСТ");
    }

    switch (select) {
      case "newest":
        axios
          .get(
            `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=${maxResults}&startIndex=${startIndex}&orderBy=newest&key=${keyAPI}`
          )
          .then((res) => {
            if (res.data.items.length > 0) {
              setCards(res.data.items);
              setLoading(false);
              setStartIndex(startIndex + 29);
            }
          })
          .catch((err) => {
            setLoading(true);
            console.log(err.response);
          });
          break;
      

      case "art":
        axios
        .get(
          `https://www.googleapis.com/books/v1/volumes?q=${query+"+subject:Art"}&maxResults=${maxResults}&startIndex=${startIndex}&key=${keyAPI}`
        )
        .then((res) => {
          if (res.data.items.length > 0) {
            setCards(res.data.items);
            setLoading(false);
            setStartIndex(startIndex + 29);
          }
        })
        .catch((err) => {
          setLoading(true);
          console.log(err.response);
        });
        break;

      case "biography":
        axios
        .get(
          `https://www.googleapis.com/books/v1/volumes?q=${query+"+subject:Biography"}&maxResults=${maxResults}&startIndex=${startIndex}&key=${keyAPI}`
        )
        .then((res) => {
          if (res.data.items.length > 0) {
            setCards(res.data.items);
            setLoading(false);
            setStartIndex(startIndex + 29);
          }
        })
        .catch((err) => {
          setLoading(true);
          console.log(err.response);
        });
        break;

      case "computers":
        axios
        .get(
          `https://www.googleapis.com/books/v1/volumes?q=${query+"+subject:Computers"}&maxResults=${maxResults}&startIndex=${startIndex}&key=${keyAPI}`
        )
        .then((res) => {
          if (res.data.items.length > 0) {
            setCards(res.data.items);
            setLoading(false);
            setStartIndex(startIndex + 29);
          }
        })
        .catch((err) => {
          setLoading(true);
          console.log(err.response);
        });
        break;

      case "history":
        axios
        .get(
          `https://www.googleapis.com/books/v1/volumes?q=${query+"+subject:History"}&maxResults=${maxResults}&startIndex=${startIndex}&key=${keyAPI}`
        )
        .then((res) => {
          if (res.data.items.length > 0) {
            setCards(res.data.items);
            setLoading(false);
            setStartIndex(startIndex + 29);
          }
        })
        .catch((err) => {
          setLoading(true);
          console.log(err.response);
        });
        break;

      case "medical":
        axios
          .get(
            `https://www.googleapis.com/books/v1/volumes?q=${query+"+subject:Medicine"}&maxResults=${maxResults}&startIndex=${startIndex}&key=${keyAPI}`
          )
          .then((res) => {
            if (res.data.items.length > 0) {
              setCards(res.data.items);
              setLoading(false);
              setStartIndex(startIndex + 29);
            }
          })
          .catch((err) => {
            setLoading(true);
            console.log(err.response);
          });
          break;

      case "poetry":

      case "all":
      default:
        axios
          .get(
            `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=${maxResults}&startIndex=${startIndex}&key=${keyAPI}`
          )
          .then((res) => {
            if (res.data.items.length > 0) {
              setCards(res.data.items);
              setLoading(false);
              setStartIndex(startIndex + 29);
            }
          })
          .catch((err) => {
            setLoading(true);
            console.log(err.response);
          });
          break;
    }
  };

  // Основной UI
  const mainHeader = () => {
    return (
      <div className="main-image d-flex justify-content-center align-items-center flex-column">
        {/* Заголовок*/}
        <div className="filter"></div>
        <h1
          className="display-2 text-center text-white mb-3"
          style={{ zIndex: 2 }}
        >
          Гугол Книги
        </h1>

        {/*Поисковая строка */}
        <div style={{ width: "60%", zIndex: 2 }}>
          <InputGroup size="lg" className="mb-3">
            <Input
              placeholder="Book Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSubmit()}
            />

            {/* Кнопка лупы */}
            <InputGroupAddon addonType="append">
              <Button color="secondary" onClick={handleSubmit}>
                <i className="fas fa-search"></i>
              </Button>
            </InputGroupAddon>
          </InputGroup>

          {/* 2 КНОПКИ (Категории и сортировка) */}
          <div className="twoButtons d-flex text-white justify-content-center">
            <select
              className="form-select container p-1"
              onChange={handleSelect1}
            >
              <option value="all">Все</option>
              <option value="art">Art</option>
              <option value="biography">Biography</option>
              <option value="computers">Computers</option>
              <option value="history">Hisotry</option>
              <option value="medical">Medical</option>
              <option value="poetry">Poetry</option>
            </select>

            <select
              className="form-select container p-1"
              onChange={handleSelect2}
            >
              <option value="relevance">По релевантности</option>
              <option value="newest">Newest</option>
            </select>

            {/* Кнопка "загрузить ещё" */}
            <Button className="loadMore" onClick={handleSubmit}>
              Загрузить ещё
            </Button>
          </div>
        </div>
      </div>
    );
  };

  // Спиннер загрузки
  const handleCards = () => {
    if (loading) {
      return (
        <div className="d-flex justify-content-center mt-3">
          <Spinner style={{ width: "3rem", height: "3rem" }} />
        </div>
      );
    } else {
      const items = cards.map((item, i) => {
        let thumbnail = "";

        if (item.volumeInfo.imageLinks) {
          thumbnail = item.volumeInfo.imageLinks.thumbnail;
        }

        return (
          <div className="col-lg-4 mb-3" key={item.id}>
            <BookCard
              thumbnail={thumbnail}
              title={item.volumeInfo.title}
              pageCount={item.volumeInfo.pageCount}
              language={item.volumeInfo.language}
              authors={item.volumeInfo.authors}
              publisher={item.volumeInfo.publisher}
              description={item.volumeInfo.description}
              previewLink={item.volumeInfo.previewLink}
              infoLink={item.volumeInfo.infoLink}
              mainCategory={item.volumeInfo.categories}
            />
          </div>
        );
      });
      return (
        <div className="container my-5">
          <div className="row">{items}</div>
        </div>
      );
    }
  };
  return (
    <div className="w-100 h-100">
      {mainHeader()}
      {handleCards()}
      <ToastContainer />
    </div>
  );
}

export default App;
