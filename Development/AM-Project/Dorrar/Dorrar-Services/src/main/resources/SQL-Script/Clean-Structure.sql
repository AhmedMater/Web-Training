CREATE SCHEMA `dorrar` ;
USE dorrar;

CREATE TABLE `dorrar`.`course` (
 `id` INT NOT NULL AUTO_INCREMENT,
  UNIQUE INDEX `course_idx` (`id` ASC),
  PRIMARY KEY (`id`)
);

CREATE TABLE `dorrar`.`cor_ref_type` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `label_en` VARCHAR(45) NOT NULL,
  UNIQUE INDEX `cor_ref_type_idx` (`id` ASC),
  PRIMARY KEY (`id`)
);

CREATE TABLE `dorrar`.`course_reference` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `course_id` INT NOT NULL,
  `ref_type_id` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `url` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_reference_course_idx` (`course_id` ASC),
  INDEX `fk_reference_ref_type_idx` (`ref_type_id` ASC),
  CONSTRAINT `fk_reference_course` FOREIGN KEY (`course_id`) REFERENCES `dorrar`.`course` (`id`)
    ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_reference_ref_type` FOREIGN KEY (`ref_type_id`) REFERENCES `dorrar`.`cor_ref_type` (`id`)
    ON DELETE NO ACTION ON UPDATE NO ACTION
);

CREATE TABLE `dorrar`.`course_section` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `section_name` VARCHAR(50) NOT NULL,
  `description` VARCHAR(200) NOT NULL,
  `course_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `course_section_idx` (`id` ASC),
  INDEX `fk_course_section_course_idx` (`course_id` ASC),
  CONSTRAINT `fk_course_section_course` FOREIGN KEY (`course_id`) REFERENCES `dorrar`.`course` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
);

-- Fathy - Start Authorization Task
CREATE TABLE `auth_page` (
  `id` int(11) NOT NULL,
  `label_en` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ;

CREATE TABLE `auth_role` (
  `id` int(11) NOT NULL,
  `label_en` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ;
CREATE TABLE `auth_user` (
  `id` int(11) NOT NULL,
  `user_name` varchar(45) NOT NULL,
  `password` varchar(15) NOT NULL,
  PRIMARY KEY (`id`)
) ;

CREATE TABLE `auth_action` (
  `id` int(11) NOT NULL,
  `label_en` varchar(45) NOT NULL,
  `page_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `page_id` (`page_id`),
  CONSTRAINT `page_id` FOREIGN KEY (`page_id`) REFERENCES `auth_page` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
);

CREATE TABLE `role_action` (
  `role_id` int(11) NOT NULL,
  `action_id` int(11) NOT NULL,
  KEY `fk_ra_auth_role_idx` (`role_id`),
  KEY `fk_ra_auth_action_idx` (`action_id`),
  CONSTRAINT `fk_ra_auth_action` FOREIGN KEY (`action_id`) REFERENCES `auth_action` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_ra_auth_role` FOREIGN KEY (`role_id`) REFERENCES `auth_role` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ;


CREATE TABLE `role_page` (
  `role_id` int(11) NOT NULL,
  `page_id` int(11) NOT NULL,
  KEY `fk-rp-auth-role_idx` (`role_id`),
  KEY `fk-rp-auth-page_idx` (`page_id`),
  CONSTRAINT `fk-rp-auth-page` FOREIGN KEY (`page_id`) REFERENCES `auth_page` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk-rp-auth-role` FOREIGN KEY (`role_id`) REFERENCES `auth_role` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
);


CREATE TABLE `user_action` (
  `user_id` int(11) NOT NULL,
  `action_id` int(11) NOT NULL,
  KEY `fk_ua_auth_user_idx` (`user_id`),
  KEY `fk_ua_auth_action_idx` (`action_id`),
  CONSTRAINT `fk_ua_-auth_action` FOREIGN KEY (`action_id`) REFERENCES `auth_action` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_ua_auth_user` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
);



CREATE TABLE `user_page` (
  `user_id` int(11) NOT NULL,
  `page_id` int(11) NOT NULL,
  KEY `fk-up-auth-user_idx` (`user_id`),
  KEY `fk-up-auth-page_idx` (`page_id`),
  CONSTRAINT `fk-up-auth-page` FOREIGN KEY (`page_id`) REFERENCES `auth_page` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk-up-auth-user` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
);

CREATE TABLE `user_role` (
  `user_id` int(11) NOT NULL,
  `role-id` int(11) NOT NULL,
  KEY `fk_ur_auth_user_idx` (`user_id`),
  KEY `fk_ur_auth_role_idx` (`role-id`),
  CONSTRAINT `fk_ur_auth_role` FOREIGN KEY (`role-id`) REFERENCES `auth_role` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_ur_auth_user` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
);


-- Fathy - End Authorization Task