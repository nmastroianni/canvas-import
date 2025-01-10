import ContainerBlock from '@/components/ContainerBlock'
import { useCourse } from '@/components/CourseProvider'
import LessonBlock from '@/components/LessonBlock'
import LessonSectionBlock from '@/components/LessonSectionBlock'
import ListBlock from '@/components/ListBlock'
import LabeledImageBlock from '@/components/LabeledImageBlock'
import ListItem from '@/components/ListItem'
import NextLessonButton from '@/components/NextLessonButton'
import { Unlink } from 'lucide-react'
import { AnimatePresence } from 'motion/react'
import courseSettings from '@/assets/images/course-settings.png'
import validateSettings from '@/assets/images/validate-links-button.png'
import startValidation from '@/assets/images/start-link-validation-button.png'
import validationReport from '@/assets/images/validation-report.png'
import CheckForUnderstanding from '@/components/quiz/CheckForUnderstanding'
import TrueOrFalseQuestionBlock from '@/components/quiz/TrueOrFalseQuestionBlock'
import NextSectionButton from '@/components/NextSectionButton'
import leaveStudentView from '@/assets/images/leave-student-view.png'

const Lesson3 = () => {
  const { currentSection } = useCourse()
  const sectionCount = 2
  return (
    <LessonBlock>
      <ContainerBlock width="prose">
        <h1>What to Do After the Import is Complete</h1>
      </ContainerBlock>
      <AnimatePresence mode="sync">
        {currentSection >= 0 && (
          <LessonSectionBlock id="lesson3section1" key={1}>
            <ContainerBlock width="prose">
              <p>
                Congratulations! You've completed your import. There are still a
                couple of things left to do. In this section, you will see how
                you can get Canvas to check your links for you.
              </p>
              <div className="flex flex-col items-center justify-center py-4 lg:py-8">
                <Unlink
                  size={120}
                  aria-description="An unlink or broken link icon"
                />
                <p className="text-base">
                  Broken links can ruin an experience.
                </p>
              </div>
              <p>
                We all know how annoying it is to click a link and get a 404
                (Not Found) page or some other error. We can lean on Canvas'
                ability to check our course and all of its links. It will
                produce a report for us to review. This report will help us
                remediate any outstanding issues.
              </p>
              <h2>How to Initiate Link Validation</h2>
              <p>
                Follow the steps below to begin the link validation process.
              </p>
              <ListBlock type="ordered">
                <ListItem>Open the course settings.</ListItem>
                <ListItem>
                  Click on Validate Links in Content (located at the bottom of
                  the buttons on the right side of the page).
                </ListItem>
                <ListItem>Click the Start Link Validation Button.</ListItem>
              </ListBlock>
            </ContainerBlock>
            <div className="mx-auto grid max-w-screen-lg justify-items-center gap-y-4 py-4 lg:grid-cols-2 lg:gap-y-8 lg:py-8">
              <img src={courseSettings} alt="course settings" />
              <img
                src={validateSettings}
                alt="validate links in content link"
              />
              <img
                src={startValidation}
                alt="course settings"
                className="lg:col-span-2"
              />
            </div>
            <ContainerBlock width="prose" className="pb-4 lg:pb-8">
              <h2>Interpreting the Validation Report</h2>
              <p>Click the flashing icons in the image below to learn more.</p>
            </ContainerBlock>
            <ContainerBlock width="lg">
              <LabeledImageBlock
                imageUrl={validationReport}
                imageAlt="Link validation report"
                hotspots={[
                  {
                    content: (
                      <p>
                        Icons to indicate content type. In this example you see
                        assignment, discussion, and page from top to bottom.
                      </p>
                    ),
                    left: '6%',
                    top: '10%',
                    color: 'blue',
                  },
                  {
                    content: (
                      <p>
                        Broken content is identified as either a link or an
                        image.
                      </p>
                    ),
                    left: '65%',
                    top: '30%',
                    color: 'blue',
                  },
                  {
                    content: (
                      <p>
                        Non-existent content means that the object is invalid
                        and should be replaced.
                      </p>
                    ),
                    left: '20%',
                    top: '57%',
                    color: 'blue',
                  },
                  {
                    content: (
                      <p>
                        Unreachable objects mean the image could not be
                        displayed.
                      </p>
                    ),
                    left: '6%',
                    top: '44%',
                    color: 'blue',
                  },
                ]}
              />
            </ContainerBlock>
            <CheckForUnderstanding heading="Checkpoint">
              <TrueOrFalseQuestionBlock
                question={{
                  id: 'l3q1',
                  type: 'TrueOrFalse',
                  question: 'The link validator will fix your links for you.',
                  answer: false,
                  incorrectFeedback: 'Sadly, it will not fix the links.',
                }}
              />
            </CheckForUnderstanding>
            {currentSection === 0 && <NextSectionButton contingent />}
          </LessonSectionBlock>
        )}
        {currentSection > 0 && (
          <LessonSectionBlock key={2} id="lesson3section2">
            <ContainerBlock width="prose">
              <h2>And Finally...</h2>
              <p>
                The last thing that should be done is to enter student view and
                navigate through your course. This will allow you to see your
                course as your students see it. I will also create a Test
                Student in your gradebook.
              </p>
              <img src={leaveStudentView} alt="leave student view button" />
            </ContainerBlock>
          </LessonSectionBlock>
        )}
      </AnimatePresence>
      {currentSection === sectionCount - 1 && (
        <NextLessonButton text="Continue to the final step" />
      )}
    </LessonBlock>
  )
}

export default Lesson3
