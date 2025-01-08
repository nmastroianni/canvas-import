import ContainerBlock from '@/components/ContainerBlock'
import { useCourse } from '@/components/CourseProvider'
import LessonBlock from '@/components/LessonBlock'
import LessonSectionBlock from '@/components/LessonSectionBlock'
import NextLessonButton from '@/components/NextLessonButton'
import { AnimatePresence } from 'motion/react'
import { FC } from 'react'
import CheckForUnderstanding from '@/components/quiz/CheckForUnderstanding'
import TrueOrFalseQuestionBlock from '@/components/quiz/TrueOrFalseQuestionBlock'
import NextSectionButton from '@/components/NextSectionButton'
// Assets

const Lesson2: FC = () => {
  const { currentSection } = useCourse()
  const sectionCount = 2

  return (
    <LessonBlock>
      <ContainerBlock width="prose">
        <h1>How to Configure an Import</h1>
      </ContainerBlock>
      <AnimatePresence mode="sync">
        {currentSection >= 0 && (
          <LessonSectionBlock id="lesson2section1" className="scroll-mt-28">
            <ContainerBlock width="prose">
              <p>
                From your Canvas dashboard, click into your course skeleton.
                This is the course that will receive the content from a previous
                course. (Click the pins in the labeled images below)
              </p>

              <p>
                This will land you on the course homepage. This course homepage
                is the fastest and simplest way to access the course import
                tool.
              </p>
            </ContainerBlock>

            <CheckForUnderstanding heading="Checkpoint">
              <TrueOrFalseQuestionBlock
                question={{
                  type: 'TrueOrFalse',
                  id: 'l1q1',
                  question:
                    'The correct import button to click is the "Import from Commons" button.',
                  answer: false,
                }}
              />
            </CheckForUnderstanding>
            {currentSection === 0 && <NextSectionButton contingent />}
          </LessonSectionBlock>
        )}
        {currentSection >= 1 && (
          <LessonSectionBlock id="lesson1section2">
            <ContainerBlock width="prose">
              <h2>An Alternate Method</h2>
              <p>
                If you're not on the homepage, and perhaps you're in the course
                settings, this is the other location from which you can access
                the course import tool.
              </p>
            </ContainerBlock>
          </LessonSectionBlock>
        )}
      </AnimatePresence>
      {currentSection === sectionCount - 1 && <NextLessonButton />}
    </LessonBlock>
  )
}

export default Lesson2
