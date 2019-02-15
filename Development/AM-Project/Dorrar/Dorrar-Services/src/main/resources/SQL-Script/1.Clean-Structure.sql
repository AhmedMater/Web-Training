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
  user_pass varchar(15) NOT NULL
);

CREATE TABLE auth_action (
  id INT(11) NOT NULL PRIMARY KEY,
  label_en varchar(45) NOT NULL,
  page_id int(11) NOT NULL,
  CONSTRAINT page_id FOREIGN KEY (page_id) REFERENCES auth_page (id)
);

CREATE TABLE auth_role_action (
  role_id int(11) NOT NULL,
  action_id int(11) NOT NULL,
  CONSTRAINT fk_ra_auth_action FOREIGN KEY (action_id) REFERENCES auth_action (id),
  CONSTRAINT fk_ra_auth_role FOREIGN KEY (role_id) REFERENCES auth_role (id) 
) ;

CREATE TABLE auth_role_page (
  role_id int(11) NOT NULL,
  page_id int(11) NOT NULL,
  CONSTRAINT fk_rp_auth_page FOREIGN KEY (page_id) REFERENCES auth_page (id),
  CONSTRAINT fk_rp_auth_role FOREIGN KEY (role_id) REFERENCES auth_role (id)
);

CREATE TABLE auth_user_action (
  user_id int(11) NOT NULL,
  action_id int(11) NOT NULL,
  CONSTRAINT fk_ua_auth_action FOREIGN KEY (action_id) REFERENCES auth_action (id),
  CONSTRAINT fk_ua_auth_user FOREIGN KEY (user_id) REFERENCES auth_user (id) 
);

CREATE TABLE auth_user_page (
  user_id int(11) NOT NULL,
  page_id int(11) NOT NULL,
  CONSTRAINT fk_up_auth_page FOREIGN KEY (page_id) REFERENCES auth_page (id),
  CONSTRAINT fk_up_auth_user FOREIGN KEY (user_id) REFERENCES auth_user (id)
);

CREATE TABLE auth_user_role (
  user_id int(11) NOT NULL,
  role_id int(11) NOT NULL,
  CONSTRAINT fk_ur_auth_role FOREIGN KEY (role_id) REFERENCES auth_role (id),
  CONSTRAINT fk_ur_auth_user FOREIGN KEY (user_id) REFERENCES auth_user (id) 
);
CREATE TABLE `dorrar`.`personal_info` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `birthdate` datetime NOT NULL,
  `college_id` int(11) NOT NULL,
  `university_id` int(11) NOT NULL,
  `country_id` int(11) NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `user_id_unique` (`user_id`),
  KEY `fk_personal_info_college_idx` (`college_id`),
  KEY `fk_personal_info_university_idx` (`university_id`),
  KEY `fk_personal_info_country_idx` (`country_id`),
  CONSTRAINT `fk_personal_info_college` FOREIGN KEY (`college_id`) REFERENCES `college` (`id`),
  CONSTRAINT `fk_personal_info_country` FOREIGN KEY (`country_id`) REFERENCES `country` (`id`),
  CONSTRAINT `fk_personal_info_university` FOREIGN KEY (`university_id`) REFERENCES `university` (`id`)
);

CREATE TABLE `dorrar`.`college` (
  `id` INT NOT NULL,
  `labelEN` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_unique` (`id` ASC));



CREATE TABLE `dorrar`.`university` (
  `id` INT NOT NULL,
  `labelEN` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_unique` (`id` ASC));



CREATE TABLE `dorrar`.`country` (
  `id` INT NOT NULL,
  `labelEN` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_unique` (`id` ASC));