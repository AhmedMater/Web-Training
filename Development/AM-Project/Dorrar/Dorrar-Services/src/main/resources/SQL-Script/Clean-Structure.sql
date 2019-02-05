CREATE SCHEMA `dorrar` ;

-- Start Hala Create new Course Reference

CREATE TABLE `dorrar`.`course` (
  `id` INT NOT NULL AUTO_INCREMENT,
  UNIQUE INDEX `id_unique` (`id` ASC),
  PRIMARY KEY (`id`));


CREATE TABLE `dorrar`.`reference` (
  `id` INT NOT NULL AUTO_INCREMENT,

  -- TODO: Hala - columns names should be small char with underscore (course_id)
  `course-id` INT NOT NULL,
  `ref-type-id` INT NOT NULL,
  `name` VARCHAR(50) NOT NULL,
  `url` VARCHAR(100) NOT NULL,
  -- TODO: Hala - there is no need for this column as you have ref-type-id
  `type` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC),
  -- TODO: Hala - columns names should be small char with underscore (fk_reference_course_idx)
  INDEX `fk-reference-course_idx` (`course-id` ASC),
  CONSTRAINT `fk-reference-course`
    FOREIGN KEY (`course-id`)
    REFERENCES `dorrar`.`course` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

-- TODO: Hala - Table names should be small char with underscore (ref_type)
    CREATE TABLE `dorrar`.`ref-type` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `label-en` VARCHAR(45) NOT NULL,
-- TODO: Hala - no capital letters in names should be small (id_unique)
  UNIQUE INDEX `id_UNIQUE` (`id` ASC),
  PRIMARY KEY (`id`));
ALTER TABLE `dorrar`.`reference`
ADD INDEX `fk-reference-ref-type_idx` (`ref-type-id` ASC);


ALTER TABLE `dorrar`.`reference`
ADD CONSTRAINT `fk-reference-ref-type`
  FOREIGN KEY (`ref-type-id`)
  REFERENCES `dorrar`.`ref-type` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;

-- End Hala Create new Course Reference

-- Start Yara Create new Course Section

CREATE TABLE `dorrar`.`course_section` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `section_name` VARCHAR(50) NOT NULL,
  `description` VARCHAR(200) NOT NULL,
  `course_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_unique` (`id` ASC),
  INDEX `fk_course_section_course_idx` (`course_id` ASC),
  CONSTRAINT `fk_course_section_course`
    FOREIGN KEY (`course_id`)
    REFERENCES `dorrar`.`course` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

-- End Yara Create new Course Section