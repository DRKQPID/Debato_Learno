   // app/learning/[system]/[level]/page.tsx

   import CourseContent from './CourseContent'; // Adjust the import path if necessary
   import { NextPage } from 'next';

   // The page component that receives params
   const CoursePage: NextPage<{ params: { system: string; level: string } }> = ({ params }) => {
       const { system, level } = params;

       return (
           <CourseContent system={system} level={level} />
       );
   };

   // If you are using static generation, you can define generateStaticParams
   export async function generateStaticParams() {
       return [
           { system: 'bp', level: 'beginner' },
           { system: 'bp', level: 'intermediate' },
           { system: 'bp', level: 'advanced' },
           { system: 'general', level: 'beginner' },
           { system: 'general', level: 'intermediate' },
           { system: 'general', level: 'advanced' },
       ];
   }

   export default CoursePage;

