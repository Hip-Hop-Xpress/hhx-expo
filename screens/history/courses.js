import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';
import Timeline from 'react-native-timeline-flatlist'

import Header from '../../components/header';
import strings from '../../assets/strings/strings';

import globalStyles from '../../styles/global';

export default class Courses extends Component {
  constructor(){
    super()
    this.data = [ 
      {time: 'Fall 2016', title: 'Ghetto Genius Motorsports at the Don Moyer Boys & Girls Club', description: 'Ghetto Genius (GG), a culture and engineering start-up, used the Don Moyer Boys & Girls Club (DMBGC) in Champaign as its fiscal agent and physical facility. Dr. William Patterson developed Ghetto Genius Motorsports at the Club in 2016 to introduce students to science and technology concepts in a fun way with radio controlled (RC) cars. ', circleColor: '#13294B',lineColor:'#13294B'},
      {time: 'Fall 2016', title: 'DeCoding Dr. Dre at TEC', description: 'Dr. Patterson worked with students in his Fall 2016 class, De-Coding Dr. Dre, to build boomboxes out of readily available materials. The course was taught through the Technology Entrepreneurship Center in the College of Engineering.  In addition, students from that class as well as a graduate course at the iSchool worked with youth at the Club on remote control cars and engineering lessons that coincided with the Motorsports pilot.', circleColor: '#13294B',},
      {time: 'Spring 2017', title: 'Hip Hop Informatics at FabLab', description: 'Students in Spring 2017 Hip Hop Informatics course taught at the Champaign-Urbana Community FabLab explored mashing up boom boxes with the remote-control cars; pedagogy for the Funk Center in Dayton, Ohio; fashion and graffiti in Champaign; and music history on the south side of Chicago. ', circleColor: '#13294B',},
      {time: 'Spring 2017 \nSpring 2018', title: 'Ghetto Genius Universe at Boys & Girls Club', description: 'During this time frame we worked in several Club spaces on computer-assisted design, 3-D printing, robotics, go karting, remote-control car design, and audio entrepreneurship. Dr. Patterson, together with a team of volunteer engineers, implemented curricula (with equipment and staff constraints) at the Club on Wednesday evenings. Professional and retired engineers, computer scientists, and student-led civic organizations such as the National Society of Black Engineers and Eta Kappa Nu (HKN), the international honors society for electrical and computer engineers, frequently participated with us. The project was partially supported in 2018 by the UC2B Community Benefit Fund ($12,343). ',lineColor:'#13294B', circleColor: '#13294B',},
      {time: 'July 2018', title: 'Street College', description: 'Dr. Patterson organized Street College in Champaign. The sessions were available in Douglass Park in Champaign to youth at no cost to them and offered several levels of participation: several youth were hired as product development engineers to work with a supervising adult to teach skills and demonstrate products; other youth (consistently about five) came to the park during the twice weekly program to sample sound engineering, hip hop aesthetics, and motor sports. Third, Street College was a program of attraction, so drop-ins included day campers from the Douglass Center, UIUC faculty, and local adults. ', circleColor: '#13294B'},
      {time: 'Summer \n2018', title: 'Hip-Hop at Illinois Summer Youth Music (ISYM) Camp', description: 'Directed by Dr. Adam Kruse, the ISYM Hip-Hop Camp engaged middle and high school students in individual and collaborative creation and performance of original music in a variety of roles and styles. Campers worked in lab, studio, and workshop settings alongside experienced educators and musicians to produce beats, write and record lyrics, and prepared for a live performance at the end of the week. Supplemental activities explored additional elements and foundations of hip-hop culture. ', circleColor: '#13294B'},
      {time: 'Fall 2018', title: 'Decoding Dr Dre and Hip-Hop Entrepreneurship at the School of Music', description: 'Students explored the cultural landscape of urban America and how technology, engineering, and social entrepreneurship are contextualized and repurposed to support the development and enhancement of existing industries.  Students collaborated on project-based initiatives in areas including sustainable energy, economic development, affordable housing, and STEM education in public schools. ', circleColor: '#13294B'},
      {time: 'July 2019', title: 'Street College 2019', description: 'We wrote up a report of the week-long boom box build that we carried out in Douglass Park in July. We partnered with Boyz2Men Mentoring Program and really enjoyed working with the youth. Again, Joe Bolton and Dr. P were the lead instructors and we paid one youth to help mentor his peers. We had two excellent interns from the Siebel Center for Design, as well as great support from the Champaign Park District. ', circleColor: '#13294B'},
      {time: 'Fall 2019 \nSpring 2019', title: 'Hip Hop Entrepreneurship', description: 'Dr. P is working with the University of Illinois students this semester to prepare for the Hip Hop Xpress build. This semester, youth from Boyz2Men are also participating, sharing their ideas for the Double Dutch Boom Bus. ', circleColor: '#13294B'},
    ]
  } 

  render() {
    //'rgb(45,156,219)'
    return (
      <>
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={globalStyles.illiniBlue}>
          <ScrollView contentInsetAdjustmentBehavior="automatic">

            <View>
              {/* Top image */}
              <Image
                style={styles.topImage}
                source={require('../../assets/images/camp.jpg')}
              />
              {/* Text over top image */}
              <View style={styles.topView}>
                <Text style={[styles.topText, globalStyles.illiniBlue]}>{strings.courses.title}</Text>
              </View>
            </View>

            {/* Body */}
            <View style={[styles.body]}>
              {/* <View style={styles.container}> */}
                <Timeline 
                  style={styles.list}
                  data={this.data}
                  separator={true}
                  circleSize={20}
                  circleColor='13294B'
                  lineColor='13294B'
                  timeContainerStyle={{minWidth:95, marginTop: -5}}
                  timeStyle={{textAlign: 'center', backgroundColor:'rgba(232, 74, 39, 0.85)', color:'white', padding:5, borderRadius:13, overflow: 'hidden'}}
                  descriptionStyle={{color:'gray'}}
                  options={{
                    style:{paddingTop:5}
                  }}
                />
                {/* </View> */}
            </View>
  
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  topImage: {
    height: 250,
    flex: 1,
  },
  topText: {
    fontFamily: 'Montserrat-Black',
    color: 'white',
    padding: 15,
    fontSize: 32,
    textAlign: 'center',
  },
  topView: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    padding: 20,
		paddingTop: 65,
    backgroundColor:'white'
  },
  list: {
    flex: 1,
    marginTop:20,
  },
  title: {
    paddingTop: 20,
    paddingBottom: 15,
  },
  titleText: {
    fontFamily: 'Montserrat-Black',
    marginTop: 5,
    marginBottom: 10,
    fontSize: 32,
    textAlign: 'center',
  },
  introText: {
    fontFamily: 'Karla-BoldItalic',
    textAlign: 'center',
    marginHorizontal: 30,
    fontSize: 16,
    marginBottom: 5,
  },
  body: {
    backgroundColor: 'white',
    marginBottom: 40,
    paddingBottom: 40,
    padding: 20,
  },
});
