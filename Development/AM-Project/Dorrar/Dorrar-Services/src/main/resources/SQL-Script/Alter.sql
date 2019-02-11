ALTER TABLE dorrar.cor_level
  CHANGE COLUMN label label_en VARCHAR(15) NOT NULL ;

ALTER TABLE dorrar.cor_main_details
  CHANGE COLUMN start_date start_date DATE NOT NULL ;
