
 ALTER TABLE `dorrar`.`ref-type`
 CHANGE COLUMN `label-en` `label_en` VARCHAR(45) NOT NULL , RENAME TO  `dorrar`.`ref_type` ;



 ALTER TABLE `dorrar`.`reference`
 ADD CONSTRAINT `fk-reference-ref-type`
  FOREIGN KEY (`ref-type-id`)
  REFERENCES `dorrar`.`ref-type` (`id`)
  ON DELETE NO ACTION
   ON UPDATE NO ACTION;