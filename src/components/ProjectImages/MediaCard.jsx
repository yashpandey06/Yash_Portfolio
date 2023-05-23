/* eslint-disable react/prop-types */
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';

export default function MediaCard({ projects }) {
  console.log(projects);

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-5  p-8 h-full '>
      {projects.map((project) => (
        <Card className='' key={project.id} sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={project.image}
            title={project.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {project.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {project.description}
            </Typography>
          </CardContent>
          <div className='flex  items-center justify-between px-4 my-2'>
            <button className='bg-black text-white duration-200 rounded-xl hover:bg-yellow-400 p-2 px-4 '>Code</button>
            <button className='bg-black text-white duration-200 rounded-xl hover:bg-yellow-400  p-2 px-4' >Live</button>
          </div>
        </Card>
        
      ))}
    </div>
  );
}
