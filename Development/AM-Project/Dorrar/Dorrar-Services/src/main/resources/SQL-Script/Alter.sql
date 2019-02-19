ALTER TABLE cor_level
  CHANGE COLUMN label label_en VARCHAR(15) NOT NULL ;

ALTER TABLE cor_main_details
  CHANGE COLUMN start_date start_date DATE NOT NULL ;

  UPDATE college SET labelEN='Engineering' WHERE id='1';
UPDATE college SET labelEN='Low' WHERE id='2';
