/* eslint-disable react/prop-types */
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { motion } from "framer-motion";

export default function MediaCard({ projects }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 70, duration: 0.5 }}
      className='grid grid-cols-1 place-items-center md:place-items-stretch md:grid-cols-2 lg:grid-cols-3 w-full gap-12 p-8 h-full overflow-x-hidden'
    >
      {projects.map((project) => (
        <motion.div
          key={project.id}
          className='flex flex-col justify-between '
          whileHover={{ scale: 1.1 }}

        >
          <Card className="md:hover:bg-black md:hover:text-yellow-300">
            <CardMedia
              sx={{ height: 120 }}
              className=''
            />
            <CardContent className='flex flex-col justify-between h-60 overflow-y-auto'>
              <div className="flex flex-col h-full justify-between">
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  className="text-center"
                >
                  {project.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" className="text-black">
                  {project.explain}
                </Typography>
              </div>
              <div className='flex justify-between mt-4'>
                <button className='bg-black text-white duration-200 rounded-xl hover:bg-yellow-400 hover:text-black p-2 px-4'>{project.repo}</button>
                <button className='bg-black text-white duration-200 rounded-xl hover:bg-yellow-400 hover:text-black p-2 px-4'>{project.livelink}</button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
}
