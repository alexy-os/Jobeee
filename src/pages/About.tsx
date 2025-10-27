import { Navigation } from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Lightbulb, Smile, AlertCircle, Coffee, Code } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-3xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">About Jobeee</h1>
          <p className="text-xl text-muted-foreground">
            A Completely Fictional Social Learning Network That Exists Primarily For Our Amusement
          </p>
        </div>

        {/* Main content */}
        <div className="space-y-8">
          {/* What is this? */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Smile className="h-5 w-5" />
                What On Earth Is This?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Jobeee is a social learning platform that exists in that peculiar space between "actually quite a good idea" and "definitely not a real company you should work for." Think of it as a simulation game, but instead of managing a virtual farm or building civilizations, you're helping baristas serve imaginary coffee and web developers navigate made-up code review nightmares.
              </p>
              <p>
                All the characters are entirely fictional. None of them exist. Well, not until you read about them, at which point they exist in your mind, which is honestly more real than most social media personalities.
              </p>
            </CardContent>
          </Card>

          {/* The Setup */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5" />
                The Setup (Or: Why Are We Doing This?)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                We've created two entirely fictional organizations because, apparently, one imaginary company wasn't ambitious enough:
              </p>
              <div className="space-y-3">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-amber-900">☕ Coffee Shop</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    "Downtown Coffee Shop" – where Alex Chen, Sara Martinez, and Mike Rodriguez pretend to run a very civilized establishment. They evaluate fictional candidates on their ability to handle complaints about tepid beverages and rush-hour pandemonium. Lisa Thompson, our equally fictional recruiter, watches it all unfold with professional detachment.
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-purple-900">🎨 Web Studio</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    "Creative Web Studio" – where Jordan Mitchell, Alexandra Kumar, and David Hernandez create beautiful designs and solid code that will never actually be deployed anywhere important. They assess candidates on design feedback, code reviews, and their capacity to remain civil during discussions about deadlines. Emma Richardson, our tech recruiter (also fictional), judges their choices.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* The Candidates */}
          <Card>
            <CardHeader>
              <CardTitle>The Candidates (Who Don't Actually Need Jobs)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                We've invented eight candidates across both industries. They are, quite literally, not real. They don't need employment. They don't have student loans. They simply exist to demonstrate what it might look like if people actually *did* things on social media instead of just complaining about them.
              </p>
              <p className="text-sm italic text-muted-foreground">
                In the spirit of complete transparency: if you meet Jamie Wilson at a café and they claim to be testing for a barista role, they're probably someone else entirely. Don't hire them based on this website.
              </p>
            </CardContent>
          </Card>

          {/* The Scenarios */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Coffee className="h-5 w-5" />
                Coffee Shop Scenarios
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <ul className="space-y-2 text-sm">
                <li>✓ <strong>Morning Coffee Order:</strong> A customer walks in. They want coffee. Revolutionary concept.</li>
                <li>✓ <strong>Coffee Too Cold:</strong> Plot twist: the customer is upset. Shocking, we know.</li>
                <li>✓ <strong>Multiple Orders During Busy Period:</strong> Chaos. But with better grammar.</li>
                <li>✓ <strong>Incorrect Change Given:</strong> A mathematical puzzle disguised as customer service.</li>
                <li>✓ <strong>Custom Drink Preparation:</strong> "Make me something that defies the laws of chemistry."</li>
              </ul>
            </CardContent>
          </Card>

          {/* Web Studio Scenarios */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5" />
                Web Studio Scenarios
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <ul className="space-y-2 text-sm">
                <li>✓ <strong>Design Feedback Round:</strong> "The colors are nice, but make them different. Specifically: yes."</li>
                <li>✓ <strong>Code Review:</strong> Where experienced developers lovingly explain why your solution is theoretically sound but practically catastrophic.</li>
                <li>✓ <strong>Client Meeting:</strong> "We'd like the MVP by next week. Please disregard the laws of physics."</li>
                <li>✓ <strong>Cross-functional Coordination:</strong> Designers and developers having a polite disagreement about what "possible" means.</li>
                <li>✓ <strong>Deadline Pressure:</strong> When suddenly everything becomes "critical" and you question every life decision that led you here.</li>
              </ul>
            </CardContent>
          </Card>

          {/* The Data */}
          <Card>
            <CardHeader>
              <CardTitle>About The Data</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3 p-3 bg-secondary/50 rounded-lg">
                <AlertCircle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm">
                  <strong>Important Notice:</strong> Everything here is fictional. Every person, every company, every assessment thread, every cup of coffee – entirely made up. This is a prototype/demo application. If you're looking for actual job training, actual recruitment, or actual coffee, you've come to the wrong place.
                </p>
              </div>
              <p>
                The data is stored in memory. It will reset when you refresh the page. The candidates will forget they ever met you. The coffee will cease to exist. It's rather beautiful in its own way – a brief simulation of professional interaction, soon to be lost to the void of browser cache.
              </p>
            </CardContent>
          </Card>

          {/* Why We Built This */}
          <Card>
            <CardHeader>
              <CardTitle>Why We Built This</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Because sometimes the best way to learn is through play. Because fictional data means no one's feelings get hurt. Because we wanted to demonstrate what a social learning platform *could* look like if it:
              </p>
              <ul className="space-y-2 text-sm">
                <li>• Actually had real-world scenarios instead of multiple choice questions</li>
                <li>• Let you see feedback from multiple perspectives</li>
                <li>• Didn't pretend that hiring happens here (it doesn't)</li>
                <li>• Supported multiple industries and role types</li>
                <li>• Existed primarily to amuse its creators</li>
              </ul>
            </CardContent>
          </Card>

          {/* The Technologies */}
          <Card>
            <CardHeader>
              <CardTitle>Built With</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {[
                  'React 18',
                  'TypeScript',
                  'Tailwind CSS',
                  'Shadcn/ui',
                  'Vite',
                  'React Router',
                  'Lucide Icons',
                  'Pure Imagination'
                ].map(tech => (
                  <Badge key={tech} variant="secondary">{tech}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Disclaimer */}
          <Card className="bg-blue-50/50 dark:bg-blue-950/20 border-blue-200">
            <CardHeader>
              <CardTitle className="text-base">Final Disclaimer</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-2">
              <p>
                This is not a real recruitment platform. Do not send us your resume. We cannot hire you. We are not a company. We are a fiction. A beautiful, fully-typed fiction, but a fiction nonetheless.
              </p>
              <p>
                If you're genuinely interested in social learning platforms, skill assessments, or how to properly serve a cappuccino, we recommend seeking out the real thing. But while you're here, we hope you've at least had a bit of fun.
              </p>
              <p className="pt-2">
                — The Jobeee Team (and by "team," we mean whoever wrote this about themselves in third person at 2 AM)
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>Made with ☕, 🎨, and a complete disregard for traditional business models.</p>
        </div>
      </main>
    </div>
  );
};

export default About;
