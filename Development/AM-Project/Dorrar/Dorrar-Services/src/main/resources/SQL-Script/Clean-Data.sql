
INSERT INTO `dorrar`.`cor_ref_type` (`id`, `label_en`) VALUES (1, 'Course');
INSERT INTO `dorrar`.`cor_ref_type` (`id`, `label_en`) VALUES (2, 'Book');

INSERT INTO `dorrar`.`course` (id) VALUES (1);
INSERT INTO `dorrar`.`course` (id) VALUES (2);


#yousef data base (Type values) insert
INSERT INTO `dorrar`.`cor_type` (`id`, `label_en`) VALUES ('1', 'Acadmic');
INSERT INTO `dorrar`.`cor_type` (`id`, `label_en`) VALUES ('2', 'Practicale');

#yousef data base (level values) insert
INSERT INTO `dorrar`.`cor_level` (`id`, `label`) VALUES ('1', 'Intern');
INSERT INTO `dorrar`.`cor_level` (`id`, `label`) VALUES ('2', 'Entery');
INSERT INTO `dorrar`.`cor_level` (`id`, `label`) VALUES ('3', 'Beginer');







-- Fathy - Start Authorization Task
INSERT INTO `auth_action` VALUES (1,'view course details',1),(2,'view assignments',1),(3,'view grades',1),(4,'create course',2),(5,'create assignments',2),(6,'submit grades',2);
INSERT INTO `auth_page` VALUES (1,'course details'),(2,'courses');
INSERT INTO `auth_role` VALUES (1,'student'),(2,'instructor');
INSERT INTO `role_action` VALUES (1,1),(1,2),(1,3),(2,4),(2,5),(2,6);
INSERT INTO `role_page` VALUES (1,1),(2,2),(1,2),(2,2);
INSERT INTO `role_page` VALUES (1,1),(2,2),(1,2),(2,2);
-- Fathy - End Authorization Task