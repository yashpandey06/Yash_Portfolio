/* eslint-disable react/prop-types */
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function MediaCard({ projects }) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-5 p-8 h-full'>
      {projects.map((project) => (
        <Card className='flex flex-col justify-between' key={project.id} sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 120 }}
           
            title={project.name}
          />
          <CardContent className='flex flex-col justify-between'>
            <div>
              <Typography gutterBottom variant="h5" component="div">
                {project.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <div className='text-black'>{project.explain}</div>
              </Typography>
            </div>
            <div className='flex justify-between mt-8'>
              <button className='bg-black text-white duration-200 rounded-xl hover:bg-yellow-400 hover:text-black p-2 px-4'>{project.repo}</button>
              <button className='bg-black text-white duration-200 rounded-xl hover:bg-yellow-400 hover:text-black p-2 px-4'>{project.livelink}</button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
