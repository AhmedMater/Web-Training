CREATE SCHEMA `dorrar` ;
CREATE TABLE `dorrar`.`course` (
  `id` INT NOT NULL AUTO_INCREMENT,
  UNIQUE INDEX `id_UNIQUE` (`id` ASC),
  PRIMARY KEY (`id`));
CREATE TABLE `dorrar`.`reference` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `course-id` INT NOT NULL,
  `ref-type-id` INT NOT NULL,
  `name` VARCHAR(50) NOT NULL,
  `url` VARCHAR(100) NOT NULL,
  `type` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC),
  INDEX `fk-reference-course_idx` (`course-id` ASC),
  CONSTRAINT `fk-reference-course`
    FOREIGN KEY (`course-id`)
    REFERENCES `dorrar`.`course` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

    CREATE TABLE `dorrar`.`ref-type` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `label-en` VARCHAR(45) NOT NULL,
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





