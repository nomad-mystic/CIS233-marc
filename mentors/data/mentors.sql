-- phpMyAdmin SQL Dump
-- version 4.2.11
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: May 02, 2015 at 04:22 AM
-- Server version: 5.6.21
-- PHP Version: 5.6.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `mentors`
--
CREATE DATABASE IF NOT EXISTS `mentors` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `mentors`;

-- --------------------------------------------------------

--
-- Table structure for table `departments`
--

DROP TABLE IF EXISTS `departments`;
CREATE TABLE IF NOT EXISTS `departments` (
  `dept` varchar(100) NOT NULL DEFAULT '',
  `mentorid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `departments`
--

INSERT INTO `departments` (`dept`, `mentorid`) VALUES
('Alternative Learning Center (ALC)', 0),
('American Sign Language (ASL)', 0),
('Applied Music (MUP)', 0),
('Apprenticeship (APR)', 0),
('Automotive Service Technology (AM)', 0),
('Biology and Management of Zoo Animals (BMZA)', 0),
('Business Administration (BA)', 11),
('Computed Tomography (CTT)', 0),
('Computer Aided Design and Drafting (CADD)', 0),
('Consumer and Family Studies (HEC)', 0),
('Crop Soil Science (CSS)', 0),
('Culinary Assistant (HR)', 0),
('Dealer Service Technology (DST)', 0),
('Dental Assisting (DA)', 0),
('Dental Hygiene (DH)', 0),
('Developmental Education (DE)', 0),
('Emergency Management (EM)', 0),
('Emergency Medical Services (EMS)', 0),
('Emergency TeleCommunicator/911 Dispatcher (ETC)', 0),
('Fashion Design (FD)', 0),
('Health and Physical Education (HPE)', 0),
('Honors (HON)', 0),
('Horticulture (HOR)', 0),
('Italian (ITAL)', 0),
('Lactation Education (LEC)', 0),
('Occupational Skills Training (OST)', 0),
('Professional Music (MUC)', 0),
('Mathematics (MTH)', 1),
('Computer Information Systems (CIS)', 2),
('Computer Science (CS)', 3),
('Biology (BI)', 4),
('Bioscience Technology (BIT)', 4),
('Chinese (CHN)', 4),
('Civil Engineering Technology (CMET)', 4),
('Electronic Engineering Technology (EET)', 4),
('Engineering (ENGR)', 4),
('English for Speakers of Other Languages (ESOL)', 4),
('Environmental Studies (ESR)', 4),
('Fitness Technology (FT)', 4),
('Foods and Nutrition (FN)', 4),
('French (FR)', 4),
('General Science (GS)', 4),
('Geology (G)', 4),
('German (GER)', 4),
('Health Studies (HE)', 4),
('Japanese (JPN)', 4),
('Magnetic Resonance Imaging (MRI)', 4),
('Mechanical Engineering Technology (CMET)', 4),
('Microelectronic Technology (MT)', 4),
('Music (MUS)', 4),
('Nursing (NRS)', 4),
('Physical Education (PE)', 4),
('Physics (PHY)', 4),
('Radiography (RAD)', 4),
('Russian (RUS)', 4),
('Sign Language Interpretation (ITP)', 4),
('Spanish (SPA)', 4),
('Veterinary Technology (VT)', 4),
('Alcohol and Drug Counseling (AD)', 5),
('Criminal Justice (CJA)', 5),
('Gerontology (GRN)', 5),
('Multimedia (MM)', 5),
('Paralegal (PL)', 5),
('Political Science (PS)', 5),
('Psychology (PSY)', 5),
('Sociology (SOC)', 5),
('Computer Applications (CAS)', 6),
('Office Systems (OS)', 6),
('Health Information Management (HIM)', 7),
('Medical Assisting (MA)', 7),
('Medical Laboratory Technology (MLT)', 7),
('Medical Professions (MP)', 7),
('Ophthalmic Medical Technology (OMT)', 7),
('College Success and Career Guidance (CG)', 8),
('Communication Studies (COMM)', 9),
('Management and Supervisory Development (MSD)', 9),
('Real Estate (RE)', 9),
('Women''s Studies (WS)', 9),
('Adult Basic Education (ABE)', 10),
('English (ENG)', 10),
('Reading (RD)', 10),
('Writing (WR)', 10),
('Chemistry (CH)', 11),
('Dental Laboratory Technology (DT)', 11),
('Economics (EC)', 11),
('Anthropology (ATH)', 12),
('Architectural Design and Drafting (ARCH)', 12),
('Art (ART)', 12),
('Auto Collision Repair Technology (AB)', 12),
('Aviation Maintenance Technology (AMT)', 12),
('Aviation Science (AVS)', 12),
('Building Construction Technology (BCT)', 12),
('Building Inspection Technology (INSP)', 12),
('Chicano/Latino Studies (CHLA)', 12),
('Dance (D)', 12),
('Diesel Service Technology (DS)', 12),
('Electrical Trades (ELT)', 12),
('Facilities Maintenance Technology (FMT)', 12),
('Fire Protection Technology (FP)', 12),
('Geography (GEO)', 12),
('Graphic Design (GD)', 12),
('History (HST)', 12),
('Humanities (HUM)', 12),
('Interior Design (ID)', 12),
('Journalism (J)', 12),
('Landscape Technology (LAT)', 12),
('Machine Manufacturing Technology (MCH)', 12),
('Philosophy (PHL)', 12),
('Refrigeraton/HVAC (FMT)', 12),
('Religion (R)', 12),
('Theatre Arts (TA)', 12),
('Welding Technology (WLD)', 12),
('Early Education and Family Studies (ECE)', 13),
('Education (ED)', 13),
('Library (LIB)', 13);

-- --------------------------------------------------------

--
-- Table structure for table `mentors`
--

DROP TABLE IF EXISTS `mentors`;
CREATE TABLE IF NOT EXISTS `mentors` (
`id` int(11) NOT NULL,
  `imageUrl` varchar(200) DEFAULT NULL,
  `directory` varchar(50) DEFAULT NULL,
  `firstName` varchar(50) DEFAULT NULL,
  `lastName` varchar(50) DEFAULT NULL,
  `dept` varchar(10) DEFAULT NULL,
  `campus` varchar(10) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `mentors`
--

INSERT INTO `mentors` (`id`, `imageUrl`, `directory`, `firstName`, `lastName`, `dept`, `campus`) VALUES
(1, 'http://www.pcc.edu/about/distance/wp-content/uploads/2014/06/aecary-small-150x150.jpg', 'ann+cary', 'Ann', 'Cary', 'Math', 'SY'),
(2, 'http://www.pcc.edu/about/distance/wp-content/uploads/2013/10/marc-goodman-150x150.png', 'marc+goodman', 'Marc', 'Goodman', 'CIS', 'SY'),
(3, 'http://www.pcc.edu/about/distance/wp-content/uploads/2014/06/cdjones-150x150.jpg', 'doug+jones', 'Doug', 'Jones', 'CS', 'SY'),
(4, 'http://www.pcc.edu/about/distance/wp-content/uploads/2013/04/greg5-150x150.jpg', 'greg+kaminski', 'Greg', 'Kaminski', 'Distance E', 'SY'),
(5, 'http://www.pcc.edu/about/distance/wp-content/uploads/2013/04/IMG_1545-150x150.jpg', 'tani+mcbeth', 'Tani', 'McBeth', 'Psychology', 'SY'),
(6, 'http://www.pcc.edu/about/distance/wp-content/uploads/2013/03/jonimeisner.jpg', 'joni+meisner', 'Joni', 'Meisner', 'CAS', 'SY'),
(7, 'http://www.pcc.edu/about/distance/wp-content/uploads/2013/03/Judy-Osswald.jpg', 'judy+osswald', 'Judy', 'Osswald', 'HIM', 'CA'),
(8, 'http://www.pcc.edu/about/distance/wp-content/uploads/2013/04/Jason-Pinkal-150x150.jpg', 'jason+pinkal', 'Jason', 'Pinkal', 'Distance E', 'CG'),
(9, 'http://www.pcc.edu/about/distance/wp-content/uploads/2013/04/rebecca-150x150.jpg', 'rebecca+robinson', 'Rebecca', 'Robinson', 'MSD', 'SE'),
(10, 'http://www.pcc.edu/about/distance/wp-content/uploads/2013/03/LES_PCC-291x300.jpg', 'laura+sanders', 'Laura', 'Sanders', 'English', 'SE/SY'),
(11, 'http://www.pcc.edu/about/distance/wp-content/uploads/2013/10/Rondi_Schei-e1382058829837.jpg', 'rondi+schei', 'Rondi', 'Schei', 'Economics', 'SY'),
(12, 'http://www.pcc.edu/about/distance/wp-content/uploads/2013/03/peter-150x150.jpg', 'peter+seaman', 'Peter', 'Seaman', 'Distance E', 'SY'),
(13, 'http://www.pcc.edu/about/distance/wp-content/uploads/2015/03/LoriW-150x150.jpg', 'lori+wamsley', 'Lori', 'Wamsley', 'Education', 'CA');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `departments`
--
ALTER TABLE `departments`
 ADD PRIMARY KEY (`dept`), ADD KEY `mentorid` (`mentorid`);

--
-- Indexes for table `mentors`
--
ALTER TABLE `mentors`
 ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `mentors`
--
ALTER TABLE `mentors`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=14;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
