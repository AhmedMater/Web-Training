CREATE SCHEMA `dorrar` ;

-- Start Hala Create new Course Reference

CREATE TABLE `dorrar`.`course` (
 `id` INT NOT NULL AUTO_INCREMENT,
  UNIQUE INDEX `id_unique` (`id` ASC),
  PRIMARY KEY (`id`));



-- -- TODO: Hala - Table names should be small char with underscore (ref_type)
    CREATE TABLE `dorrar`.`ref-type` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `label-en` VARCHAR(45) NOT NULL,
-- -- TODO: Hala - no capital letters in names should be small (id_unique)
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


 ALTER TABLE `dorrar`.`ref-type`
 CHANGE COLUMN `label-en` `label_en` VARCHAR(45) NOT NULL , RENAME TO  `dorrar`.`ref_type` ;
CREATE TABLE `dorrar`.`reference` (
  `course_id` INT NOT NULL,
  `ref_type_id` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `url` VARCHAR(100) NOT NULL,
  INDEX `fk_reference_course_idx` (`course_id` ASC),
  INDEX `fk_reference_ref_type_idx` (`ref_type_id` ASC),
  CONSTRAINT `fk_reference_course`
    FOREIGN KEY (`course_id`)
    REFERENCES `dorrar`.`course` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_reference_ref_type`
    FOREIGN KEY (`ref_type_id`)
    REFERENCES `dorrar`.`ref_type` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

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