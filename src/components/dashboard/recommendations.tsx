import { getPersonalizedLessonRecommendations } from '@/ai/flows/personalized-lesson-recommendations';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Lightbulb, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Skeleton } from '../ui/skeleton';
import { Suspense } from 'react';

async function RecommendationContent() {
  const recommendations = await getPersonalizedLessonRecommendations({
    progressSummary:
      'User has spent 4 hours learning this week, completed 3 lessons on tenses, and scored an average of 88% on quizzes. They struggled slightly with "articles".',
    userGoals: 'Improve grammar for business communication.',
  });

  return (
    <div className="space-y-4">
      <div>
        <h4 className="font-semibold">Reasoning</h4>
        <p className="text-sm text-muted-foreground">{recommendations.reasoning}</p>
      </div>
      <div>
        <h4 className="mb-2 font-semibold">Recommended Lessons</h4>
        <ul className="space-y-2">
          {recommendations.recommendedLessons.map((lesson, index) => (
            <li key={index}>
              <Button variant="outline" size="sm" className="w-full justify-start" asChild>
                <Link href="/lessons">
                  <BookOpen className="w-4 h-4 mr-2" />
                  {lesson}
                </Link>
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function RecommendationsSkeleton() {
  return (
    <div className="space-y-4">
       <div>
        <h4 className="font-semibold">Reasoning</h4>
        <div className='space-y-2 mt-1'>
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>
      </div>
      <div>
        <h4 className="mb-2 font-semibold">Recommended Lessons</h4>
        <ul className="space-y-2">
          <li><Skeleton className="h-9 w-full" /></li>
          <li><Skeleton className="h-9 w-full" /></li>
        </ul>
      </div>
    </div>
  )
}

export function Recommendations() {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Lightbulb className="w-5 h-5 text-accent-foreground" />
          <span>For You</span>
        </CardTitle>
        <CardDescription>Personalized lessons to help you reach your goals.</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <Suspense fallback={<RecommendationsSkeleton />}>
          <RecommendationContent />
        </Suspense>
      </CardContent>
    </Card>
  );
}
