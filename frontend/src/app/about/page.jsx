"use client"
import React, { useState } from 'react';
import Image from 'next/image.js';
import { Box, Typography, styled, Grid, CssBaseline, Collapse, Button, IconButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CustomBreadcrumbs from '../Components/breadcrumbs.jsx';

const About = () => {
  const [openSections, setOpenSections] = useState({
    support: false,
    review: false,
    team: false,
    services: false,
    clientSupport: false,
  });

  const handleToggle = (section) => {
    setOpenSections((prevState) => {
      const newState = { ...prevState };
      Object.keys(newState).forEach((key) => {
        if (key !== section) {
          newState[key] = false;
        }
      });
      newState[section] = !prevState[section];
      return newState;
    });
  };
  

  return (
    <MainBox>
      <CssBaseline />
      <CustomBreadcrumbs pageTitle="About Us" currentPage="About Us" />
      <Grid container className='parentBox' spacing={4}>
        <Grid className='aboutCompanyLeft' item xs={12} md={6}>
          <Box className='aboutCompanyExp'>
            <span className='aboutCompanyExp-span'>12+ years of experiences</span>
          </Box>

          <Box className='aboutCompanyImg'></Box>
        </Grid>

        <Grid className='aboutCompanyInfo' item xs={12} md={6}>
          <Typography className='headingBlock' variant="h6">ABOUT OUR COMPANY</Typography>
          <Typography className='heading' variant="h1">Best Solution For Cleaning Services</Typography>

          <Box className='listItem'>
            <Typography className='aboutCleaning'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet mollitia, magni eaque aspernatur corrupti sed repellendus sequi aperiam et accusamus fugit commodi, obcaecati quibusdam hic, reprehenderit minus? Quae ex, quaerat quasi animi, sequi saepe perspiciatis sunt error ipsa id, facilis possimus molestias sit maxime rerum.
            </Typography>
            <Typography className='aboutCleaning'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat aliquam beatae vitae ipsam id excepturi veritatis molestiae quisquam ratione consequuntur modi odit blanditiis quia voluptatem, dolorum officiis reiciendis? Deserunt officiis quasi quidem necessitatibus doloremque dicta voluptatem cupiditate repellendus fuga!
            </Typography>
            <Typography className='aboutCleaning'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, dolor sequi! Assumenda, suscipit. Quam itaque laborum nisi iusto voluptatibus! Ullam ratione iure ipsum eveniet explicabo. Dolorum similique unde voluptas vero corrupti veritatis officiis fuga. Facilis, soluta! Numquam in dolorem voluptas distinctio voluptates. Dolores, obcaecati vero!
            </Typography>
            
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <ul className='aboutCompanyInfo-ul'>
                  <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
                  <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
                </ul>
              </Grid>
              <Grid item xs={6}>
                <ul className='aboutCompanyInfo-ul'>
                  <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
                  <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
                </ul>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>

      <Box className='howItWorksInner headingBlocks'>
        <Box className=' text-center padding-bottom-40'>
          <Typography style={{ fontWeight: 600, fontSize:'40px' }} variant="h2">How It Works</Typography>
          <Typography className='headingBlock-p' style={{fontWeight:500, fontSize:'14px'}} variant="h6">Aliquam lorem ante, dapibus in, viverra qui</Typography>
        </Box>

        <Grid sx={{ marginLeft:'50px', marginRight:'30px',maxWidth:'1200px',marginTop:'40px' }} container spacing={4}>
          <Grid item xs={12} md={4}> 
            <Box className='worksCard'>
              <Typography className='numberTag' variant="h4">01</Typography>
              <img src="assets/icon.svg" alt="img" />
              <Typography style={{color:'#28283c',fontWeight:'600'}} variant="h6">Choose What To Do</Typography>
              <Typography style={{color:'#74788d',fontSize:'14px' }} variant="body1">Aliquam lorem ante, dapibus in, viverra quis, feugiat Phasellus viverra nulla ut metus varius laoreet.</Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}> 
            <Box className='worksCard'>
              <Typography className='numberTag' variant="h4">02</Typography>
              <img src="assets/icon.svg" alt="img" />
              <Typography style={{color:'#28283c',fontWeight:'600'}} variant="h6">Find What You Want</Typography>
              <Typography style={{color:'#74788d',fontSize:'14px' }} variant="body1">Aliquam lorem ante, dapibus in, viverra quis, feugiat Phasellus viverra nulla ut metus varius laoreet.</Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}> 
            <Box className='worksCard'>
              <Typography className='numberTag' variant="h4">03</Typography>
              <img src="assets/icon.svg" alt="img" />
              <Typography style={{color:'#28283c',fontWeight:'600'}} variant="h6">Amazing Places</Typography>
              <Typography style={{color:'#74788d',fontSize:'14px' }} variant="body1">Aliquam lorem ante, dapibus in, viverra quis, feugiat Phasellus viverra nulla ut metus varius laoreet.</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>


      <Grid className='collapse' container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography style={{ fontWeight: 600, fontSize:'40px',color:'#28283c',margin:'0 0 15px',lineHeight:'1'}} variant='h2'>Why Choose Us</Typography>
          <Typography style={{fontWeight:600, fontSize:'16px',color:'#74788d',paddingBottom:'25px' }} variant='h6'>At vero eos et accusamus et iusto odio dignissimos ducimus</Typography>

          <Grid item xs={12}>
            <Button className='collapse-button' onClick={() => handleToggle('support')} endIcon={<ExpandMoreIcon style={{ transform: openSections.support ? 'rotate(180deg)' : 'rotate(0)' }} />}>
              <Typography variant="h6">24/7 Supports</Typography>
            </Button>
            <Collapse in={openSections.support}>
              <Typography style={{ color:'#74788d',fontSize:'16px'}}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </Typography>
            </Collapse>
          </Grid>

          <Grid item xs={12}>
            <Button className='collapse-button' onClick={() => handleToggle('review')} endIcon={<ExpandMoreIcon style={{ transform: openSections.review ? 'rotate(180deg)' : 'rotate(0)' }} />}>
              <Typography variant="h6">Clients Review</Typography>
            </Button>
            <Collapse in={openSections.review}>
              <Typography>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </Typography>
            </Collapse>
          </Grid>

          <Grid item xs={12}>
            <Button className='collapse-button' onClick={() => handleToggle('team')} endIcon={<ExpandMoreIcon style={{ transform: openSections.team ? 'rotate(180deg)' : 'rotate(0)' }} />}>
              <Typography variant="h6">Professionals Team</Typography>
            </Button>
            <Collapse in={openSections.team}>
              <Typography style={{ color:'#74788d',fontSize:'16px'}}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </Typography>
            </Collapse>
          </Grid>

          <Grid item xs={12}>
            <Button className='collapse-button' onClick={() => handleToggle('services')} endIcon={<ExpandMoreIcon style={{ transform: openSections.services ? 'rotate(180deg)' : 'rotate(0)' }} />}>
              <Typography variant="h6">Best Services</Typography>
            </Button>
            <Collapse in={openSections.services}>
              <Typography style={{ color:'#74788d',fontSize:'16px'}} >
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </Typography>
            </Collapse>
          </Grid>

          <Grid item xs={12}>
            <Button className='collapse-button' onClick={() => handleToggle('clientSupport')} endIcon={<ExpandMoreIcon style={{ transform: openSections.clientSupport ? 'rotate(180deg)' : 'rotate(0)', fontSize:'18px' }} />}>
              <Typography variant="h6">Client supports</Typography>
            </Button>
            <Collapse in={openSections.clientSupport}>
              <Typography style={{ color:'#74788d',fontSize:'16px'}}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </Typography>
            </Collapse>
          </Grid>
        </Grid>

        <Grid className='imgSection' item xs={12} md={6}>


       </Grid>
      </Grid>

      <Grid  className='provider'>
      <Box>
        <Typography style={{ fontWeight: 600, fontSize:'40px',color:'#28283c',margin:'0 0 15px', lineHeight:'1'}} variant='h2'>
          Top Providers
        </Typography>
        <Typography style={{fontWeight:600, fontSize:'16px',color:'#74788d',paddingBottom:'25px' }} variant='h6'>
          Meet Our Experts
        </Typography>
      </Box>

    <Grid container item xs={12} spacing={2} >
      
      <Grid className='profileCard' item xs={3} style={{ width: '100%', height: '100%' }}>
        <img src='../assets/providerImg.jpg' alt='Provider' style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <Typography style={{color:'#28283c',fontWeight:'bold'}} varient='h6'>David Morrison</Typography>
        <Typography style={{color:'#74788d',fontSize:'16px'}}>davidmorrison@example.com</Typography>
      </Grid>

      <Grid className='profileCard' item xs={3} style={{ width: '100%', height: '100%' }}>
        <img src='../assets/providerImg1.jpg' alt='Provider' style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <Typography style={{color:'#28283c',fontWeight:'bold'}} varient='h6'>Linda Brooks</Typography>
        <Typography style={{color:'#74788d',fontSize:'16px'}}>lindabrooks@example.com</Typography>
      </Grid>

      <Grid className='profileCard' item xs={3} style={{ width: '100%', height: '100%' }}>
        <img src='../assets/providerImg3.jpg' alt='Provider' style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <Typography style={{color:'#28283c',fontWeight:'bold'}} varient='h6'>Jack Morrison</Typography>
        <Typography style={{color:'#74788d',fontSize:'16px'}}>Jackmorrison@example.com</Typography>
      </Grid>

      <Grid className='profileCard' item xs={3} style={{ width: '100%', height: '100%' }}>
        <img src='../assets/provider-05-3.jpg' alt='Provider' style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <Typography style={{color:'#28283c',fontWeight:'bold'}} varient='h6'>Maritza Wasson</Typography>
        <Typography style={{color:'#74788d',fontSize:'16px'}}>maritzawasson@example.com</Typography>
      </Grid>

    </Grid>
    
    </Grid>



    {/* <Grid className='clientSaysBlock' container >

    <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', textAlign: 'center', margin: '30px 0' }}>
      <Typography style={{ fontWeight: 600, fontSize: '40px' }} variant="h2">What Our Client Says</Typography>
      <Typography style={{ fontWeight: 600, fontSize: '14px', color: '#74788d', marginTop: '10px' }} variant="h6">Lorem ipsum dolor sit amet, consectetur elit</Typography>
    </Box>



    </Grid> */}


    </MainBox>
  );
}

