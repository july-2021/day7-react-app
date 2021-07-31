-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: db
-- Generation Time: Jul 31, 2021 at 07:54 AM
-- Server version: 10.3.29-MariaDB-1:10.3.29+maria~focal
-- PHP Version: 7.4.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `edac`
--

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(60) NOT NULL,
  `password` varchar(60) NOT NULL,
  `email` varchar(60) NOT NULL,
  `mobile` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `username`, `password`, `email`, `mobile`) VALUES
(1, 'rahul', '@#@#@#', 'rahul@gmail.com', '3232322'),
(2, 'sachin', '@#@#@#', 'saching@gmail.com', '32323232'),
(3, 'sachin', '@#@#@#', 'saching@gmail.com', '32323232'),
(4, 'rohit', '##$#$$', 'rohit@gmail.com', '23232323'),
(5, 'saurav', '@#@#@#', 'saurav@gmail.com', '23232232'),
(6, 'saurav', '@#@#@#', 'saurav@gmail.com', '23232232'),
(7, 'saurav', '@#@#@#', 'saurav@gmail.com', '23232232'),
(8, 'saurav', '@#@#@#', 'saurav@gmail.com', '23232232'),
(9, 'saurav', '@#@#@#', 'saurav@gmail.com', '23232232'),
(10, 'akash', '@@#@#@#', 'aksh@gmail.com', '2323232'),
(11, 'akash', '@@#@#@#', 'aksh@gmail.com', '2323232'),
(12, 'aditya', '#@#@##', 'aditya@gmail.com', '2323232'),
(13, 'aditya', '#@#@##', 'aditya@gmail.com', '2323232'),
(14, 'aditya', '#@#@##', 'aditya@gmail.com', '2323232'),
(15, 'ajay', '@#@@#@', 'ajay@gmail.com', '23232323'),
(16, 'vijay', '@#@@#@', 'vijay@gmail.com', '23232323'),
(17, 'murali', '@#@@#@', 'vijay@gmail.com', '23232323'),
(18, 'adsfasdf', 'adsfaf', 'asdfa', '12121212'),
(19, 'all is wlll', 'afadsfasfdsaf', 'asdfasfdas', '21212'),
(20, 'asdfadfa', 'asdfa', 'asdf', '1212'),
(21, 'bla bla', 'bala', 'asdfas', '122112'),
(22, 'vinita', 'mam', 'vinita@gmail.com', '3121212'),
(23, 'vipul', 'sir', 'vipul@gmail.com', '12122');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
