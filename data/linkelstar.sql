INSERT INTO `Site` (`id`, `userId`, `name`, `url`, `description`, `api_key`, `api_secret`, `createdAt`, `updatedAt`, `title`) VALUES
('clgi6yk8i00039kq6x94z1x8b', 1, 'Admin Name', 'https://facebook.com', 'Description for site', 'amir.meshkin@gmail.com', 'sdfsadfasdf!s', '2023-04-15 16:27:24.787', '2023-04-15 18:39:58.668', 'My Facebook'),
('clgibuwoh00029k5r8eau8wc7', 1, 'name', 'https://twitter.com', 'asfasf', 'sdfsa', 'asfdgasfd', '2023-04-15 18:44:09.003', '2023-04-15 18:44:09.003', 'Twitter');

--
-- Dumping data for table `User`
--

INSERT INTO `User` (`id`, `createdAt`, `updatedAt`, `username`, `name`, `email`, `emailVerified`, `image`, `balance`, `hashedPassword`, `role`, `level`) VALUES
(1, '2023-04-15 16:24:35.275', '2023-04-15 17:43:03.079', 'ameshkin', 'Amir', 'amir.meshkin@gmail.com', NULL, NULL, NULL, 'JGFyZ29uMmlkJHY9MTkkbT02NTUzNix0PTIscD0xJDFJdVozWEZmcGFPQjFua1RaeFdFSGckYUgzZHpmUGtPZDIvVGtIbjVjQU85bDZFenllSEIxcFB1aCtuUzlKRXE3RQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=', 'USER', NULL);

-- --------------------------------------------------------


--
-- Indexes for table `Account`
--
ALTER TABLE `Account`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Account_provider_providerAccountId_key` (`provider`,`providerAccountId`),
  ADD KEY `Account_userId_fkey` (`userId`);

--
-- Indexes for table `Activity`
--
ALTER TABLE `Activity`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Activity_userId_key` (`userId`);

--
-- Indexes for table `BankAccount`
--
ALTER TABLE `BankAccount`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `BankAccount_customerId_key` (`customerId`);

--
-- Indexes for table `Customer`
--
ALTER TABLE `Customer`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Customer_companyId_key` (`companyId`),
  ADD UNIQUE KEY `Customer_email_key` (`email`),
  ADD KEY `Customer_userId_fkey` (`userId`);

--
-- Indexes for table `File`
--
ALTER TABLE `File`
  ADD PRIMARY KEY (`id`),
  ADD KEY `File_userId_fkey` (`userId`),
  ADD KEY `File_customerId_fkey` (`customerId`),
  ADD KEY `File_invoiceId_fkey` (`invoiceId`);

--
-- Indexes for table `Invoice`
--
ALTER TABLE `Invoice`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Invoice_customerId_key` (`customerId`),
  ADD UNIQUE KEY `Invoice_termsOfPaymentId_key` (`termsOfPaymentId`);

--
-- Indexes for table `InvoiceItems`
--
ALTER TABLE `InvoiceItems`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Links`
--
ALTER TABLE `Links`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Links_userId_fkey` (`userId`);

--
-- Indexes for table `Message`
--
ALTER TABLE `Message`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Message_userId_key` (`userId`);

--
-- Indexes for table `Notification`
--
ALTER TABLE `Notification`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Notification_userId_fkey` (`userId`);

--
-- Indexes for table `Profile`
--
ALTER TABLE `Profile`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Profile_userId_fkey` (`userId`);

--
-- Indexes for table `Session`
--
ALTER TABLE `Session`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Session_handle_key` (`handle`),
  ADD KEY `Session_userId_fkey` (`userId`);

--
-- Indexes for table `Site`
--
ALTER TABLE `Site`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Site_userId_fkey` (`userId`);

--
-- Indexes for table `TermsOfPayment`
--
ALTER TABLE `TermsOfPayment`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `User`
--
ALTER TABLE `User`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `User_email_key` (`email`);

--
-- Indexes for table `_ProfileToSite`
--
ALTER TABLE `_ProfileToSite`
  ADD UNIQUE KEY `_ProfileToSite_AB_unique` (`A`,`B`),
  ADD KEY `_ProfileToSite_B_index` (`B`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Account`
