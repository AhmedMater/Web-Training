
INSERT INTO auth_view (id, label_ar, description_ar) VALUE (1, 'View-Course', 'Viewing Course Details Page');
INSERT INTO auth_view (id, label_ar, description_ar) VALUE (2, 'Create-Course', 'Viewing Create Course Page');
INSERT INTO auth_view (id, label_ar, description_ar) VALUE (3, 'Create-Translation', 'Viewing Create Course Translation Page');

INSERT INTO auth_action (id, label_ar, description_ar) VALUE (1, 'Enroll-Course', '');
INSERT INTO auth_action (id, label_ar, description_ar) VALUE (2, 'Submit-Course', '');
INSERT INTO auth_action (id, label_ar, description_ar) VALUE (3, 'Submit-Translation', '');
INSERT INTO auth_action (id, label_ar, description_ar) VALUE (4, 'Edit-Translation', '');

INSERT INTO auth_role (id, label_ar, description_ar) VALUE (1, 'Instructor', 'Teaching Courses');
INSERT INTO auth_role_view (role_id, view_id) VALUE (1,1);
INSERT INTO auth_role_view (role_id, view_id) VALUE (1,2);
INSERT INTO auth_role_action (role_id, action_id) VALUE (1,2);

INSERT INTO auth_role (id, label_ar, description_ar) VALUE (2, 'Student', 'Learning Courses');
INSERT INTO auth_role_view (role_id, view_id) VALUE (2,1);
INSERT INTO auth_role_action (role_id, action_id) VALUE (2,1);

INSERT INTO auth_role (id, label_ar, description_ar) VALUE (3, 'Translator', 'Translating Courses');
INSERT INTO auth_role_view (role_id, view_id) VALUE (3,1);
INSERT INTO auth_role_view (role_id, view_id) VALUE (3,3);
INSERT INTO auth_role_action (role_id, action_id) VALUE (3,3);
INSERT INTO auth_role_action (role_id, action_id) VALUE (3,4);

INSERT INTO auth_user (id, username, user_password, is_active, created_on) VALUE (1, 'Ahmed_Mater', 'e10adc3949ba59abbe56e057f20f883e', 1, NOW());
INSERT INTO user_detail (user_id, first_name, last_name, email) VALUE (1, 'Ahmed', 'Mater', 'ahmed.mater@ism.com');
INSERT INTO auth_user_role (user_id, role_id) VALUE (1,1);
INSERT INTO auth_user_role (user_id, role_id) VALUE (1,3);
INSERT INTO auth_user_view (user_id, view_id) VALUE (1,1);
INSERT INTO auth_user_view (user_id, view_id) VALUE (1,2);
INSERT INTO auth_user_view (user_id, view_id) VALUE (1,3);
INSERT INTO auth_user_action (user_id, action_id) VALUE (1,2);
INSERT INTO auth_user_action (user_id, action_id) VALUE (1,3);
INSERT INTO auth_user_action (user_id, action_id) VALUE (1,4);

INSERT INTO auth_user (id, username, user_password, is_active, created_on) VALUE (2, 'Ali_Maher', 'e10adc3949ba59abbe56e057f20f883e', 1, NOW());
INSERT INTO user_detail (user_id, first_name, last_name, email) VALUE (2, 'Ali', 'Maher', 'ali.maher@ism.com');
INSERT INTO auth_user_role (user_id, role_id) VALUE (2,2);
INSERT INTO auth_user_view (user_id, view_id) VALUE (2,1);
INSERT INTO auth_user_view (user_id, view_id) VALUE (2,3);
INSERT INTO auth_user_action (user_id, action_id) VALUE (2,1);
INSERT INTO auth_user_action (user_id, action_id) VALUE (2,3);

INSERT INTO auth_user (id, username, user_password, is_active, created_on) VALUE (3, 'Mona_Ramy', 'e10adc3949ba59abbe56e057f20f883e', 1, NOW());
INSERT INTO user_detail (user_id, first_name, last_name, email) VALUE (3, 'Mona', 'Ramy', 'mona.rami@ism.com');
INSERT INTO auth_user_role (user_id, role_id) VALUE (3,3);
INSERT INTO auth_user_view (user_id, view_id) VALUE (3,1);
INSERT INTO auth_user_view (user_id, view_id) VALUE (3,3);
INSERT INTO auth_user_action (user_id, action_id) VALUE (3,3);

SELECT * FROM auth_user_view WHERE user_id = 1 AND view_id IN (3, 2);
SELECT * FROM auth_user_action WHERE user_id = 1 AND action_id = 4;