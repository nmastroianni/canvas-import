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

function App(): JSX.Element {
  const { currentLesson, setCurrentLesson } = useCourse()

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
      <main className="min-h-screen scroll-smooth bg-slate-200 text-slate-950 dark:bg-slate-900 dark:text-slate-50">
        <AnimatePresence mode="wait">
          {currentLesson === 0 && <CourseOverview key={0} />}
          {currentLesson === 1 && <Lesson1 key={1} />}
          {currentLesson === 2 && <Lesson2 key={2} />}
          {currentLesson === 3 && <Lesson3 key={3} />}
          {currentLesson > 3 && (
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
