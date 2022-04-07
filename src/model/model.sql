-- CREATE DATABASE building;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";


CREATE TABLE company (
  company_id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
  company_name varchar(64) not null
);


CREATE TABLE complex (
  complex_id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
  complex_name varchar(124) not null,
  company_id uuid not null,
    FOREIGN KEY(company_id)
    REFERENCES company(company_id)
    ON DELETE CASCADE
);


CREATE TABLE house (
  house_id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
  house_size integer not null,
  house_rooms integer not null,
  house_price integer not null,
  house_location varchar(264) not null,
  complex_id uuid not null,
    FOREIGN KEY(complex_id)
    REFERENCES complex(complex_id)
    ON DELETE CASCADE
);