export default About;

const MainBox = styled(Box)`
  .parentBox {
    maxWidth:1200px;
    padding: 70px 70px; 
  }

  .aboutCompanyLeft {
    position: relative;
    margin-bottom: 30px;
  }

  .aboutCompanyExp {
    position: absolute;
    background: #4c40ed;
    border-radius: 10px;
    width: 370px;
    top: 30px;
    bottom: 90px; 
  }

  .aboutCompanyExp-span {
    font-weight: 600;
    font-size: 25px;
    color: #fff;
    display: inline-block;
    margin: 240px -112px;
    transform: rotate(-90deg);
  }

  .aboutCompanyImg {
    position: relative;
    padding: 30px 0 30px 60px;
    height: 83%;
    z-index: 1;
    display: block;
    width: 100%;
    border-radius: 10px;
  }

  .aboutCompanyImg::before {
    content: "";
    position: absolute;
    top: 30px;
    left: 60px;
    right: 30px;
    bottom: 30px;
    background: url('../assets/about-01.jpg') no-repeat center center;
    background-size: cover;
    border-radius: 10px;
  }

  .aboutCompanyInfo {
    padding: 40px;
  }

  .headingBlock {
    color: #4c40ed;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .heading {
    font-size: 32px;
    color: #28283c;
    margin: 0 0 15px;
    padding-bottom: 20px;
    font-weight: 600;
    line-height: 1;
  }

  .aboutCleaning {
    display: block;
    margin: 0 0 10px;
    color: #74788d;
  }

  .aboutCompanyInfo-ul {
    font-size: 14px;
    color: #74788d;
    padding: 0;
    margin: 0;
    list-style: none;
  }

  .aboutCompanyInfo-ul li {
    position: relative;
    padding-left: 14px;
    margin-bottom: 10px;
  }

  .aboutCompanyInfo-ul li::before {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #4c40ed;
    position: absolute;
    top: 5px;
    left: 0;
    content: "";
  }

  .headingBlocks {
    text-align: center;
    font-size: 20px;
    color: #28283c;
    font-weight: 600; 
    margin: 0 0 15px;
    line-height: 1;
    background: url('../assets/work-bg1.png'), url('../assets/work-bg2.png'), #f7f7ff; 
    background-repeat:no-repeat;
    background-position:left center, right 0 bottom 25%;
  }

  .padding-bottom-40{
    padding-left:40px;
    padding-right:40px;
    padding-top:40px;
    padding-bottom:20px;
  }

  .headingBlock-p{
    font-weight:500;
    color:#74788d;
    font-size:14px;
  }

  .worksCard {
    background-color: #fff;
    border: 1px solid #f5f5f5;
    box-shadow: 0px 10px 20px -5px rgba(76, 64, 237, 0.08);
    border-radius: 20px;
    padding: 60px 60px; 
    text-align: center;
    max-width: 420px;
    width: 100%;
    margin-bottom: 120px;
    position: relative;
  }

  .numberTag {
    font-weight: 600;
    font-size: 60px;
    color: #EDECF8;
    margin-bottom: 0;
    position: absolute;
    top: -24px;
    left: 0;
  }

  .collapse{
    padding-top: 90px;
    padding-bottom: 90px;
    margin-left:50px;
    margin-right:50px;
  }


  .imgSection {
    background: url('../assets/about-01.jpg') no-repeat;
    background-size: cover;
    display:block;
    width:550px;
    border-radius: 10px;
    max-width:550px;
    height: 500px;
    display: inline-block;
    margin-top: 20px;
   
  }

  .collapse-button {
  background: #F4F7FF;
  border-radius: 10px;
  padding: 7px;
  font-weight:700;
  font-size: 14px;
  margin-bottom: 0;
  display: flex; 
  justify-content: space-between; 
  color: #28283C;
  width: 90%; 
  max-width: 90%; 
  margin-top:30px;
  text-transform:none;
}

.profileCard {
    border: 2px solid #F5F5F5;
    border-radius: 10px;
    padding: 18px;
    position: relative;
    top: 20px;
    transition: all 0.5s;
    background: #fff;
}

.provider{
  padding-top: 70px;
  padding-bottom: 90px;
  margin-left:50px;
  margin-right:50px;
  background: url(../assets/provider-bg.png);
  background-repeat: no-repeat;
  background-position: right center;

}

/* .clientSaysBlock{
  text-align: center;
  background: url(../assets/testimonial-bg.png), url(../assets/testimonial-bg1.png), #F9F9F9;
    background-repeat: no-repeat;
    background-position: left center, right bottom;
} */





  





`;
