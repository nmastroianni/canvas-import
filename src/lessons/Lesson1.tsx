import ContainerBlock from '@/components/ContainerBlock'
import { useCourse } from '@/components/CourseProvider'
import LabeledImageBlock from '@/components/LabeledImageBlock'
import LessonBlock from '@/components/LessonBlock'
import LessonSectionBlock from '@/components/LessonSectionBlock'
import NextLessonButton from '@/components/NextLessonButton'
import { AnimatePresence } from 'motion/react'
import { FC } from 'react'
import { Hotspot } from '@/types/global'
import WhileInView from '@/components/WhileInView'
import CheckForUnderstanding from '@/components/quiz/CheckForUnderstanding'
import TrueOrFalseQuestionBlock from '@/components/quiz/TrueOrFalseQuestionBlock'
import NextSectionButton from '@/components/NextSectionButton'
// Assets
import dashboard from '@/assets/images/dashboard.jpg'
import homepageButtons from '@/assets/images/homepage-buttons.jpg'
import settingsButtons from '@/assets/images/settings-buttons.jpg'

const Lesson1: FC = () => {
  const { currentSection } = useCourse()
  const sectionCount = 2
  const dashboardHotspots: Hotspot[] = [
    {
      content: (
        <p>
          This is the Canvas dashboard. It currently shows two published
          courses. Your course will likely be found below this in the
          unpublished section.
        </p>
      ),
      left: '32%',
      top: '10%',
      size: 40,
      color: 'darkmagenta',
    },
    {
      content: <p>This is a course card. Clicking it will enter the course.</p>,
      left: '31%',
      top: '62%',
      color: 'darkmagenta',
    },
  ]
  const buttonHotspots: Array<Hotspot> = [
    {
      content: <p>Convenient set of buttons available only on the homepage</p>,
      left: '75%',
      top: '9%',
      color: 'rebeccapurple',
    },
    {
      content: <p>This is the correct import button to click. </p>,
      left: '75%',
      top: '24%',
      color: 'blue',
    },
    {
      content: (
        <p>
          Do not click this import button. It will not allow you to import your
          previous course content.
        </p>
      ),
      left: '75%',
      top: '35%',
      color: 'crimson',
    },
  ]
  return (
    <LessonBlock>
      <ContainerBlock width="prose">
        <h1>Where to Begin...</h1>
      </ContainerBlock>
      <AnimatePresence mode="sync">
        {currentSection >= 0 && (
          <LessonSectionBlock
            id="lesson1section1"
            className="scroll-mt-16"
            key={1}
          >
            <ContainerBlock width="prose">
              <p>
                From your Canvas dashboard, click into your course skeleton.
                This is the course that will receive the content from a previous
                course. (Click the pins in the labeled images below)
              </p>
              <LabeledImageBlock
                imageUrl={dashboard}
                imageAlt="Canvas dashboard showing two published courses of Student Success Seminar"
                hotspots={dashboardHotspots}
              />
              <p>
                This will land you on the course homepage. This course homepage
                is the fastest and simplest way to access the course import
                tool.
              </p>
            </ContainerBlock>
            <ContainerBlock width="prose">
              <WhileInView direction="down" margin="-30%">
                <LabeledImageBlock
                  imageUrl={homepageButtons}
                  imageAlt="Homepage buttons"
                  hotspots={buttonHotspots}
                />
              </WhileInView>
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
          <LessonSectionBlock id="lesson1section2" key={2}>
            <ContainerBlock width="prose">
              <h2>An Alternate Method</h2>
              <p>
                If you're not on the homepage, and perhaps you're in the course
                settings, this is the other location from which you can access
                the course import tool.
              </p>
              <WhileInView direction="down" margin="-30%">
                <LabeledImageBlock
                  imageUrl={settingsButtons}
                  imageAlt="Buttons available on the Canvas course settings page"
                  hotspots={[
                    {
                      content: (
                        <p>
                          This is the correct button to click to begin setting
                          up the import.
                        </p>
                      ),
                      left: '78%',
                      top: '56%',
                      color: 'rebeccapurple',
                    },
                  ]}
                />
              </WhileInView>
            </ContainerBlock>
          </LessonSectionBlock>
        )}
      </AnimatePresence>
      {currentSection === sectionCount - 1 && (
        <NextLessonButton text="Continue to the next step" />
      )}
    </LessonBlock>
  )
}

export default Lesson1
