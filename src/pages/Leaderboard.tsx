import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Trophy, Medal, Award, TrendingUp } from "lucide-react";
import { useState } from "react";

const Leaderboard = () => {
  const [selectedCategory, setSelectedCategory] = useState("overall");

  const categories = [
    { id: "overall", label: "Overall Rating" },
    { id: "problems", label: "Most Problems" },
    { id: "streak", label: "Longest Streak" },
    { id: "contests", label: "Contest Participation" },
  ];

  const leaderboardData = [
    {
      rank: 1,
      name: "Arjun Kumar",
      rating: 2156,
      problems: 847,
      streak: 47,
      contests: 89,
      change: "+24",
      avatar: "AK",
    },
    {
      rank: 2,
      name: "Priya Sharma",
      rating: 2034,
      problems: 723,
      streak: 38,
      contests: 76,
      change: "+12",
      avatar: "PS",
    },
    {
      rank: 3,
      name: "Rahul Verma",
      rating: 1987,
      problems: 691,
      streak: 29,
      contests: 71,
      change: "+8",
      avatar: "RV",
    },
    {
      rank: 4,
      name: "Ananya Patel",
      rating: 1923,
      problems: 654,
      streak: 42,
      contests: 68,
      change: "+15",
      avatar: "AP",
    },
    {
      rank: 5,
      name: "Vikram Singh",
      rating: 1876,
      problems: 612,
      streak: 31,
      contests: 64,
      change: "+6",
      avatar: "VS",
    },
    {
      rank: 6,
      name: "Neha Gupta",
      rating: 1834,
      problems: 589,
      streak: 25,
      contests: 59,
      change: "-3",
      avatar: "NG",
    },
    {
      rank: 7,
      name: "Karthik Reddy",
      rating: 1789,
      problems: 567,
      streak: 28,
      contests: 55,
      change: "+10",
      avatar: "KR",
    },
    {
      rank: 8,
      name: "Divya Menon",
      rating: 1745,
      problems: 543,
      streak: 22,
      contests: 52,
      change: "+4",
      avatar: "DM",
    },
  ];

  const getRankBadge = (rank: number) => {
    if (rank === 1)
      return (
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600">
          <Trophy className="h-5 w-5 text-white" />
        </div>
      );
    if (rank === 2)
      return (
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-gray-300 to-gray-500">
          <Medal className="h-5 w-5 text-white" />
        </div>
      );
    if (rank === 3)
      return (
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-orange-600">
          <Award className="h-5 w-5 text-white" />
        </div>
      );
    return (
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted font-bold">
        {rank}
      </div>
    );
  };

  const getValue = (user: any) => {
    switch (selectedCategory) {
      case "problems":
        return user.problems;
      case "streak":
        return user.streak;
      case "contests":
        return user.contests;
      default:
        return user.rating;
    }
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container">
        <div className="mb-8">
          <h1 className="mb-2 text-4xl font-bold">Leaderboard</h1>
          <p className="text-muted-foreground">
            Top performers in the Competitive Programming Club
          </p>
        </div>

        {/* Category Selection */}
        <Card className="mb-8 shadow-card">
          <CardContent className="pt-6">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top 3 Podium */}
        <div className="mb-8 grid gap-6 md:grid-cols-3">
          {leaderboardData.slice(0, 3).map((user, index) => (
            <Card
              key={user.rank}
              className={`shadow-elevated ${
                index === 0 ? "md:order-2 border-primary/50 shadow-glow" : index === 1 ? "md:order-1" : "md:order-3"
              }`}
            >
              <CardHeader className="text-center">
                <div className="mx-auto mb-4">{getRankBadge(user.rank)}</div>
                <CardTitle className="text-2xl">{user.name}</CardTitle>
                <CardDescription>Rank #{user.rank}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">{getValue(user)}</div>
                  <div className="text-sm text-muted-foreground">
                    {categories.find((c) => c.id === selectedCategory)?.label}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border/50">
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground">Problems</div>
                    <div className="font-semibold">{user.problems}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground">Contests</div>
                    <div className="font-semibold">{user.contests}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Full Leaderboard */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Full Rankings</CardTitle>
            <CardDescription>All club members ranked by {categories.find((c) => c.id === selectedCategory)?.label.toLowerCase()}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {leaderboardData.map((user) => (
                <div
                  key={user.rank}
                  className={`flex items-center justify-between rounded-lg border p-4 transition-all hover:bg-muted/50 ${
                    user.rank <= 3 ? "border-primary/30 bg-primary/5" : "border-border/50"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    {getRankBadge(user.rank)}
                    <div>
                      <div className="font-semibold">{user.name}</div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>Rating: {user.rating}</span>
                        <span>·</span>
                        <span>{user.problems} problems</span>
                        <span>·</span>
                        <span>{user.streak} day streak</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Badge
                      className={`${
                        user.change.startsWith("+")
                          ? "bg-success/10 text-success hover:bg-success/20"
                          : "bg-destructive/10 text-destructive hover:bg-destructive/20"
                      }`}
                    >
                      <TrendingUp className="mr-1 h-3 w-3" />
                      {user.change}
                    </Badge>
                    <div className="text-2xl font-bold text-primary">{getValue(user)}</div>
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

export default Leaderboard;
