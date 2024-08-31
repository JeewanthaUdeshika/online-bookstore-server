CREATE TABLE bookdb.books
(
    title          varchar(100) NOT NULL,
    isbn           varchar(100) NOT NULL,
    published_date DATE         NOT NULL,
    author_id      INT          NOT NULL,
    price          DECIMAL NULL,
    description    TEXT NULL,
    id             INT          NOT NULL,
    CONSTRAINT books_pk PRIMARY KEY (id)
) ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_general_ci;

CREATE TABLE bookdb.author
(
    id       INT          NOT NULL,
    name     varchar(100) NOT NULL,
    bio      TEXT NULL,
    birthday DATE NULL,
    CONSTRAINT author_pk PRIMARY KEY (id)
) ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_general_ci;
