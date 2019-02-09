INSERT INTO dorrar.cor_ref_type (id, label_en) VALUES (1, 'Course');
INSERT INTO dorrar.cor_ref_type (id, label_en) VALUES (2, 'Book');

INSERT INTO dorrar.course (id) VALUES (1);
INSERT INTO dorrar.course (id) VALUES (2);

INSERT INTO dorrar.cor_type (id, label_en) VALUES ('1', 'Acadmic');
INSERT INTO dorrar.cor_type (id, label_en) VALUES ('2', 'Practicale');

INSERT INTO dorrar.cor_level (id, label) VALUES ('1', 'Intern');
INSERT INTO dorrar.cor_level (id, label) VALUES ('2', 'Entery');
INSERT INTO dorrar.cor_level (id, label) VALUES ('3', 'Beginer');

-- Fathy - Start Authorization Task

INSERT INTO auth_page (id, label_en) VALUES (1,'course details');
INSERT INTO auth_action (id, label_en, page_id)  VALUES (1,'view course details',1);
INSERT INTO auth_action (id, label_en, page_id)  VALUES (2,'view assignments',1);
INSERT INTO auth_action (id, label_en, page_id) VALUES (3,'view grades',1);

INSERT INTO auth_page (id, label_en) VALUES (2,'courses');
INSERT INTO auth_action (id, label_en, page_id) VALUES (4,'create course',2);
INSERT INTO auth_action (id, label_en, page_id) VALUES (5,'create assignments',2);
INSERT INTO auth_action (id, label_en, page_id) VALUES (6,'submit grades',2);

INSERT INTO auth_role (id, label_en) VALUES (1,'student');

INSERT INTO auth_role_action (role_id, action_id) VALUES (1,1);
INSERT INTO auth_role_action (role_id, action_id) VALUES (1,2);
INSERT INTO auth_role_action (role_id, action_id) VALUES (1,3);

INSERT INTO auth_role_page (role_id, page_id) VALUES (1,1);
INSERT INTO auth_role_page (role_id, page_id) VALUES (1,2);

INSERT INTO auth_role (id, label_en) VALUES (2,'instructor');
INSERT INTO auth_role_action (role_id, action_id) VALUES (2,4);
INSERT INTO auth_role_action (role_id, action_id) VALUES (2,5);
INSERT INTO auth_role_action (role_id, action_id) VALUES (2,6);

INSERT INTO `dorrar`.`auth_user` (`id`, `user_name`, `password`) VALUES ('1', 'ahmed', '123');
INSERT INTO `dorrar`.`auth_user_action` (`user_id`, `action_id`) VALUES ('1', '1');
INSERT INTO `dorrar`.`auth_user_action` (`user_id`, `action_id`) VALUES ('1', '2');
INSERT INTO `dorrar`.`auth_user_action` (`user_id`, `action_id`) VALUES ('1', '3');

INSERT INTO `dorrar`.`auth_user_page` (`user_id`, `page_id`) VALUES ('1', '1');
INSERT INTO `dorrar`.`auth_user_role` (`user_id`, `role_id`) VALUES ('1', '1');

-- Fathy - Start Authorization Task

