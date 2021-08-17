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
  // Состояние и константы
  const maxResults = 30;
  const [startIndex, setStartIndex] = useState(0);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [cards, setCards] = useState([]);
  const [select, setSelect] = useState("");
  const [select2, setSelect2] = useState("");

  // Функция для первого селекта
  const handleSelect1 = (e) => {
    const selectedOpt1 = e.target.value;
    setSelect(selectedOpt1);
  };

  // Функция для второго селекта
  const handleSelect2 = (e) => {
    const selectedOpt2 = e.target.value;
    setSelect2(selectedOpt2);
  };

  // Основная функция по реализации поиска книг
  const handleSubmit = () => {
    setLoading(true);

    if (query === "") {
      toast.error("ПОЛЕ НЕ МОЖЕТ БЫТЬ ПУСТЫМ, ВВЕДИТЕ ТЕКСТ");
    }

    if (select === "art" && select2 === "newest") {
      axios
        .get(
          `https://www.googleapis.com/books/v1/volumes?q=${
            query + "+subject:Art"
          }&maxResults=${maxResults}&startIndex=${startIndex}&orderBy=newest&key=${keyAPI}`
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
    } else if (select === "biography" && select2 === "newest") {
      axios
        .get(
          `https://www.googleapis.com/books/v1/volumes?q=${
            query + "+subject:Biography"
          }&maxResults=${maxResults}&startIndex=${startIndex}&orderBy=newest&key=${keyAPI}`
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
    } else if (select === "computers" && select2 === "newest") {
      axios
        .get(
          `https://www.googleapis.com/books/v1/volumes?q=${
            query + "+subject:Computers"
          }&maxResults=${maxResults}&startIndex=${startIndex}&orderBy=newest&key=${keyAPI}`
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
    } else if (select === "history" && select2 === "newest") {
      axios
        .get(
          `https://www.googleapis.com/books/v1/volumes?q=${
            query + "+subject:History"
          }&maxResults=${maxResults}&startIndex=${startIndex}&orderBy=newest&key=${keyAPI}`
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
    } else if (select === "medical" && select2 === "newest") {
      axios
        .get(
          `https://www.googleapis.com/books/v1/volumes?q=${
            query + "+subject:Medicine"
          }&maxResults=${maxResults}&startIndex=${startIndex}&orderBy=newest&key=${keyAPI}`
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
    } else if (select === "poetry" && select2 === "newest") {
      axios
        .get(
          `https://www.googleapis.com/books/v1/volumes?q=${
            query + "+subject:Poetry"
          }&maxResults=${maxResults}&startIndex=${startIndex}&orderBy=newest&key=${keyAPI}`
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
    } else if (select === "newest") {
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
    } else if (select === "art") {
      axios
        .get(
          `https://www.googleapis.com/books/v1/volumes?q=${
            query + "+subject:Art"
          }&maxResults=${maxResults}&startIndex=${startIndex}&key=${keyAPI}`
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
    } else if (select === "biography") {
      axios
        .get(
          `https://www.googleapis.com/books/v1/volumes?q=${
            query + "+subject:Biography"
          }&maxResults=${maxResults}&startIndex=${startIndex}&key=${keyAPI}`
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
    } else if (select === "computers") {
      axios
        .get(
          `https://www.googleapis.com/books/v1/volumes?q=${
            query + "+subject:Computers"
          }&maxResults=${maxResults}&startIndex=${startIndex}&key=${keyAPI}`
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
    } else if (select === "history") {
      axios
        .get(
          `https://www.googleapis.com/books/v1/volumes?q=${
            query + "+subject:History"
          }&maxResults=${maxResults}&startIndex=${startIndex}&key=${keyAPI}`
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
    } else if (select === "medical") {
      axios
        .get(
          `https://www.googleapis.com/books/v1/volumes?q=${
            query + "+subject:Medicine"
          }&maxResults=${maxResults}&startIndex=${startIndex}&key=${keyAPI}`
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
    } else if (select === "poetry") {
      axios
        .get(
          `https://www.googleapis.com/books/v1/volumes?q=${
            query + "+subject:Poetry"
          }&maxResults=${maxResults}&startIndex=${startIndex}&key=${keyAPI}`
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
    } else {
      //default
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
          Гугол книги
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

          {/* Селект 1 (Категории) */}
          <div className="twoButtons d-flex text-white justify-content-center">
            <select
              className="form-select container p-1"
              onChange={handleSelect1}
            >
              <option value="all">Все</option>
              <option value="art">Искусство</option>
              <option value="biography">Биографии</option>
              <option value="computers">Компьютеры</option>
              <option value="history">История</option>
              <option value="medical">Медицина</option>
              <option value="poetry">Поэзия</option>
            </select>

            {/* Селект 2 (Сортировка) */}
            <select
              className="form-select container p-1"
              onChange={handleSelect2}
            >
              <option value="relevance">По релевантности</option>
              <option value="newest">Новинки</option>
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

            {/* Карточка с дополнительной информацией */}
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
