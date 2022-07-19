import {useState}from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import SchoolIcon from '@mui/icons-material/School';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid'
import { useSelector } from 'react-redux';
import './CourseList.css'
import { courseListSelector } from '../../../store/selector';
import CourseDetailModal from '../Modal/CourseDetailModal';
export default function CourseList() {
  const courses = useSelector(courseListSelector);
  const [open, setOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState({})
  const handleAddButton = (course)=>{
    setOpen(true);
    setSelectedCourse(course);
  }
  return (
    <List className='scroll' id="style-1" sx={{ width: '100%', bgcolor: 'background.paper', overflowY:'scroll'}}>
      {courses.map((course, index)=>(
        <ListItem key={index} className='list-item'>
            <Grid container>
                <Grid item xs={2}>
                    <ListItemAvatar>
                    <Avatar>
                        <SchoolIcon />
                    </Avatar>
                    </ListItemAvatar>
                </Grid>
                <Grid item xs={8}>
                    <ListItemText primary={`${course.key}-${course.name}`} secondary={`Tín chỉ: ${course.weight}`} />
                </Grid>
                <Grid item xs={2}>
                    <Button onClick={() => {handleAddButton(course)}} variant="contained">Thêm</Button>
                </Grid>
            </Grid>
        </ListItem>
      ))}
      <CourseDetailModal course={selectedCourse} open={open} setOpen={setOpen}/>
    </List>
  );
}
