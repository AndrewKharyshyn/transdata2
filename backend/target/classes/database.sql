CREATE SCHEMA `transdatadb` DEFAULT CHARACTER SET utf8 ;

CREATE TABLE `transdatadb`.`language_pair` (
  `pair_id` INT NOT NULL AUTO_INCREMENT,
  `language_pair` VARCHAR(255) NOT NULL,
  `short_name` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`pair_id`))

  CREATE TABLE `transdatadb`.`topics` (
  `topic_id` INT NOT NULL AUTO_INCREMENT,
  `topic_name` VARCHAR(150) NOT NULL,
  PRIMARY KEY (`topic_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE `transdatadb`.`managers` (
  `manager_id` INT NOT NULL AUTO_INCREMENT,
  `manager_name` VARCHAR(255) NOT NULL,
  `manager_phone` VARCHAR(45) NULL,
  `manager_email` VARCHAR(45) NULL,
  `comment` VARCHAR(500) NULL,
  `agency_id` INT NOT NULL,
  PRIMARY KEY (`manager_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE `transdatadb`.`orders` (
  `order_id` INT NOT NULL AUTO_INCREMENT,
  `order_code` VARCHAR(20) NOT NULL,
  `document_name` MEDIUMTEXT NOT NULL,
  `agency_id` INT NOT NULL,
  `symbol_count` INT NULL,
  `page_count` DOUBLE NULL,
  `price_per_page` INT NOT NULL,
  `total_price` INT NULL,
  `lang_pair_id` INT NOT NULL,
  `order_date` DATE NOT NULL,
  `readiness_time` DATETIME(0) NOT NULL,
  `incoming_number` VARCHAR(150) NULL,
  `topic_id` INT NULL,
  `manager_id` INT NULL,
  `customer` VARCHAR(150) NULL,
  `partial_payment` VARCHAR(45) NULL,
  `payment_done` TINYINT(1) NULL,
  `payment_date` DATE NULL,
  `payer_id` INT NULL,
  `order_comments` MEDIUMTEXT NULL,
  PRIMARY KEY (`order_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE `transdatadb`.`payers` (
  `payer_id` INT NOT NULL AUTO_INCREMENT,
  `agency_id` INT NOT NULL,
  `payer_name` VARCHAR(250) NOT NULL,
  PRIMARY KEY (`payer_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;