CREATE SCHEMA `dorrar` ;

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
