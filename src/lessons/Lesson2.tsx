import ContainerBlock from '@/components/ContainerBlock'
import { useCourse } from '@/components/CourseProvider'
import LessonBlock from '@/components/LessonBlock'
import LessonSectionBlock from '@/components/LessonSectionBlock'
import NextLessonButton from '@/components/NextLessonButton'
import { AnimatePresence } from 'motion/react'
import { FC } from 'react'
import CheckForUnderstanding from '@/components/quiz/CheckForUnderstanding'
import NextSectionButton from '@/components/NextSectionButton'
import TextAsideBlock from '@/components/TextAsideBlock'
import MultipleChoiceQuestionBlock from '@/components/quiz/MultipleChoiceQuestionBlock'
import BlockQuoteBlock from '@/components/BlockQuoteBlock'
import WhileInView from '@/components/WhileInView'
import LabeledImageBlock from '@/components/LabeledImageBlock'
import CallOutBlock from '@/components/CallOutBlock'
// Assets
import importMenu from '@/assets/images/import-menu.png'
import copyCanvasCourse from '@/assets/images/copy-canvas-course.png'
import courseSearch from '@/assets/images/search-for-course-import.png'
import beforeSearch from '@/assets/images/before-search-for-course.png'
import TrueOrFalseQuestionBlock from '@/components/quiz/TrueOrFalseQuestionBlock'
import selectContent from '@/assets/images/content-selection.png'
import importOptions from '@/assets/images/import-options.png'
import importButton from '@/assets/images/import-button.png'
import selectTree from '@/assets/images/select-content-tree.png'
import MultipleSelectQuestionBlock from '@/components/quiz/MultipleSelectQuestionBlock'

