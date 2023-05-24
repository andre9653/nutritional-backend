-- CreateTable
CREATE TABLE `category` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `food` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `categoryId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `preparation` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nutritional_data` (
    `id` VARCHAR(191) NOT NULL,
    `foodId` VARCHAR(191) NOT NULL,
    `categoryId` VARCHAR(191) NOT NULL,
    `preparationId` VARCHAR(191) NOT NULL,
    `energy` DOUBLE NOT NULL DEFAULT 0,
    `protein` DOUBLE NOT NULL DEFAULT 0,
    `total_fat` DOUBLE NOT NULL DEFAULT 0,
    `carbohydrate` DOUBLE NOT NULL DEFAULT 0,
    `total_dietary_fiber` DOUBLE NOT NULL DEFAULT 0,
    `cholesterol` DOUBLE NOT NULL DEFAULT 0,
    `saturated_fatty_acids` DOUBLE NOT NULL DEFAULT 0,
    `monounsaturated_fatty_acids` DOUBLE NOT NULL DEFAULT 0,
    `polyunsaturated_fatty_acids` DOUBLE NOT NULL DEFAULT 0,
    `linoleic_acid` DOUBLE NOT NULL DEFAULT 0,
    `trans_fatty_acids` DOUBLE NOT NULL DEFAULT 0,
    `sugar` DOUBLE NOT NULL DEFAULT 0,
    `added_sugar` DOUBLE NOT NULL DEFAULT 0,
    `calcium` DOUBLE NOT NULL DEFAULT 0,
    `magnesium` DOUBLE NOT NULL DEFAULT 0,
    `manganese` DOUBLE NOT NULL DEFAULT 0,
    `phosphorus` DOUBLE NOT NULL DEFAULT 0,
    `iron` DOUBLE NOT NULL DEFAULT 0,
    `sodium` DOUBLE NOT NULL DEFAULT 0,
    `added_sodium` DOUBLE NOT NULL DEFAULT 0,
    `potassium` DOUBLE NOT NULL DEFAULT 0,
    `copper` DOUBLE NOT NULL DEFAULT 0,
    `zinc` DOUBLE NOT NULL DEFAULT 0,
    `selenium` DOUBLE NOT NULL DEFAULT 0,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nutritional_types` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `alias` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `food` ADD CONSTRAINT `food_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `nutritional_data` ADD CONSTRAINT `nutritional_data_foodId_fkey` FOREIGN KEY (`foodId`) REFERENCES `food`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `nutritional_data` ADD CONSTRAINT `nutritional_data_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `nutritional_data` ADD CONSTRAINT `nutritional_data_preparationId_fkey` FOREIGN KEY (`preparationId`) REFERENCES `preparation`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
