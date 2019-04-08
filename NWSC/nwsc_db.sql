-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: May 16, 2018 at 12:55 PM
-- Server version: 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `nwsc_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `nwsc_data`
--

CREATE TABLE IF NOT EXISTS `nwsc_data` (
  `parameter_id` int(11) NOT NULL AUTO_INCREMENT,
  `Time_in` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `Sender` varchar(20) NOT NULL,
  `PH` float NOT NULL,
  `turbidity` int(2) NOT NULL,
  PRIMARY KEY (`parameter_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=13 ;

--
-- Dumping data for table `nwsc_data`
--

INSERT INTO `nwsc_data` (`parameter_id`, `Time_in`, `Sender`, `PH`, `turbidity`) VALUES
(1, '2018-02-01 08:30:46', '256779319949', 8.94, 0),
(2, '2018-02-01 08:43:34', '+256779319949', 6.73, 0),
(3, '2018-02-01 08:46:56', '+256788532303', 0, 0),
(4, '2018-02-01 08:58:08', '+256784289723', 6.72, 0),
(5, '2018-02-01 08:59:00', '+256784289723', 6.73, 0),
(6, '2018-02-01 08:59:00', '+256784289723', 6.73, 0),
(7, '2018-02-01 08:59:00', '+256784289723', 6.73, 0),
(8, '2018-02-01 08:59:00', '+256784289723', 6.73, 0),
(9, '2018-02-01 08:59:00', '+256784289723', 6.72, 0),
(10, '2018-02-01 08:59:00', '+256784289723', 6.73, 0),
(11, '2018-02-01 09:00:00', '+256784289723', 6.73, 0),
(12, '2018-02-01 09:00:00', '+256784289723', 6.73, 0);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `user_id` int(11) unsigned NOT NULL,
  `user_firstname` varchar(11) NOT NULL,
  `user_lastname` varchar(11) NOT NULL,
  `user_email` varchar(255) NOT NULL,
  `user_password` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `user_firstname`, `user_lastname`, `user_email`, `user_password`) VALUES
(0, 'ssonko', 'patrick', 'patrick.ssonko@gmail.com', 'yyN8rtCh');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
