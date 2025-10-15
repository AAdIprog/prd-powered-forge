import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Target, ExternalLink, Flame, TrendingUp, Award, Calendar } from "lucide-react";

const ProblemOfDay = () => {
  const todaysProblem = {
    name: "Maximum Subarray Sum",
    difficulty: "Medium",
    platform: "Codeforces",
    rating: 1400,
    tags: ["Dynamic Programming", "Array", "Greedy"],
    solveRate: 45,
    avgTime: "25 min",
    link: "https://codeforces.com/problem",
    description:
      "Given an array of integers, find the contiguous subarray with the largest sum. The array may contain both positive and negative numbers.",
  };

  const streakData = {
    current: 23,
    longest: 47,
    thisMonth: 19,
  };

  const topStreakers = [
    { name: "Arjun Kumar", streak: 47, avatar: "AK" },
    { name: "Priya Sharma", streak: 38, avatar: "PS" },
    { name: "Rahul Verma", streak: 34, avatar: "RV" },
    { name: "Ananya Patel", streak: 31, avatar: "AP" },
    { name: "Vikram Singh", streak: 28, avatar: "VS" },
  ];

  const achievements = [
    { name: "Week Warrior", desc: "7-day streak", unlocked: true, icon: "🔥" },
    { name: "Month Master", desc: "30-day streak", unlocked: false, icon: "⭐" },
    { name: "Century Club", desc: "100-day streak", unlocked: false, icon: "💯" },
    { name: "Consistency King", desc: "365-day streak", unlocked: false, icon: "👑" },
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case "easy":
        return "bg-success/10 text-success hover:bg-success/20";
      case "medium":
        return "bg-accent/10 text-accent hover:bg-accent/20";
      case "hard":
        return "bg-destructive/10 text-destructive hover:bg-destructive/20";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-hero">
              <Target className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">Problem of the Day</h1>
              <p className="text-muted-foreground">
                {new Date().toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Problem Card */}
          <Card className="lg:col-span-2 shadow-elevated border-primary/20">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline">{todaysProblem.platform}</Badge>
                    <Badge className={getDifficultyColor(todaysProblem.difficulty)}>
                      {todaysProblem.difficulty}
                    </Badge>
                    <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
                      {todaysProblem.rating}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl">{todaysProblem.name}</CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Problem Description */}
              <div>
                <h3 className="font-semibold mb-2">Problem Statement</h3>
                <p className="text-muted-foreground">{todaysProblem.description}</p>
              </div>

              {/* Tags */}
              <div>
                <h3 className="font-semibold mb-2">Topics</h3>
                <div className="flex flex-wrap gap-2">
                  {todaysProblem.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border/50">
                <div>
                  <div className="text-sm text-muted-foreground">Success Rate</div>
                  <div className="text-2xl font-bold text-success">
                    {todaysProblem.solveRate}%
                  </div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Avg. Solve Time</div>
                  <div className="text-2xl font-bold">{todaysProblem.avgTime}</div>
                </div>
              </div>

              {/* Action Button */}
              <Button className="w-full gap-2" size="lg" asChild>
                <a href={todaysProblem.link} target="_blank" rel="noopener noreferrer">
                  Solve on {todaysProblem.platform}
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Streak Card */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Flame className="h-5 w-5 text-accent" />
                  Your Streak
                </CardTitle>
                <CardDescription>Keep the momentum going!</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-5xl font-bold text-accent mb-2">
                    {streakData.current}
                  </div>
                  <div className="text-sm text-muted-foreground">Current Streak</div>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border/50">
                  <div className="text-center">
                    <div className="text-xl font-bold">{streakData.longest}</div>
                    <div className="text-sm text-muted-foreground">Longest</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold">{streakData.thisMonth}</div>
                    <div className="text-sm text-muted-foreground">This Month</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  Achievements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {achievements.map((achievement) => (
                  <div
                    key={achievement.name}
                    className={`flex items-center gap-3 rounded-lg border p-3 ${
                      achievement.unlocked
                        ? "border-primary/30 bg-primary/5"
                        : "border-border/50 opacity-60"
                    }`}
                  >
                    <div className="text-2xl">{achievement.icon}</div>
                    <div>
                      <div className="font-semibold">{achievement.name}</div>
                      <div className="text-sm text-muted-foreground">{achievement.desc}</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Top Streakers */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-accent" />
                  Top Streakers
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {topStreakers.map((user, index) => (
                  <div
                    key={user.name}
                    className="flex items-center justify-between rounded-lg border border-border/50 p-2"
                  >
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-xs font-bold">
                        {user.avatar}
                      </div>
                      <span className="text-sm font-medium">{user.name}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Flame className="h-4 w-4 text-accent" />
                      <span className="font-bold">{user.streak}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemOfDay;
