
# Make pk at cor-type Unique
CREATE TABLE `dorrar`.`cor_level` (
  `id` INT NOT NULL,
  `label` VARCHAR(15) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC));


#fk for type table and level taple at main details data base
ALTER TABLE `dorrar`.`cor_main_details`
  ADD COLUMN `type_id` INT NOT NULL AFTER `cousre_id`,
  ADD COLUMN `level_id` INT NOT NULL AFTER `type_id`,
  ADD INDEX `fk_cor_main_details_cor_type_idx` (`type_id` ASC),
  ADD INDEX `fk_cor_main_details_cor_level_idx` (`level_id` ASC);
ALTER TABLE `dorrar`.`cor_main_details`
  ADD CONSTRAINT `fk_cor_main_details_cor_type`
FOREIGN KEY (`type_id`)
REFERENCES `dorrar`.`cor_type` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_cor_main_details_cor_level`
FOREIGN KEY (`level_id`)
REFERENCES `dorrar`.`cor_level` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;

