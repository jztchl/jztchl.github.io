'use client';
import { useState, useEffect } from 'react';
import {
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  IconButton,
  Link,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import MenuIcon from '@mui/icons-material/Menu';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import personalInfo from '../data/personal_info.json';
import education from '../data/education.json';
import workExperience from '../data/work_experience.json';
import projects from '../data/projects.json';
import additionalInfo from '../data/additional_info.json';

const AnimatedSection = ({ children }: { children: React.ReactNode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const sections = ['home', 'experience', 'education', 'projects', 'skills'];

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  const drawer = (
    <Box sx={{ width: 250, bgcolor: 'background.paper' }}>
      <List>
        {sections.map((section) => (
          <ListItem button key={section} onClick={() => scrollToSection(section)}>
            <ListItemText primary={section.charAt(0).toUpperCase() + section.slice(1)} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="fixed" sx={{ bgcolor: 'background.paper', boxShadow: 3 }}>
        <Container maxWidth="lg">
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            py={2}
          >
            <Typography variant="h6" component="div">
              {personalInfo.name}
            </Typography>
            {isMobile ? (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <Stack direction="row" spacing={4}>
                {sections.map((section) => (
                  <Button
                    key={section}
                    color="inherit"
                    onClick={() => scrollToSection(section)}
                  >
                    {section}
                  </Button>
                ))}
              </Stack>
            )}
          </Stack>
        </Container>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {drawer}
      </Drawer>

      <Container maxWidth="lg" sx={{ pt: 12 }}>
        {/* Hero Section */}
        <Box id="home" minHeight="90vh" display="flex" alignItems="center">
          <AnimatedSection>
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={6}>
                <Typography variant="h1" gutterBottom>
                  Hi, I'm {personalInfo.name}
                </Typography>
                <Typography variant="h3" color="primary" gutterBottom>
                  {personalInfo.title}
                </Typography>
                <Typography variant="body1" paragraph>
                  {personalInfo.bio}
                </Typography>
                <Stack direction="row" spacing={2} mt={4}>
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<EmailIcon />}
                    href={`mailto:${personalInfo.email}`}
                  >
                    Contact Me
                  </Button>
                  <IconButton
                    component={Link}
                    href={`https://${personalInfo.github}`}
                    target="_blank"
                    color="primary"
                  >
                    <GitHubIcon />
                  </IconButton>
                  <IconButton
                    component={Link}
                    href={`https://${personalInfo.linkedin}`}
                    target="_blank"
                    color="primary"
                  >
                    <LinkedInIcon />
                  </IconButton>
                </Stack>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box
                  component={motion.div}
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  sx={{
                    height: 400,
                    background: 'linear-gradient(45deg, #00bcd4 30%, #ff4081 90%)',
                    borderRadius: 4,
                    overflow: 'hidden',
                    position: 'relative',
                  }}
                >
                  <Box
                    component="img"
                    src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg"
                    alt="Developer"
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      opacity: 0.7,
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
          </AnimatedSection>
        </Box>

        {/* Experience Section */}
        <Box id="experience" py={8}>
          <AnimatedSection>
            <Typography variant="h2" gutterBottom>
              Experience
              <Box
                component="span"
                sx={{
                  display: 'inline-block',
                  ml: 2,
                  color: 'primary.main',
                }}
              >
                <WorkIcon fontSize="large" />
              </Box>
            </Typography>
            <Grid container spacing={4}>
              {workExperience.map((job, index) => (
                <Grid item xs={12} key={index}>
                  <Card>
                    <CardContent>
                      <Typography variant="h5" gutterBottom>
                        {job.role}
                      </Typography>
                      <Typography variant="h6" color="primary" gutterBottom>
                        {job.company}
                      </Typography>
                      <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                        {job.duration}
                      </Typography>
                      <Box component="ul" sx={{ pl: 2 }}>
                        {job.responsibilities.map((resp, i) => (
                          <Typography
                            component="li"
                            key={i}
                            variant="body1"
                            paragraph
                          >
                            {resp}
                          </Typography>
                        ))}
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </AnimatedSection>
        </Box>

        {/* Education Section */}
        <Box id="education" py={8}>
          <AnimatedSection>
            <Typography variant="h2" gutterBottom>
              Education
              <Box
                component="span"
                sx={{
                  display: 'inline-block',
                  ml: 2,
                  color: 'primary.main',
                }}
              >
                <SchoolIcon fontSize="large" />
              </Box>
            </Typography>
            <Grid container spacing={4}>
              {education.map((edu, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <Card>
                    <CardContent>
                      <Typography variant="h5" gutterBottom>
                        {edu.degree}
                      </Typography>
                      <Typography variant="h6" color="primary" gutterBottom>
                        {edu.institution}
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        {edu.location}
                      </Typography>
                      <Typography variant="body1">
                        Completed: {edu.completion_date}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </AnimatedSection>
        </Box>

        {/* Projects Section */}
        <Box id="projects" py={8}>
          <AnimatedSection>
            <Typography variant="h2" gutterBottom>
              Projects
              <Box
                component="span"
                sx={{
                  display: 'inline-block',
                  ml: 2,
                  color: 'primary.main',
                }}
              >
                <CodeIcon fontSize="large" />
              </Box>
            </Typography>
            <Grid container spacing={4}>
              {projects.map((project, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <Card>
                    <Box
                      sx={{
                        height: 200,
                        overflow: 'hidden',
                      }}
                    >
                      <Box
                        component="img"
                        src={project.image_url}
                        alt={project.title}
                        sx={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.3s ease-in-out',
                          '&:hover': {
                            transform: 'scale(1.1)',
                          },
                        }}
                      />
                    </Box>
                    <CardContent>
                      <Typography variant="h5" gutterBottom>
                        {project.title}
                      </Typography>
                      <Box component="ul" sx={{ pl: 2 }}>
                        {project.description.map((desc, i) => (
                          <Typography
                            component="li"
                            key={i}
                            variant="body1"
                            paragraph
                          >
                            {desc}
                          </Typography>
                        ))}
                      </Box>
                      <Button
                        variant="contained"
                        color="primary"
                        href={project.project_url}
                        target="_blank"
                      >
                        View Project
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </AnimatedSection>
        </Box>

        {/* Skills Section */}
        <Box id="skills" py={8}>
          <AnimatedSection>
            <Typography variant="h2" gutterBottom>
              Skills & Expertise
            </Typography>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <Card>
                  <CardContent>
                    <Typography variant="h5" gutterBottom>
                      Technical Skills
                    </Typography>
                    <Box display="flex" flexWrap="wrap" gap={1}>
                      {additionalInfo.technical_skills.map((skill, index) => (
                        <Chip
                          key={index}
                          label={skill}
                          color="primary"
                          variant="outlined"
                        />
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={6}>
                <Card>
                  <CardContent>
                    <Typography variant="h5" gutterBottom>
                      Certifications
                    </Typography>
                    <List>
                      {additionalInfo.certifications.map((cert, index) => (
                        <ListItem key={index}>
                          <ListItemText primary={cert} />
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={6}>
                <Card>
                  <CardContent>
                    <Typography variant="h5" gutterBottom>
                      Languages
                    </Typography>
                    <List>
                      {additionalInfo.languages.map((lang, index) => (
                        <ListItem key={index}>
                          <ListItemText primary={lang} />
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </AnimatedSection>
        </Box>

        {/* Footer */}
        <Box
          component="footer"
          sx={{
            py: 4,
            textAlign: 'center',
            borderTop: 1,
            borderColor: 'divider',
          }}
        >
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </>
  );
}