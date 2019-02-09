DROP SCHEMA dorrar;
CREATE SCHEMA dorrar ;
USE dorrar;

CREATE TABLE course (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY
);

CREATE TABLE cor_ref_type (
  id INT NOT NULL  PRIMARY KEY,
  label_en VARCHAR(45) NOT NULL
);

CREATE TABLE course_reference (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  course_id INT NOT NULL,
  ref_type_id INT NOT NULL,
  name VARCHAR(45) NOT NULL,
  url VARCHAR(100) NOT NULL,
  CONSTRAINT fk_reference_course FOREIGN KEY (course_id) REFERENCES course (id),
  CONSTRAINT fk_reference_ref_type FOREIGN KEY (ref_type_id) REFERENCES cor_ref_type (id)
);

CREATE TABLE course_section (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  section_name VARCHAR(50) NOT NULL,
  description VARCHAR(200) NOT NULL,
  course_id INT NOT NULL,
  CONSTRAINT fk_course_section_course FOREIGN KEY (course_id) REFERENCES course (id)
);

CREATE TABLE cor_main_details (
  name VARCHAR(15) NOT NULL PRIMARY KEY,
  duration INT NOT NULL,
  start_date INT NOT NULL,
  description VARCHAR(200) NULL,
  cousre_id INT NOT NULL,
  CONSTRAINT fk_cor_main_details_course FOREIGN KEY (cousre_id) REFERENCES course (id)
);

CREATE TABLE cor_type (
  id INT NOT NULL PRIMARY KEY,
  label_en VARCHAR(15) NOT NULL
);

CREATE TABLE cor_level (
  id INT NOT NULL PRIMARY KEY,
  -- TODO: Youssef - rename to label_en and add script to Alter.sql
  label VARCHAR(15) NOT NULL
);

CREATE TABLE auth_page (
  id INT(11) NOT NULL PRIMARY KEY,
  label_en varchar(45) NOT NULL
) ;

CREATE TABLE auth_role (
  id INT(11) NOT NULL PRIMARY KEY,
  label_en varchar(45) NOT NULL  
) ;
CREATE TABLE auth_user (
  id INT(11) NOT NULL PRIMARY KEY,
  user_name varchar(45) NOT NULL,
  -- TODO: Aya - rename to user_pass and add script to Alter.sql
  password varchar(15) NOT NULL  
);

-- TODO: Fathy - rename table to start with auth_
CREATE TABLE auth_action (
  id INT(11) NOT NULL PRIMARY KEY,
  label_en varchar(45) NOT NULL,
  page_id int(11) NOT NULL,
  CONSTRAINT page_id FOREIGN KEY (page_id) REFERENCES auth_page (id)
);

-- TODO: Fathy - rename table to start with auth_
CREATE TABLE role_action (
  role_id int(11) NOT NULL,
  action_id int(11) NOT NULL,
  CONSTRAINT fk_ra_auth_action FOREIGN KEY (action_id) REFERENCES auth_action (id),
  CONSTRAINT fk_ra_auth_role FOREIGN KEY (role_id) REFERENCES auth_role (id) 
) ;


-- TODO: Fathy - rename table to start with auth_
CREATE TABLE role_page (
  role_id int(11) NOT NULL,
  page_id int(11) NOT NULL,
  -- TODO: Fathy - replace dash with underscore and add script to Alter.sql
  CONSTRAINT fk-rp-auth-page FOREIGN KEY (page_id) REFERENCES auth_page (id),
  -- TODO: Fathy - replace dash with underscore and add script to Alter.sql
  CONSTRAINT fk-rp-auth-role FOREIGN KEY (role_id) REFERENCES auth_role (id) 
);

-- TODO: Fathy - rename table to start with auth_
CREATE TABLE user_action (
  user_id int(11) NOT NULL,
  action_id int(11) NOT NULL,
  -- TODO: Fathy - remove dash and add script to Alter.sql
  CONSTRAINT fk_ua_-auth_action FOREIGN KEY (action_id) REFERENCES auth_action (id),
  CONSTRAINT fk_ua_auth_user FOREIGN KEY (user_id) REFERENCES auth_user (id) 
);

-- TODO: Fathy - rename table to start with auth_
CREATE TABLE user_page (
  user_id int(11) NOT NULL,
  page_id int(11) NOT NULL,
  -- TODO: Fathy - replace dash with underscore and add script to Alter.sql
  CONSTRAINT fk-up-auth-page FOREIGN KEY (page_id) REFERENCES auth_page (id),
  -- TODO: Fathy - replace dash with underscore and add script to Alter.sql
  CONSTRAINT fk-up-auth-user FOREIGN KEY (user_id) REFERENCES auth_user (id) 
);

-- TODO: Fathy - rename table to start with auth_
CREATE TABLE user_role (
  user_id int(11) NOT NULL,
  -- TODO: Fathy - replace dash with underscore and add script to Alter.sql
  role-id int(11) NOT NULL,
  CONSTRAINT fk_ur_auth_role FOREIGN KEY (role-id) REFERENCES auth_role (id),
  CONSTRAINT fk_ur_auth_user FOREIGN KEY (user_id) REFERENCES auth_user (id) 
);