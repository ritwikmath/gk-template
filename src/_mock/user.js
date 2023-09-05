import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const users = [
  {
    "id": 1,
    "avatarUrl": "/assets/images/avatars/avatar_1.jpg",
    "name": "John Doe",
    "email": "john.doe@example.com",
    "team": "Team A",
    "role": "Subject Matter Expert",
    "isVerified": true,
    "word": 60000
  },
  {
    "id": 2,
    "avatarUrl": "/assets/images/avatars/avatar_2.jpg",
    "name": "Jane Smith",
    "email": "jane.smith@example.com",
    "team": "Team B",
    "role": "Senior Subject Matter Expert",
    "isVerified": true,
    "word": 75000
  },
  {
    "id": 3,
    "avatarUrl": "/assets/images/avatars/avatar_3.jpg",
    "name": "Michael Johnson",
    "email": "michael.johnson@example.com",
    "team": "Management",
    "role": "Admin",
    "isVerified": true,
    "word": 0
  },
  {
    "id": 4,
    "avatarUrl": "/assets/images/avatars/avatar_4.jpg",
    "name": "Emily Brown",
    "email": "emily.brown@example.com",
    "team": "Freelancing",
    "role": "Freelancer",
    "isVerified": true,
    "word": 45000
  },
  {
    "id": 5,
    "avatarUrl": "/assets/images/avatars/avatar_5.jpg",
    "name": "David Lee",
    "email": "david.lee@example.com",
    "team": "Management",
    "role": "Admin",
    "isVerified": true,
    "word": 0
  },
  {
    "id": 6,
    "avatarUrl": "/assets/images/avatars/avatar_6.jpg",
    "name": "Alex Wilson",
    "email": "alex.wilson@example.com",
    "team": "Team A",
    "role": "Senior Subject Matter Expert",
    "isVerified": true,
    "word": 72000
  },
  {
    "id": 7,
    "avatarUrl": "/assets/images/avatars/avatar_7.jpg",
    "name": "Sophia Davis",
    "email": "sophia.davis@example.com",
    "team": "Team D",
    "role": "Subject Matter Expert",
    "isVerified": true,
    "word": 55000
  },
  {
    "id": 8,
    "avatarUrl": "/assets/images/avatars/avatar_8.jpg",
    "name": "William Martin",
    "email": "william.martin@example.com",
    "team": "Team B",
    "role": "Subject Matter Expert",
    "isVerified": true,
    "word": 58000
  },
  {
    "id": 9,
    "avatarUrl": "/assets/images/avatars/avatar_9.jpg",
    "name": "Olivia Anderson",
    "email": "olivia.anderson@example.com",
    "team": "Freelancing",
    "role": "Freelancer",
    "isVerified": true,
    "word": 52000
  },
  {
    "id": 10,
    "avatarUrl": "/assets/images/avatars/avatar_10.jpg",
    "name": "James Martinez",
    "email": "james.martinez@example.com",
    "team": "Management",
    "role": "Admin",
    "isVerified": true,
    "word": 0
  },
  {
    "id": 11,
    "avatarUrl": "/assets/images/avatars/avatar_11.jpg",
    "name": "Emma Taylor",
    "email": "emma.taylor@example.com",
    "team": "Team C",
    "role": "Subject Matter Expert",
    "isVerified": true,
    "word": 61000
  },
  {
    "id": 12,
    "avatarUrl": "/assets/images/avatars/avatar_12.jpg",
    "name": "Daniel Harris",
    "email": "daniel.harris@example.com",
    "team": "Team D",
    "role": "Subject Matter Expert",
    "isVerified": true,
    "word": 59000
  },
  {
    "id": 13,
    "avatarUrl": "/assets/images/avatars/avatar_13.jpg",
    "name": "Ava White",
    "email": "ava.white@example.com",
    "team": "Team A",
    "role": "Senior Subject Matter Expert",
    "isVerified": true,
    "word": 71000
  },
  {
    "id": 14,
    "avatarUrl": "/assets/images/avatars/avatar_14.jpg",
    "name": "Liam Robinson",
    "email": "liam.robinson@example.com",
    "team": "Team B",
    "role": "Subject Matter Expert",
    "isVerified": true,
    "word": 56000
  },
  {
    "id": 15,
    "avatarUrl": "/assets/images/avatars/avatar_15.jpg",
    "name": "Mia Walker",
    "email": "mia.walker@example.com",
    "team": "Team C",
    "role": "Subject Matter Expert",
    "isVerified": true,
    "word": 59000
  },
  {
    "id": 16,
    "avatarUrl": "/assets/images/avatars/avatar_16.jpg",
    "name": "Noah King",
    "email": "noah.king@example.com",
    "team": "Freelancing",
    "role": "Freelancer",
    "isVerified": true,
    "word": 48000
  },
  {
    "id": 17,
    "avatarUrl": "/assets/images/avatars/avatar_17.jpg",
    "name": "Isabella Adams",
    "email": "isabella.adams@example.com",
    "team": "Management",
    "role": "Admin",
    "isVerified": true,
    "word": 0
  },
  {
    "id": 18,
    "avatarUrl": "/assets/images/avatars/avatar_18.jpg",
    "name": "Ethan Campbell",
    "email": "ethan.campbell@example.com",
    "team": "Team D",
    "role": "Subject Matter Expert",
    "isVerified": true,
    "word": 60000
  },
  {
    "id": 19,
    "avatarUrl": "/assets/images/avatars/avatar_19.jpg",
    "name": "Aria Stewart",
    "email": "aria.stewart@example.com",
    "team": "Team A",
    "role": "Subject Matter Expert",
    "isVerified": true,
    "word": 62000
  },
  {
    "id": 20,
    "avatarUrl": "/assets/images/avatars/avatar_20.jpg",
    "name": "Jackson Miller",
    "email": "jackson.miller@example.com",
    "team": "Team B",
    "role": "Senior Subject Matter Expert",
    "isVerified": true,
    "word": 74000
  }
]

export default users;
