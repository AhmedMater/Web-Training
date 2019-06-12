DROP SCHEMA IF EXISTS aml_samples;
CREATE SCHEMA aml_samples ;
USE aml_samples;

CREATE TABLE aml_users (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(45) NOT NULL,
  full_name_ar VARCHAR(45) NOT NULL,
  full_name_en VARCHAR(45) NOT NULL,
  email VARCHAR(100) NOT NULL,
  is_active INT(1) NOT NULL,
  expiry_date DATE NOT NULL,
  birth_date DATE NOT NULL,
  created_on DATETIME NOT NULL,
  last_updated_by INT NULL,
  last_updated_on DATETIME NULL,
  life_brief VARCHAR(500) NOT NULL,
  CONSTRAINT pk_aml_users PRIMARY KEY (id)
);

CREATE TABLE aml_role (
  id INT NOT NULL AUTO_INCREMENT,
  title_ar INT NOT NULL,
  title_en INT NOT NULL,
  CONSTRAINT pk_aml_role PRIMARY KEY (id)
);

CREATE TABLE aml_user_role (
  user_id INT NOT NULL,
  role_id INT NOT NULL,
  is_default INT(1) NOT NULL,
  CONSTRAINT fk_aml_user_role_users FOREIGN KEY (user_id) REFERENCES aml_users (id),
  CONSTRAINT fk_aml_user_role_role FOREIGN KEY (role_id) REFERENCES aml_role (id),
  CONSTRAINT pk_aml_user_role PRIMARY KEY (user_id,role_id)
);