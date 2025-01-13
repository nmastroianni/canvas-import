import { FC } from 'react'
import { useCourse } from './CourseProvider'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'

interface ReturnToOverviewButtonProps {
  text?: string
  className?: string
  variant?:
    | 'default'
    | 'destructive'
    | 'ghost'
    | 'link'
    | 'outline'
    | 'secondary'
}

const ReturnToOverviewButton: FC<ReturnToOverviewButtonProps> = ({
  text = 'return to course overview ',
  className,
  variant = 'default',
}) => {
  const { setCurrentLesson, setCurrentSection } = useCourse()
  return (
    <Button
      variant={variant}
      onClick={() => {
        setCurrentLesson(0)
        setCurrentSection(0)
      }}
      className={cn('capitalize', className)}
    >
      {text}
    </Button>
  )
}

export default ReturnToOverviewButton