--
ALTER TABLE `Account`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Links`
--
ALTER TABLE `Links`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Notification`
--
ALTER TABLE `Notification`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Session`
--
ALTER TABLE `Session`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `User`
--
ALTER TABLE `User`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Account`
--
ALTER TABLE `Account`
  ADD CONSTRAINT `Account_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `Activity`
--
ALTER TABLE `Activity`
  ADD CONSTRAINT `Activity_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `BankAccount`
--
ALTER TABLE `BankAccount`
  ADD CONSTRAINT `BankAccount_customerId_fkey` FOREIGN KEY (`customerId`) REFERENCES `Customer` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `Customer`
--
ALTER TABLE `Customer`
  ADD CONSTRAINT `Customer_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `File`
--
ALTER TABLE `File`
  ADD CONSTRAINT `File_customerId_fkey` FOREIGN KEY (`customerId`) REFERENCES `Customer` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `File_invoiceId_fkey` FOREIGN KEY (`invoiceId`) REFERENCES `Invoice` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `File_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `Invoice`
--
ALTER TABLE `Invoice`
  ADD CONSTRAINT `Invoice_customerId_fkey` FOREIGN KEY (`customerId`) REFERENCES `Customer` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Invoice_termsOfPaymentId_fkey` FOREIGN KEY (`termsOfPaymentId`) REFERENCES `TermsOfPayment` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `Links`
--
ALTER TABLE `Links`
  ADD CONSTRAINT `Links_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `Message`
--
ALTER TABLE `Message`
  ADD CONSTRAINT `Message_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `Notification`
--
ALTER TABLE `Notification`
  ADD CONSTRAINT `Notification_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `Profile`
--
ALTER TABLE `Profile`
  ADD CONSTRAINT `Profile_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `Session`
--
ALTER TABLE `Session`
  ADD CONSTRAINT `Session_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `Site`
--
ALTER TABLE `Site`
  ADD CONSTRAINT `Site_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `_ProfileToSite`
--
ALTER TABLE `_ProfileToSite`
  ADD CONSTRAINT `_ProfileToSite_A_fkey` FOREIGN KEY (`A`) REFERENCES `Profile` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `_ProfileToSite_B_fkey` FOREIGN KEY (`B`) REFERENCES `Site` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;


INSERT INTO `Profile` (`id`, `userId`, `title`, `username`, `description`, `theme`, `widgets`, `current`, `createdAt`, `updatedAt`) VALUES ('', '1', 'Facebook ', 'ameshkin', 'adsfasdf', '{   \"layout\": \"modern\",   \"titleStyle\": \"h6\",   \"descriptionStyle\": \"body1\",   \"linkType\": \"button\",   \"linkStyle\": \"link-modern\",   \"linkSpacing\": 20,   \"linkAlign\": \"center\",   \"bgColor\": \"#000000\",   \"bgCardColor\": \"#ff0000\",   \"linkWidth\": \"200\",   \"fontFamily\": \"\\\"Comic Sans MS\\\", \\\"Comic Sans\\\", cursive\" }', '{   \"layout\": \"modern\",   \"titleStyle\": \"h6\",   \"descriptionStyle\": \"body1\",   \"linkType\": \"button\",   \"linkStyle\": \"link-modern\",   \"linkSpacing\": 20,   \"linkAlign\": \"center\",   \"bgColor\": \"#000000\",   \"bgCardColor\": \"#ff0000\",   \"linkWidth\": \"200\",   \"fontFamily\": \"\\\"Comic Sans MS\\\", \\\"Comic Sans\\\", cursive\" }', 'no', 'CURRENT_TIMESTAMP(3).000000', '');


INSERT INTO `User` (`id`, `createdAt`, `updatedAt`, `username`, `name`, `email`, `emailVerified`, `image`, `balance`, `hashedPassword`, `role`, `level`) VALUES
  (1, '2023-04-15 16:24:35.275', '2023-04-15 17:43:03.079', 'ameshkin', 'Amir', 'amir.meshkin@gmail.com', NULL, NULL, NULL, 'JGFyZ29uMmlkJHY9MTkkbT02NTUzNix0PTIscD0xJDFJdVozWEZmcGFPQjFua1RaeFdFSGckYUgzZHpmUGtPZDIvVGtIbjVjQU85bDZFenllSEIxcFB1aCtuUzlKRXE3RQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=', 'USER', NULL);