const Lesson2: FC = () => {
  const { currentSection } = useCourse()
  const sectionCount = 5

  return (
    <LessonBlock>
      <ContainerBlock width="prose">
        <h1>How to Configure an Import</h1>
      </ContainerBlock>
      <AnimatePresence mode="sync">
        {currentSection >= 0 && (
          <LessonSectionBlock
            key={1}
            id="lesson2section1"
            className="scroll-mt-64"
          >
            <ContainerBlock width="lg">
              <TextAsideBlock
                imageUrl={importMenu}
                altText="The content type menu of the import content page"
              >
                <p>
                  Once you are on the Import Content page, you will be asked to
                  select a content type. There is a dropdown menu that lets you
                  select one of several different types. (Click the image to
                  zoom in.)
                </p>
              </TextAsideBlock>
              <TextAsideBlock
                imageUrl={copyCanvasCourse}
                altText='Select "Copy a Canvas Course" from the select menu'
              >
                <p>
                  As it is unlikely that you will be importing any other type of
                  content, this training will show you how to import content
                  from an existing course within our Canvas LMS. Be sure to
                  select the "Copy a Canvas Course" option from the select menu.
                </p>
              </TextAsideBlock>
            </ContainerBlock>
            <CheckForUnderstanding heading="Checkpoint">
              <MultipleChoiceQuestionBlock
                question={{
                  type: 'MultipleChoice',
                  id: 'l2q1',
                  question:
                    'Which is the most commonly (likely) selected import type?',
                  options: [
                    'Unzip .zip file into folder',
                    'Canvas Course Export Package',
                    'Copy an Canvas Course',
                    'Moodle 1.9/2.x',
                  ],
                  answer: 2,
                }}
              />
            </CheckForUnderstanding>
            {currentSection === 0 && <NextSectionButton contingent />}
          </LessonSectionBlock>
        )}
        {currentSection >= 1 && (
          <LessonSectionBlock
            id="lesson2section2"
            className="scroll-mt-16"
            key={2}
          >
            <ContainerBlock width="prose">
              <h2>Search for Your Course</h2>
              <TextAsideBlock
                imageUrl={beforeSearch}
                altText="Search for a course form field"
              >
                <p>
                  Once you select Copy a Canvas Course, you will see a new field
                  that allows you to search for a course within Canvas. The most
                  effective way to find the exact course from which you wish to
                  import content is to enter the full section information. For
                  example, 2025SP-STSC-150-E01.
                </p>
                <p>
                  <strong>
                    If the course has concluded, please ensure the checkbox for
                    "Include completed courses" is checked.
                  </strong>{' '}
                  This will allow Canvas to return results that are completed
                  courses.
                </p>
              </TextAsideBlock>
              <WhileInView>
                <LabeledImageBlock
                  imageUrl={courseSearch}
                  imageAlt="Search for a course form field"
                  hotspots={[
                    {
                      content: (
                        <p>Enter the full course section information here.</p>
                      ),
                      left: '55%',
                      top: '15%',
                      color: 'blue',
                    },
                    {
                      content: <p>Click to select the "source" course.</p>,
                      left: '35%',
                      top: '40%',
                      color: 'blue',
                    },
                  ]}
                />
              </WhileInView>
              <WhileInView direction="up">
                <BlockQuoteBlock>
                  The most effective way to find the exact course from which you
                  wish to import content is to enter the full section
                  information.
                </BlockQuoteBlock>
              </WhileInView>
            </ContainerBlock>
            <CheckForUnderstanding>
              <TrueOrFalseQuestionBlock
                question={{
                  id: 'l2q2',
                  type: 'TrueOrFalse',
                  question:
                    'In order to find past courses to import, you need to check the "Include completed courses" checkbox.',
                  answer: true,
                }}
              />
            </CheckForUnderstanding>
            {currentSection === 1 && <NextSectionButton contingent />}
          </LessonSectionBlock>
        )}
        {currentSection >= 2 && (
          <LessonSectionBlock key={3} id="lesson2section3">
            <ContainerBlock width="prose">
              <h2>Which Content to Import</h2>
            </ContainerBlock>
            <ContainerBlock width="lg">
              <TextAsideBlock
                imageUrl={selectContent}
                altText="Form radio buttons for what content should be imported"
              >
                <p>
                  Once you have selected the your "source" course, you will have
                  the opportunity to select either to import "All content" or
                  "Select specific content."
                </p>
              </TextAsideBlock>
            </ContainerBlock>
            <WhileInView margin="-30%">
              <LabeledImageBlock
                imageUrl={selectContent}
                imageAlt="two form radio buttons saying All content or Select specific content"
                hotspots={[
                  {
                    content: (
                      <p>
                        This is the radio button you should select to ensure you
                        maintain a clean course moving forward.
                      </p>
                    ),
                    left: '14%',
                    top: '60%',
                    color: 'firebrick',
                  },
                ]}
              />
            </WhileInView>
            <ContainerBlock width="prose">
              <WhileInView>
                <p>
                  Select specific content is the proper option to select here.
                  The reason for this is that when you import all content, you
                  are likely to bring over unwanted items.
                </p>
                <p>
                  Some of these unwanted items include settings, grade schemes,
                  files, and outdated resources. By using the select specific
                  content, you will be intentionally selecting the content you
                  want to include in your upcoming course.
                </p>
                <p>
                  With that said, let's check your understanding before we move
                  on to exactly how we select specific content.
                </p>
              </WhileInView>
            </ContainerBlock>
            <CheckForUnderstanding>
              <TrueOrFalseQuestionBlock
                question={{
                  id: 'l2q3',
                  type: 'TrueOrFalse',
                  question:
                    'Selecting to import "All content" means that the course settings in your upcoming course will be overridden by the old course.',
                  answer: true,
                }}
              />
            </CheckForUnderstanding>
            {currentSection === 2 && <NextSectionButton contingent />}
          </LessonSectionBlock>
        )}
        {currentSection >= 3 && (
          <LessonSectionBlock key={4} id="lesson2section4">
            <ContainerBlock width="prose">
              <h2>Choose Your Options & Click Import</h2>
              <p>
                Before finally clicking the import button, you have two
                checkboxes to possibly check. As the LMS team provides you with
                a Canvas skeleton with the proper settings and course dates, you
                are encouraged not to check the "Adjust events and due dates"
                option. You may optionally select "Import existing quizzes as
                New Quizzes" if you have yet to convert them. Once completed,
                you would no longer need this option.
              </p>
              <div className="flex justify-center">
                <img
                  src={importOptions}
                  alt="import options checkboxes"
                  className="rounded-lg"
                />
              </div>
              <CallOutBlock>
                <p>
                  Importing the same course content more than once will
                  overwrite any existing content in the course.
                </p>
              </CallOutBlock>
            </ContainerBlock>
            <ContainerBlock width="lg" className="py-4 lg:py-8">
              <LabeledImageBlock
                imageUrl={importButton}
                imageAlt=""
                hotspots={[
                  {
                    content: <p>Click this button to begin the next step.</p>,
                    left: '36%',
                    top: '10%',
                    color: 'aqua',
                  },
                ]}
              />
            </ContainerBlock>
            <CheckForUnderstanding>
              <TrueOrFalseQuestionBlock
                question={{
                  id: 'l1q4',
                  type: 'TrueOrFalse',
                  question:
                    'The course skeleton I have received will already have the proper start and end dates for the course.',
                  answer: true,
                }}
              />
            </CheckForUnderstanding>
            {currentSection === 3 && <NextSectionButton contingent />}
          </LessonSectionBlock>
        )}
        {currentSection >= 4 && (
          <LessonSectionBlock id="lesson2section5" key={5}>
            <ContainerBlock width="prose">
              <h2>Select the Content</h2>
              <p>
                In the image below, you can see the select content interface.
                Anything that you check will be imported. Click on the flashing
                icons to learn more about what and how to select. With this
                granular level of control, you will be able to avoid copying
                content that is no longer applicable to your students.
              </p>
            </ContainerBlock>
            <WhileInView direction="up" margin="-40%">
              <ContainerBlock width="lg" className="py-4 lg:py-8">
                <LabeledImageBlock
                  imageUrl={selectTree}
                  imageAlt="The user interface for selecting specific course content to be imported"
                  hotspots={[
                    {
                      content: (
                        <p>
                          It is not recommended to select the Course Settings
                          checkbox.
                        </p>
                      ),
                      top: '8%',
                      left: '4%',
                      color: 'firebrick',
                    },
                    {
                      content: (
                        <p>
                          Simple Syllabus has replaced the need to use this
                          option. Leave this unchecked.
                        </p>
                      ),
                      top: '16%',
                      left: '19%',
                      color: 'firebrick',
                    },
                    {
                      content: (
                        <p>
                          Clicking the arrows will open up the available options
                          within categories and folders.
                        </p>
                      ),
                      top: '39%',
                      left: '5%',
                      color: 'firebrick',
                    },
                    {
                      content: (
                        <p>
                          Once you have at least one checkbox selected, this
                          button will be enabled. Click this button. Once
                          clicked, your import will begin. A status bar will
                          show the progress of the job.
                        </p>
                      ),
                      top: '86%',
                      left: '82%',
                      color: 'firebrick',
                    },
                  ]}
                />
              </ContainerBlock>
            </WhileInView>
            <CheckForUnderstanding heading="Checkpoint">
              <MultipleSelectQuestionBlock
                question={{
                  id: 'l2q5',
                  type: 'MultipleSelect',
                  question: 'Select the true statement(s) below',
                  options: [
                    'Do not select Course Settings',
                    'Do not select Syllabus Body',
                    'Select only the content needed',
                    'Select everything in a category without examining its contents.',
                  ],
                  answer: [0, 1, 2],
                }}
              />
            </CheckForUnderstanding>
          </LessonSectionBlock>
        )}
      </AnimatePresence>
      {currentSection === sectionCount - 1 && (
        <NextLessonButton contingent text="Continue to the next step" />
      )}
    </LessonBlock>
  )
}

export default Lesson2
