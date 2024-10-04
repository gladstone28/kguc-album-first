const members = [
  {
    id: 1,
    name: 'Natalya Rose',
    profilePicture: process.env.PUBLIC_URL + '/images/natalya.jpg',
    description: 'Founding member of the original Powerpoint team.',
    skills: ['Medical Doctor','Matthew House', 'Technical Team']
  },
  {
    id: 2,
    name: 'Jane Smith',
    profilePicture: process.env.PUBLIC_URL + '/images/jane.jpg',
    description: 'Medical Doctor, Teacher, coordinator of community outreach programs.',
    skills: ['Medcal Doctor','Teacher', 'Community Outreach', 'Ruth House']
  },
  {
    id: 3,
    name: 'Gladstone Rose',
    profilePicture: process.env.PUBLIC_URL + '/images/gladstone.jpg',
    description: 'Secretary for the Planning Committee and member of the Technical Team',
    skills: ['Planning Committee', 'Technical Team','Daniel House', 'Teacher']
  },
  {
    id: 4,
    name: 'Alaina Rose',
    profilePicture: process.env.PUBLIC_URL + '/images/alaina.jpg',
    description: 'Young Adult Co-ordinator, Technical Team member and Engineer.',
    skills: ['Engineer', 'Young Adult Movement','Daniel House','Evangelism Committee', 'Technical Team', 'Youth Leader']
  },
  {
    id: 5,
    name: 'Jeaneth Rose',
    profilePicture: process.env.PUBLIC_URL + '/images/jeaneth.jpg',
    description: 'Choir Member and Deputy Board Chairman.',
    skills: ['Choir Member','Esther House','Womens Fellowship', 'Quality Manager']
  },
  {
    id: 6,
    name: 'John Brown',
    profilePicture: process.env.PUBLIC_URL + '/images/john.jpg',
    description: 'Businessman, Financier and member of the community outreach team.',
    skills: ['Businessman','Dentist','Entrepreneur', 'F&S Committee','Esther House', 'Mens Fellowship']
  },
  {
    id: 7,
    name: 'Nadia Rose',
    profilePicture: process.env.PUBLIC_URL + '/images/nadia.jpg',
    description: 'Senior member and member of the community outreach team.',
    skills: ['Medical Doctor', 'Community Outreach','Ruth House', 'Teacher']
  },
  {
    id: 8,
    name: 'Mikhail Reid',
    profilePicture: process.env.PUBLIC_URL + '/images/mikhail.jpg',
    description: 'Youth Leader, member of the Technical Team, Keyboard Player and member of the community outreach team.',
    skills: ['Chemical Engineer', 'Mens Fellowship','Matthew House', 'Technical Team', 'Young Adult Movement', 'Choir Member']
  },
  {
    id: 9,
    name: 'Glodine Anderson',
    profilePicture: process.env.PUBLIC_URL + '/images/glodine.jpg',
    description: 'Choir member, Pharmacist and member of the community outreach team.',
    skills: ['Pharmacist', 'Community Outreach','Daniel House','Young Adult Movement', 'Choir Member']
  },
  {
    id: 10,
    name: 'Rev Garwell Bacchas',
    profilePicture: process.env.PUBLIC_URL + '/images/garwell.jpg',
    description: 'Chairman of the Board of Elders, Ordained Minister of Religion.',
    skills: ['Minister', 'Community Outreach','Mens Fellowship', 'Planning Committee']
  },
  {
    id: 11,
    name: 'Carleen Soares',
    profilePicture: process.env.PUBLIC_URL + '/images/carleen.jpg',
    description: 'Usher and member of the community outreach team.',
    skills: ['Businesswoman','Daniel House', 'Community Outreach', 'Usher']
  },
  {
    id: 12,
    name: 'Jahmai Paul',
    profilePicture: process.env.PUBLIC_URL + '/images/jahmai.jpg',
    description: 'Planning Committee, Praise and Worship and member of the community outreach team.',
    skills: ['Businesswoman','Planning Committee', 'Community Outreach','Daniel House', 'Young Adult Movement', 'Choir Member']
  },
 {
    id: 13,
    name: 'Shenique Soares',
    profilePicture: process.env.PUBLIC_URL + '/images/shenique.jpg',
    description: 'Praise Team, Choir, Young Adult and member of the community outreach team.',
    skills: ['Community Outreach','Daniel House', 'Young Adult Movement', 'Choir Member']
  },
 {
    id: 14,
    name: 'Norma McNeil',
    profilePicture: process.env.PUBLIC_URL + '/images/norma.jpg',
    description: 'Womens Fellowship, Sunday School Teacher.',
    skills: ['Womens Fellowship','Daniel House', 'Community Outreach', 'Sunday School Teacher']
  },
 {
    id: 15,
    name: 'Jenny Brown',
    profilePicture: process.env.PUBLIC_URL + '/images/jenny.jpg',
    description: 'Womens Fellowship and Evangelism Committee.',
    skills: ['Womens Fellowship','Daniel House', 'Community Outreach', 'Evangelism Committee']
  },
 {
    id: 16,
    name: 'Verley McDonald',
    profilePicture: process.env.PUBLIC_URL + '/images/verley.jpg',
    description: 'Womens Fellowship, Sunday School Teacher.',
    skills: ['Womens Fellowship','Daniel House', 'Community Outreach', 'Sunday School Teacher']
  },
 {
    id: 17,
    name: 'Audrey Campbell',
    profilePicture: process.env.PUBLIC_URL + '/images/audrey.jpg',
    description: 'Womens Fellowship, Sunday School Teacher.',
    skills: ['Womens Fellowship','Daniel House', 'Community Outreach', 'Sunday School Teacher']
  },
{
    id: 18,
    name: 'Bev Brown',
    profilePicture: process.env.PUBLIC_URL + '/images/bev.jpg',
    description: 'Womens Fellowship, Sunday School Teacher.',
    skills: ['Womens Fellowship','Daniel House', 'Community Outreach', 'Choir Member']
  },
{
    id: 19,
    name: 'Carol Taylor',
    profilePicture: process.env.PUBLIC_URL + '/images/carol.jpg',
    description: 'Womens Fellowship, Sunday School Teacher.',
    skills: ['Womens Fellowship','Daniel House', 'Community Outreach', 'Usher']
  },
{
    id: 20,
    name: 'BJ Soares',
    profilePicture: process.env.PUBLIC_URL + '/images/bj.jpg',
    description: 'Mens Fellowship,Keyboard, Drums.',
    skills: ['Mens Fellowship','Daniel House', 'Community Outreach', 'Usher']
  },
{
    id: 21,
    name: 'Paul Downer',
    profilePicture: process.env.PUBLIC_URL + '/images/paul.jpg',
    description: 'Mens Fellowship, Pastor, Sunday School Teacher.',
    skills: ['Mens Fellowship','Esther House', 'Community Outreach', 'Minister']
  },
{
    id: 22,
    name: 'Melissa McNeil-Barret',
    profilePicture: process.env.PUBLIC_URL + '/images/melissa.jpg',
    description: 'Womens Fellowship, Sunday School Teacher.',
    skills: ['Womens Fellowship','Ruth House', 'Community Outreach', 'Teacher']
  },
{
    id: 23,
    name: 'Carolyn Downer',
    profilePicture: process.env.PUBLIC_URL + '/images/carolyn.jpg',
    description: 'Womens Fellowship, Chair of Esther House, Sunday School Teacher.',
    skills: ['Womens Fellowship','Esther House', 'Community Outreach', 'Usher']
  },
{
    id: 24,
    name: 'Marva Chambers',
    profilePicture: process.env.PUBLIC_URL + '/images/marva.jpg',
    description: 'Womens Fellowship, Sunday School Teacher.',
    skills: ['Womens Fellowship','Banker','Ruth House', 'Community Outreach', 'F&S Committee']
  },
{
    id: 25,
    name: 'Lisa Rhooms',
    profilePicture: process.env.PUBLIC_URL + '/images/lisa.jpg',
    description: 'Young adult Movement, Lawyer.',
    skills: ['Young Adult Movement','Ruth House', 'Community Outreach', 'Lawyer']
  },
{
    id: 26,
    name: 'Kathryn Downer',
    profilePicture: process.env.PUBLIC_URL + '/images/kathryn.jpg',
    description: 'Young Adult and Youth leader, Medical Doctor.',
    skills: ['Young Adult Movement','Ruth House', 'Community Outreach', 'Medical Doctor']
  },
{
    id: 27,
    name: 'Veronica Reid',
    profilePicture: process.env.PUBLIC_URL + '/images/veronica.jpg',
    description: 'Womens Fellowship, Sunday School Teacher.',
    skills: ['Womens Fellowship','Matthew House', 'Community Outreach', 'Business Manager']
  },
{
    id: 28,
    name: 'Shernett Smith',
    profilePicture: process.env.PUBLIC_URL + '/images/shernett.jpg',
    description: 'Chairperson for the Womens Fellowship, Sunday School Teacher.',
    skills: ['Womens Fellowship','Ruth House', 'Community Outreach', 'Usher']
  }



];

export default members;
