import ContainerBlock from '@/components/ContainerBlock'
import { useCourse } from '@/components/CourseProvider'
import LessonBlock from '@/components/LessonBlock'
import { Button } from '@/components/ui/button'
import HeaderImageBlock from '@/components/HeaderImageBlock'
//import assets
// @ts-expect-error imagetools
import importScreen from '@/assets/images/import-screen.jpg?w=1920&h=1080'

const CourseOverview: React.FC = () => {
  const { currentLesson, setCurrentLesson } = useCourse()

  return (
    <>
      <LessonBlock>
        <HeaderImageBlock
          image={importScreen}
          altText=""
          heading="Importing Course Content in Canvas"
        />
        <div className="flex justify-center py-4 lg:py-8">
          <Button
            onClick={() => {
              setCurrentLesson(currentLesson + 1)
              localStorage.setItem('lessonProgress', `${currentLesson + 1}`)
              localStorage.setItem('sectionProgress', '0')
            }}
            tabIndex={0}
          >
            Start Course
          </Button>
        </div>
        <ContainerBlock width="prose">
          <h2>Save Time & Effort. Keep it Clean.</h2>
          <p>
            Preparing your course for publication is an exciting time. Thanks to
            the Import tool in Canvas, you can save time and effort. With a
            little care, you can avoid some troublesome issues. This course will
            cover the best practices for importing content in your Canvas
            "skeleton" course.
          </p>
        </ContainerBlock>
      </LessonBlock>
    </>
  )
}

export default CourseOverview
