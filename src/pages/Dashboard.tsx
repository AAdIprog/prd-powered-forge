import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Trophy, Target, TrendingUp, Calendar, CheckCircle2, XCircle, Clock } from "lucide-react";

const Dashboard = () => {
  const userStats = {
    name: "Arjun Kumar",
    codeforcesRating: 1547,
    codechefRating: 1834,
    atcoderRating: 1203,
    totalProblems: 847,
    currentStreak: 23,
    longestStreak: 47,
  };

  const platforms = [
    { name: "Codeforces", rating: 1547, rank: "Specialist", color: "bg-blue-500", problems: 423 },
    { name: "CodeChef", rating: 1834, rank: "4★", color: "bg-amber-600", problems: 298 },
    { name: "AtCoder", rating: 1203, rank: "Green", color: "bg-gray-500", problems: 126 },
  ];

  const recentSubmissions = [
    { problem: "Two Sum", verdict: "Accepted", platform: "Codeforces", time: "2h ago", color: "text-success" },
    { problem: "Binary Search", verdict: "Wrong Answer", platform: "CodeChef", time: "5h ago", color: "text-destructive" },
    { problem: "DFS Traversal", verdict: "Time Limit", platform: "AtCoder", time: "1d ago", color: "text-muted-foreground" },
    { problem: "DP Problem", verdict: "Accepted", platform: "Codeforces", time: "1d ago", color: "text-success" },
    { problem: "Greedy Algo", verdict: "Accepted", platform: "CodeChef", time: "2d ago", color: "text-success" },
  ];

  const topicProgress = [
    { topic: "Dynamic Programming", solved: 87, total: 120, progress: 72 },
    { topic: "Graph Theory", solved: 65, total: 100, progress: 65 },
    { topic: "Greedy Algorithms", solved: 42, total: 80, progress: 52 },
    { topic: "Binary Search", solved: 38, total: 60, progress: 63 },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container">
        <div className="mb-8">
          <h1 className="mb-2 text-4xl font-bold">My Dashboard</h1>
          <p className="text-muted-foreground">Track your competitive programming progress</p>
        </div>

        {/* Overview Stats */}
        <div className="mb-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="shadow-card">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold">{userStats.totalProblems}</div>
                  <div className="text-sm text-muted-foreground">Problems Solved</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                  <TrendingUp className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <div className="text-2xl font-bold">{userStats.currentStreak}</div>
                  <div className="text-sm text-muted-foreground">Day Streak</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-success/10">
                  <Trophy className="h-6 w-6 text-success" />
                </div>
                <div>
                  <div className="text-2xl font-bold">{userStats.codeforcesRating}</div>
                  <div className="text-sm text-muted-foreground">CF Rating</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold">{userStats.longestStreak}</div>
                  <div className="text-sm text-muted-foreground">Longest Streak</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Platform Stats */}
          <Card className="lg:col-span-2 shadow-card">
            <CardHeader>
              <CardTitle>Platform Statistics</CardTitle>
              <CardDescription>Your ratings across different platforms</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {platforms.map((platform) => (
                <div key={platform.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`h-3 w-3 rounded-full ${platform.color}`}></div>
                      <span className="font-semibold">{platform.name}</span>
                      <Badge variant="outline">{platform.rank}</Badge>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-muted-foreground">
                        {platform.problems} problems
                      </span>
                      <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
                        {platform.rating}
                      </Badge>
                    </div>
                  </div>
                  <Progress value={(platform.rating / 3000) * 100} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Recent Submissions</CardTitle>
              <CardDescription>Your latest attempts</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {recentSubmissions.map((submission, index) => (
                <div
                  key={index}
                  className="flex items-start justify-between rounded-lg border border-border/50 p-3"
                >
                  <div className="flex-1">
                    <div className="font-medium">{submission.problem}</div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>{submission.platform}</span>
                      <span>·</span>
                      <span>{submission.time}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    {submission.verdict === "Accepted" ? (
                      <CheckCircle2 className={`h-4 w-4 ${submission.color}`} />
                    ) : submission.verdict === "Wrong Answer" ? (
                      <XCircle className={`h-4 w-4 ${submission.color}`} />
                    ) : (
                      <Clock className={`h-4 w-4 ${submission.color}`} />
                    )}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Topic Progress */}
        <Card className="mt-8 shadow-card">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Topic Progress</CardTitle>
                <CardDescription>Your mastery across different topics</CardDescription>
              </div>
              <Button variant="outline" size="sm">
                View All Topics
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2">
              {topicProgress.map((topic) => (
                <div key={topic.topic} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">{topic.topic}</span>
                    <span className="text-sm text-muted-foreground">
                      {topic.solved}/{topic.total}
                    </span>
                  </div>
                  <Progress value={topic.progress} className="h-2" />
                  <div className="text-sm text-muted-foreground">
                    {topic.progress}% complete
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
