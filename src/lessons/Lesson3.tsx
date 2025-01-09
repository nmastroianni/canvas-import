import ContainerBlock from '@/components/ContainerBlock'
import { useCourse } from '@/components/CourseProvider'
import LessonBlock from '@/components/LessonBlock'
import LessonSectionBlock from '@/components/LessonSectionBlock'
import NextLessonButton from '@/components/NextLessonButton'
import { AnimatePresence } from 'motion/react'

const Lesson3 = () => {
  const { currentSection } = useCourse()
  const sectionCount = 2
  return (
    <LessonBlock>
      <ContainerBlock width="prose">
        <h1>What to Do After the Import is Complete</h1>
      </ContainerBlock>
      <AnimatePresence mode="sync">
        {currentSection === 0 && (
          <LessonSectionBlock id="lesson3section1" key={1}>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est
              similique id, deleniti placeat impedit, consequatur ullam dolorem
              autem error itaque, perferendis sed cumque! Aliquam eius
              exercitationem culpa iure quia asperiores!
            </p>
          </LessonSectionBlock>
        )}
      </AnimatePresence>
      {currentSection === sectionCount - 1 && (
        <NextLessonButton contingent text="Continue to the final step" />
      )}
    </LessonBlock>
  )
}

export default Lesson3
