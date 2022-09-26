import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Card from './components/Card/Card';
import './App.css';

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
      </div>
      <div className="Profiles">
        <div className="Row1">
          <Card name='LeetCode' job='@schnell_coder50'
            about='LeetCode is the best platform to help you enhance your skills, expand your knowledge and prepare for technical interviews.'
            loca="images/leetcode.png" visit="https://leetcode.com/schnell_coder50/" />
          <Card name='GeeksForGeeks' job='@schnellcoder50'
            about='StudenA Computer Science portal for geeks. It contains well written, well thought and well explained computer science and programming articles, quizzes and practice/competitive programming/company interview Questions.'
            loca="images/geeksforgeeks.png" visit="https://auth.geeksforgeeks.org/user/schnellcoder50" />
        </div>
        <div className="Row2">
          <Card name='CodeStudio' job='@UtkarshTambe'
            about='CodeStudio - The best platform to prepare for coding interviews.'
            loca="images/codestudio.png" visit="https://www.codingninjas.com/codestudio/profile/b667d9f9-a9ee-4615-9fbd-c25187826b01" />
          <Card name='InterviewBit' job='@schnell_coder50'
            about='InterviewBit prepares you not only for the interviews, but for the actual job too. You will learn to write error free, compilable code in your first attempt.'
            loca="images/interviewbit.png" visit="https://www.interviewbit.com/profile/schnell_coder50" />
        </div>
        <div className="Row3">
          <Card name='CodeChef' job='@schnellcoder50'
            about='A Platform for Aspiring Programmers. Competitive Programming | Participate & Learn.'
            loca="images/codechef.png" visit="/" />
          <Card name='CodeForces' job='@schnell_coder50'
            about='We promote competitive programming culture in our college, and provide a forum for interested minds to discuss their thoughts and ideas.'
            loca="images/codeforces.png" visit="/" />
        </div>
        <div className="Row4">
          <Card name='HackerRank' job='@schnell_coder50 @ty7171'
            about='HackerRank is the market-leading technical assessment and remote interview solution for hiring developers. Learn how to hire technical talent from anywhere!'
            loca="images/hackerrank.png" visit="https://www.hackerrank.com/ty7171" />
          <Card name='HackerEarth' job='@schnell_coder50'
            about='Helping 3M+ developers be better through coding contests, data science competitions, and hackathons. Trusted by recruiters from 1000+ companies hiring the best developers.'
            loca="images/hackerearth.png" visit="/" />
        </div>
      </div>
    </>
  );
}

export default App;