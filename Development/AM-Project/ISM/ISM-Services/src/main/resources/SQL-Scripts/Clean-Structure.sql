CREATE TABLE auth_user (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(45) NOT NULL,
  user_password VARCHAR(45) NOT NULL,
  is_active INT(1) NOT NULL DEFAULT 1,
  created_on DATETIME NOT NULL DEFAULT NOW(),
  PRIMARY KEY (id)
);

CREATE TABLE user_detail (
  user_id INT NOT NULL,
  first_name VARCHAR(45) NOT NULL,
  last_name VARCHAR(45) NOT NULL,
  email VARCHAR(45) NOT NULL,
  PRIMARY KEY (user_id),
  UNIQUE INDEX user_id_UNIQUE (user_id ASC),
  CONSTRAINT fk_user_detail_auth_user FOREIGN KEY (user_id) REFERENCES auth_user (id)
);

CREATE TABLE auth_view (
  id INT NOT NULL,
  label_ar VARCHAR(45) NOT NULL,
  description_ar VARCHAR(200) NULL,
  PRIMARY KEY (id),
  UNIQUE INDEX id_UNIQUE (id ASC)
);

CREATE TABLE auth_action (
  id INT NOT NULL,
  label_ar VARCHAR(45) NOT NULL,
  description_ar VARCHAR(200) NULL,
  PRIMARY KEY (id),
  UNIQUE INDEX id_UNIQUE (id ASC)
);

CREATE TABLE auth_role (
  id INT NOT NULL,
  label_ar VARCHAR(45) NOT NULL,
  description_ar VARCHAR(200) NULL,
  PRIMARY KEY (id),
  UNIQUE INDEX id_UNIQUE (id ASC)
);

CREATE TABLE auth_role_action (
  role_id INT NOT NULL,
  action_id INT NOT NULL,
  PRIMARY KEY (role_id, action_id),
  CONSTRAINT fk_auth_role_action_action FOREIGN KEY (action_id) REFERENCES auth_action (id),
  CONSTRAINT fk_auth_role_action_role FOREIGN KEY (role_id) REFERENCES auth_role (id)
);

CREATE TABLE auth_role_view (
  role_id INT NOT NULL,
  view_id INT NOT NULL,
  PRIMARY KEY (role_id, view_id),
  CONSTRAINT fk_auth_role_view_view FOREIGN KEY (view_id) REFERENCES auth_view (id),
  CONSTRAINT fk_auth_role_view_role FOREIGN KEY (role_id) REFERENCES auth_role (id)
);

CREATE TABLE auth_user_role (
  user_id INT NOT NULL,
  role_id INT NOT NULL,
  PRIMARY KEY (user_id, role_id),
  CONSTRAINT fk_auth_user_role_user FOREIGN KEY (user_id) REFERENCES auth_user (id),
  CONSTRAINT fk_auth_user_role_role FOREIGN KEY (role_id) REFERENCES auth_role (id)
);

CREATE TABLE auth_user_action (
  user_id INT NOT NULL,
  action_id INT NOT NULL,
  PRIMARY KEY (user_id, action_id),
  CONSTRAINT fk_auth_user_action_action FOREIGN KEY (action_id) REFERENCES auth_action (id),
  CONSTRAINT fk_auth_user_action_user FOREIGN KEY (user_id) REFERENCES auth_user (id)
);

CREATE TABLE auth_user_view (
  user_id INT NOT NULL,
  view_id INT NOT NULL,
  PRIMARY KEY (user_id, view_id),
  CONSTRAINT fk_auth_user_view_view FOREIGN KEY (view_id) REFERENCES auth_view (id),
  CONSTRAINT fk_auth_user_view_user FOREIGN KEY (user_id) REFERENCES auth_user (id)
);

