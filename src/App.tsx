import { AnimatePresence } from 'motion/react'
import { useCourse } from './components/CourseProvider'
import CourseOverview from './lessons/CourseOverview'
import { JSX } from 'react'
import Container from './components/ContainerBlock'
import { Button } from './components/ui/button'
import { Lesson } from './types/global'
import { ThemeToggle } from './components/ThemeToggle'
import Headroom from 'react-headroom'
import NavigationMenu from './components/NavigationMenu'
import Lesson1 from './lessons/Lesson1'
import Lesson2 from './lessons/Lesson2'
import Lesson3 from './lessons/Lesson3'
import AssessmentBlock from './components/quiz/AssessmentBlock'
import ContainerBlock from './components/ContainerBlock'
import ReturnToOverviewButton from './components/ReturnToOverviewButton'

function App(): JSX.Element {
  const { coursePassed, currentLesson, setCurrentLesson } = useCourse()

  const lessons: Array<Lesson> = [
    {
      id: 1,
      title: 'Where to Begin',
    },
    {
      id: 2,
      title: 'How to Configure an Import',
    },
    {
      id: 3,
      title: 'What to Do After the Import is Complete',
    },
    {
      id: 4,
      title: 'Final Acknowledgement',
    },
  ]

  return (
    <div className="bg-slate-200 dark:bg-slate-900">
      <Headroom style={{ zIndex: 20 }}>
        <header className="bg-slate-200/95 backdrop-blur dark:bg-slate-900/95">
          <div className="mx-auto flex max-w-screen-lg justify-between px-8 py-4 lg:px-16">
            <NavigationMenu lessons={lessons} />

            <ThemeToggle />
          </div>
        </header>
      </Headroom>
      <main className="min-h-screen scroll-smooth bg-slate-200 px-3 text-slate-950 dark:bg-slate-900 dark:text-slate-50">
        <AnimatePresence mode="wait">
          {currentLesson === 0 && <CourseOverview key={0} />}
          {currentLesson === 1 && <Lesson1 key={1} />}
          {currentLesson === 2 && <Lesson2 key={2} />}
          {currentLesson === 3 && <Lesson3 key={3} />}
          {currentLesson === 4 && (
            <>
              {!coursePassed && (
                <AssessmentBlock
                  passingScore={100}
                  questions={[
                    {
                      id: 'q1',
                      type: 'MultipleChoice',
                      question:
                        'I acknowledge that I am proficient in importing course content following the steps shown in this training.',
                      options: ['Yes', 'No'],
                      answer: 0,
                    },
                  ]}
                >
                  <p>
                    Thank you for completing this training. Please reach out to
                    the faculty development team if you have any further
                    questions or have feedback that could improve this course.
                  </p>
                </AssessmentBlock>
              )}
              {coursePassed && (
                <ContainerBlock width="prose" className="py-8 lg:py-16">
                  <p>
                    Thank you for completing this training. Please reach out to
                    the faculty development team if you have any further
                    questions or have feedback that could improve this course.
                  </p>
                  <ReturnToOverviewButton />
                </ContainerBlock>
              )}
            </>
          )}
          {currentLesson > 4 && (
            <Container width="prose">
              <p>
                Oops. We can't seem to find the next lesson. Please let someone
                know you've found a bug.
              </p>
              <Button
                onClick={() => {
                  setCurrentLesson(currentLesson - 1)
                  localStorage.setItem('lessonProgress', `${currentLesson - 1}`)
                }}
              >
                Go Back
              </Button>
            </Container>
          )}
        </AnimatePresence>
      </main>
    </div>
  )
}

export default App
