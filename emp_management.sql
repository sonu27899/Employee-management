-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 07, 2021 at 09:36 AM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 7.4.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `emp_management`
--

-- --------------------------------------------------------

--
-- Table structure for table `department`
--

CREATE TABLE `department` (
  `Id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `isdeleted` enum('0','1') DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `department`
--

INSERT INTO `department` (`Id`, `name`, `isdeleted`, `createdAt`, `updatedAt`) VALUES
(1, 'Business Development', '0', '2021-06-05 21:48:25', '2021-06-05 21:48:25'),
(2, 'Sales & Marketing', '0', '2021-06-05 21:48:39', '2021-06-05 21:48:39'),
(3, 'Development', '0', '2021-06-05 21:49:06', '2021-06-05 21:49:06'),
(4, 'Test Team', '0', '2021-06-05 21:49:06', '2021-06-05 21:49:06'),
(5, 'Customer Support', '0', '2021-06-05 21:50:11', '2021-06-05 21:50:11'),
(6, 'Human Resource', '0', '2021-06-05 21:50:11', '2021-06-05 21:50:11');

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

CREATE TABLE `employee` (
  `Id` int(11) NOT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `designation` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `address` text DEFAULT NULL,
  `department` int(11) DEFAULT NULL,
  `isdeleted` enum('0','1') DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `employee`
--

INSERT INTO `employee` (`Id`, `first_name`, `last_name`, `designation`, `email`, `dob`, `address`, `department`, `isdeleted`, `createdAt`, `updatedAt`) VALUES
(1, 'test', 'user', 'Software Engineer', 'test1@io.com', '2012-01-18', 'Paldi,Ahmedabad', 1, '0', '2021-06-07 12:00:33', '2021-06-07 06:40:54'),
(2, 'test', 'user', 'Trainee', 'test2@io.com', '1999-08-27', 'Gota,Ahmedabad', 4, '0', '2021-06-07 07:00:58', '2021-06-07 07:00:58'),
(3, 'test', 'user', 'Full Stack Developer', 'test3@io.com', '2020-08-19', 'Ahmedabad', 3, '0', '2021-06-07 07:01:54', '2021-06-07 07:01:54'),
(4, 'test', 'user', 'HR', 'test4@io.com', '2021-01-27', 'Surat', 6, '0', '2021-06-07 07:03:27', '2021-06-07 07:03:27');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `department`
--
ALTER TABLE `department`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `department`
--
ALTER TABLE `department`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `employee`
--
ALTER TABLE `employee`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
