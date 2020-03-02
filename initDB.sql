CREATE SCHEMA `transdata2` DEFAULT CHARACTER SET utf8 ;

CREATE TABLE `transdata2`.`orders` (
  `orderId` INT NOT NULL AUTO_INCREMENT,
  `orderCode` VARCHAR(50) NULL,
  `agency` INT NULL,
  `description` LONGTEXT NULL,
  `topic` INT NULL,
  `pricePerPage` INT NULL,
  `pageCount` DOUBLE NULL,
  `symbolCount` INT NULL,
  `totalCost` INT NULL,
  `orderDate` DATE NULL,
  `paymentDate` DATE NULL,
  `finishTime` DATETIME(3) NULL,
  `manager` INT NULL,
  `incomingNumber` VARCHAR(45) NULL,
  `status` INT NULL,
  `comments` LONGTEXT NULL,
  `customerName` VARCHAR(255) NULL,
  `orderType` INT NULL,
  `createdBy` INT NULL,
  `lastModifiedBy` INT NULL,
  `createdDate` TIMESTAMP(3) NULL,
  `lastModifiedDate` TIMESTAMP(3) NULL,
  `payer` INT NULL,
  `langPair` INT NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `transdata2`.`statuses` (
  `statusId` INT NOT NULL AUTO_INCREMENT,
  `statusName` VARCHAR(255) NULL,
  `statusColor` VARCHAR(255) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE `transdata2`.`managers` (
  `managerId` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NULL,
  `surname` VARCHAR(255) NULL,
  `fatherName` VARCHAR(255) NULL,
  `agency` INT NULL,
  `email` VARCHAR(255) NULL,
  `mobilePhone` VARCHAR(255) NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `transdata2`.`languages` (
  `languageId` INT NOT NULL AUTO_INCREMENT,
  `language` VARCHAR(255) NULL,
  `shortName` VARCHAR(20) NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `transdata2`.`langpairs` (
  `langPairId` INT NOT NULL AUTO_INCREMENT,
  `sourceLang` VARCHAR(20) NULL,
  `targetLang` VARCHAR(20) NULL,
  `fullPairName` VARCHAR(255) NULL,
  `shortPairName` VARCHAR(255) NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `transdata2`.`topics` (
  `topicId` INT NOT NULL AUTO_INCREMENT,
  `topicName` VARCHAR(255) NULL,
  `description` VARCHAR(255) NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `transdata2`.`users` (
  `userId` INT NOT NULL AUTO_INCREMENT,
  `login` VARCHAR(255) NULL,
  `password` VARCHAR(255) NULL,
  `email` VARCHAR(50) NULL,
  `isActive` TINYINT(1) NULL,
  `userRole` INT NULL,
  `name` VARCHAR(255) NULL,
  `surname` VARCHAR(255) NULL,
  `fatherName` VARCHAR(255) NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `transdata2`.`agencies` (
  `agencyId` INT NOT NULL AUTO_INCREMENT,
  `agencyName` VARCHAR(255) NULL,
  `city` VARCHAR(255) NULL,
  `address` VARCHAR(255) NULL,
  `email` VARCHAR(50) NULL,
  `phone` VARCHAR(50) NULL,
  `mobile` VARCHAR(50) NULL,
  `defaultPricePerPage` INT NULL,
  `defaultPricePerDay` INT NULL,
  `defaultPageChars` INT NULL,
  `viber` VARCHAR(255) NULL,
  `skype` VARCHAR(255) NULL,
  `telegram` VARCHAR(255) NULL,
  `prefix` VARCHAR(20) NULL,
  `website` VARCHAR(255) NULL,
  `logoPath` VARCHAR(255) NULL,
  `comments` LONGTEXT NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `transdata2`.`filetypes` (
  `fileTypeId` INT NOT NULL AUTO_INCREMENT,
  `typeName` VARCHAR(255) NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `transdata2`.`files` (
  `fileId` INT NOT NULL AUTO_INCREMENT,
  `fileType` INT NULL,
  `fileName` VARCHAR(255) NULL,
  `filePath` VARCHAR(255) NULL,
  `fileExtension` VARCHAR(20) NULL,
  `fileSize` VARCHAR(45) NULL,
  `description` MEDIUMTEXT NULL,
  PRIMARY KEY (`id`));

ALTER TABLE `transdata2`.`files`
ADD COLUMN `languages` VARCHAR(255) NULL AFTER `description`,
ADD COLUMN `ownerId` INT NULL AFTER `languages`,
ADD COLUMN `orderId` INT NULL AFTER `owner`;

CREATE TABLE `transdata2`.`payers` (
  `payerId` INT NOT NULL AUTO_INCREMENT,
  `payerName` VARCHAR(255) NULL,
  `agency` INT NULL,
  PRIMARY KEY (`id`));