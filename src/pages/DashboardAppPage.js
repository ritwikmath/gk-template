import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
// components
import Iconify from '../components/iconify';
// sections
import {
  AppNewsUpdate,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppWidgetSummary,
} from '../sections/@dashboard/app';

// ----------------------------------------------------------------------

export default function DashboardAppPage() {
  const theme = useTheme();
  const taskUpdates = [
    {
      "id": 1,
      "title": "Contemporary Issues in Software Engineering",
      "writer": "Kausik Naskar",
      "image": "/assets/images/covers/cover_1.jpg",
      "action": "upload",
      "postedAt": faker.date.recent(),
    },
    {
      "id": 2,
      "title": "Advanced Algorithms and Data Structures",
      "writer": "Kausik Naskar",
      "image": "/assets/images/covers/cover_2.jpg",
      "action": "upload",
      "postedAt": faker.date.recent(),
    },
    {
      "id": 3,
      "title": "Machine Learning for Beginners",
      "writer": "Kausik Naskar",
      "image": "/assets/images/covers/cover_3.jpg",
      "action": "rework",
      "postedAt": faker.date.recent(),
    },
    {
      "id": 4,
      "title": "Cybersecurity Best Practices",
      "writer": "Kausik Naskar",
      "image": "/assets/images/covers/cover_4.jpg",
      "action": "failed",
      "postedAt": faker.date.recent(),
    },
    {
      "id": 5,
      "title": "Web Development Trends 2023",
      "writer": "Kausik Naskar",
      "image": "/assets/images/covers/cover_5.jpg",
      "action": "upload",
      "postedAt": faker.date.recent(),
    },
    {
      "id": 6,
      "title": "Artificial Intelligence Ethics",
      "writer": "Kausik Naskar",
      "image": "/assets/images/covers/cover_6.jpg",
      "action": "rework upload",
      "postedAt": faker.date.recent(),
    },
    {
      "id": 7,
      "title": "Agile Project Management",
      "writer": "Kausik Naskar",
      "image": "/assets/images/covers/cover_7.jpg",
      "action": "upload",
      "postedAt": faker.date.recent(),
    },
    {
      "id": 8,
      "title": "Cloud Computing Fundamentals",
      "writer": "Kausik Naskar",
      "image": "/assets/images/covers/cover_8.jpg",
      "action": "upload",
      "postedAt": faker.date.recent(),
    },
    {
      "id": 9,
      "title": "User Experience Design Principles",
      "writer": "Kausik Naskar",
      "image": "/assets/images/covers/cover_9.jpg",
      "action": "upload",
      "postedAt": faker.date.recent(),
    },
    {
      "id": 10,
      "title": "Software Testing Techniques",
      "writer": "Kausik Naskar",
      "image": "/assets/images/covers/cover_10.jpg",
      "action": "upload",
      "postedAt": faker.date.recent(),
    }
  ]

  const missedDeadline = [
    {
      "id": 1,
      "title": "Emerging Trends in Biotechnology",
      "writer": "Kausik",
      "postedAt": faker.date.recent(),
      "image": "/assets/images/covers/cover_1.jpg"
    },
    {
      "id": 2,
      "title": "Exploring Quantum Computing",
      "writer": "Kausik",
      "postedAt": faker.date.recent(),
      "image": "/assets/images/covers/cover_2.jpg"
    },
    {
      "id": 3,
      "title": "Digital Marketing Strategies",
      "writer": "Kausik",
      "postedAt": faker.date.recent(),
      "image": "/assets/images/covers/cover_3.jpg"
    },
    {
      "id": 4,
      "title": "Sustainable Energy Solutions",
      "writer": "Kausik",
      "postedAt": faker.date.recent(),
      "image": "/assets/images/covers/cover_4.jpg"
    },
    {
      "id": 5,
      "title": "Space Exploration: New Frontiers",
      "writer": "Kausik",
      "postedAt": faker.date.recent(),
      "image": "/assets/images/covers/cover_5.jpg"
    },
    {
      "id": 6,
      "title": "Ethical Dilemmas in Robotics",
      "writer": "Kausik",
      "postedAt": faker.date.recent(),
      "image": "/assets/images/covers/cover_6.jpg"
    },
    {
      "id": 7,
      "title": "Future of Transportation Systems",
      "writer": "Kausik",
      "postedAt": faker.date.recent(),
      "image": "/assets/images/covers/cover_7.jpg"
    },
    {
      "id": 8,
      "title": "Neuroscience and Cognitive Enhancement",
      "writer": "Kausik",
      "postedAt": faker.date.recent(),
      "image": "/assets/images/covers/cover_8.jpg"
    },
    {
      "id": 9,
      "title": "The Art of Storytelling in Cinema",
      "writer": "Kausik",
      "postedAt": faker.date.recent(),
      "image": "/assets/images/covers/cover_9.jpg"
    },
    {
      "id": 10,
      "title": "Revolutionizing Food Production",
      "writer": "Kausik",
      "image": "/assets/images/covers/cover_10.jpg",
      "postedAt": faker.date.recent(),
    }
  ]



  return (
    <>
      <Helmet>
        <title> Dashboard | GK Academic </title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hi Kausik Naskar, Welcome back
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Order Count" total={3000} icon={'ant-design:file-word-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Words Submitted" total={714000} icon={'ant-design:file-word-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Pending Submission" total={25} color="info" icon={'ant-design:history-outlined'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="In Rework" total={34} color="warning" icon={'ant-design:file-excel-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Failed" total={5} color="error" icon={'ant-design:file-exclamation-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Assigned Today" total={35} icon={'ant-design:carry-out-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Deadline Missed" total={5} color="warning" icon={'ant-design:history-outlined'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Assigned" total={34} color="info" icon={'ant-design:check-circle-filled'} />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppWebsiteVisits
              title="Words Submitted this Month"
              subheader="(+43%) than last month"
              chartLabels={[
                '01/01/2023',
                '01/02/2023',
                '01/03/2023',
                '01/04/2023',
                '01/05/2023',
                '01/06/2023',
                '01/07/2023',
                '01/08/2023',
                '01/09/2023',
                '01/10/2023',
                '01/11/2023',
                // '01/12/2023',
                // '01/13/2023',
                // '01/14/2023',
                // '01/15/2023',
                // '01/16/2023',
                // '01/17/2023',
                // '01/18/2023',
                // '01/19/2023',
                // '01/20/2023',
                // '01/21/2023',
                // '01/22/2023',
                // '01/23/2023',
                // '01/24/2023',
                // '01/25/2023',
                // '01/26/2023',
                // '01/27/2023',
                // '01/28/2023',
                // '01/29/2023',
                // '01/30/2023',
                // '01/31/2023',
              ]}
              chartData={[
                {
                  name: 'Team A',
                  type: 'column',
                  fill: 'solid',
                  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                },
                {
                  name: 'Team B',
                  type: 'area',
                  fill: 'gradient',
                  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                },
                {
                  name: 'Team C',
                  type: 'line',
                  fill: 'solid',
                  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                },
                {
                  name: 'Team D',
                  type: 'line',
                  fill: 'solid',
                  data: [45, 35, 64, 52, 59, 36, 39, 30, 25, 36, 30],
                },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits
              title="# of Task Assigned This Month"
              chartData={[
                { label: 'Team A', value: 4344 },
                { label: 'Team B', value: 5435 },
                { label: 'Team C', value: 1443 },
                { label: 'Team D', value: 4443 },
              ]}
              chartColors={[
                theme.palette.primary.main,
                theme.palette.info.main,
                theme.palette.warning.main,
                theme.palette.error.main,
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <AppNewsUpdate
              title="Assignments Update"
              list={taskUpdates}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <AppNewsUpdate
              title="Missed Deadlines"
              list={missedDeadline}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
