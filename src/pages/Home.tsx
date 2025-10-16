import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Trophy, Target, TrendingUp, Zap, ArrowRight } from "lucide-react";
import LetterGlitch from "@/components/LetterGlitch";
import PixelTransition from "@/components/ui/PixelTransition";
import VariableProximity from "@/components/ui/VariableProximity";
import ScrambledText from "@/components/ui/ScrambledText";
import CountUp from "@/components/ui/CountUp";
import { Link } from "react-router-dom";
import { useRef } from "react";

const Home = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const upcomingContests = [
    {
      id: 1,
      name: "Codeforces Round #925 (Div. 2)",
      platform: "Codeforces",
      startTime: "2025-10-16T14:35:00",
      duration: "2 hours",
      color: "bg-blue-500",
    },
    {
      id: 2,
      name: "AtCoder Beginner Contest 328",
      platform: "AtCoder",
      startTime: "2025-10-17T17:00:00",
      duration: "1h 40m",
      color: "bg-gray-500",
    },
    {
      id: 3,
      name: "CodeChef Starters 108",
      platform: "CodeChef",
      startTime: "2025-10-18T20:00:00",
      duration: "3 hours",
      color: "bg-amber-600",
    },
  ];

  const topPerformers = [
    { rank: 1, name: "Arjun Kumar", rating: 2156, problems: 847 },
    { rank: 2, name: "Priya Sharma", rating: 2034, problems: 723 },
    { rank: 3, name: "Rahul Verma", rating: 1987, problems: 691 },
  ];

  const announcements = [
    {
      id: 1,
      title: "Workshop: Dynamic Programming Mastery",
      date: "Tomorrow, 4:00 PM",
      priority: true,
    },
    {
      id: 2,
      title: "Internal Contest Registration Open",
      date: "Closes in 2 days",
      priority: false,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="absolute inset-0 opacity-25 pointer-events-none">
          <LetterGlitch
            glitchSpeed={50}
            centerVignette={true}
            outerVignette={false}
            smooth={true}
            glitchColors={["#2d0a4e", "#6a0dad", "#b07df0", "#ff7a00", "#ffb347"]}
          />
        </div>
        <div className="container relative" ref={containerRef}>
          <div className="mx-auto max-w-3xl text-center">
            <PixelTransition
              style={{ backgroundColor: "transparent", border: "none", boxShadow: "none" }}
              firstContent={
                <img
                  src="/assets/cp.png"
                  alt="default pixel transition content, a cat!"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              }
              secondContent={
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "grid",
                    placeItems: "center",
                    backgroundColor: "transparent",
                  }}
                >
                  <img
                    src="/assets/vedam.ico"
                    alt="Vedam School of Technology logo"
                    style={{ width: "296px", height: "296px", backgroundColor: "transparent" }}
                  />
                  {/* <p style={{ fontWeight: 900, fontSize: "3rem", color: "#ffffff", marginTop: "0.75rem" }}>
                    Meow!
                  </p> */}
                </div>
              }
              gridSize={35}
              pixelColor="#eb7005"
              animationStepDuration={0.3}
              className="mx-auto custom-pixel-card -mt-6"
            />
            <h1 className="mb-6 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
              <VariableProximity
                label="Competitive Programming Club"
                fromFontVariationSettings="'wght' 400, 'wdth' 100"
                toFontVariationSettings="'wght' 900, 'wdth' 125"
                containerRef={containerRef}
                radius={150}
                falloff="exponential"
                className="bg-gradient-hero bg-clip-text text-transparent"
              />
            </h1>
            <ScrambledText
              radius={120}
              duration={1.5}
              speed={0.3}
              scrambleChars="!@#$%^&*()_+-=[]{}|;:,.<>?"
              className="mb-8 text-lg text-muted-foreground sm:text-xl max-w-none m-0 font-sans"
            >
              Master algorithms, compete globally, and track your progress across Codeforces, CodeChef, and AtCoder. Join our community of problem solvers.
            </ScrambledText>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="gap-2">
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                View Leaderboard
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Active Members", value: "250+", numericValue: 250, icon: Trophy },
              { label: "Problems Solved", value: "12.5K+", numericValue: 12500, icon: Target },
              { label: "Contests Participated", value: "480+", numericValue: 480, icon: Calendar },
              { label: "Avg Rating Gain", value: "+340", numericValue: 340, icon: TrendingUp },
            ].map((stat) => (
              <Card key={stat.label} className="border-border/50 shadow-card">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <stat.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold">
                        {stat.label === "Avg Rating Gain" && "+"}
                        <CountUp
                          to={stat.numericValue}
                          duration={2.5}
                          delay={0.5}
                          separator={stat.numericValue >= 1000 ? "," : ""}
                        />
                        {stat.label === "Active Members" && "+"}
                        {stat.label === "Problems Solved" && "K+"}
                        {stat.label === "Contests Participated" && "+"}
                      </div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Upcoming Contests */}
          <Card className="lg:col-span-2 shadow-card">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    Upcoming Contests
                  </CardTitle>
                  <CardDescription>Next competitive programming contests</CardDescription>
                </div>
                <Button variant="ghost" size="sm" asChild>
                  <Link to="/contests">View All</Link>
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingContests.map((contest) => (
                <div
                  key={contest.id}
                  className="flex items-center justify-between rounded-lg border border-border/50 p-4 transition-all hover:border-primary/50 hover:shadow-glow"
                >
                  <div className="flex items-center gap-4">
                    <div className={`h-2 w-2 rounded-full ${contest.color}`}></div>
                    <div>
                      <div className="font-semibold">{contest.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {new Date(contest.startTime).toLocaleString()} · {contest.duration}
                      </div>
                    </div>
                  </div>
                  <Badge variant="outline">{contest.platform}</Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Announcements */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-accent" />
                Announcements
              </CardTitle>
              <CardDescription>Latest updates</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {announcements.map((announcement) => (
                <div
                  key={announcement.id}
                  className="rounded-lg border border-border/50 p-3 transition-colors hover:bg-muted/50"
                >
                  {announcement.priority && (
                    <Badge className="mb-2 bg-accent/10 text-accent hover:bg-accent/20">
                      Priority
                    </Badge>
                  )}
                  <div className="font-medium">{announcement.title}</div>
                  <div className="text-sm text-muted-foreground">{announcement.date}</div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Top Performers */}
        <Card className="mt-8 shadow-card">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-accent" />
                  Top Performers This Month
                </CardTitle>
                <CardDescription>Leading competitive programmers in our club</CardDescription>
              </div>
              <Button variant="ghost" size="sm" asChild>
                <Link to="/leaderboard">Full Leaderboard</Link>
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topPerformers.map((performer) => (
                <div
                  key={performer.rank}
                  className="flex items-center justify-between rounded-lg border border-border/50 p-4"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-hero font-bold text-primary-foreground">
                      {performer.rank}
                    </div>
                    <div>
                      <div className="font-semibold">{performer.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {performer.problems} problems solved
                      </div>
                    </div>
                  </div>
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
                    {performer.rating}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Home;
