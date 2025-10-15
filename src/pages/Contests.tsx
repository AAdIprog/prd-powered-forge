import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ExternalLink, Filter } from "lucide-react";
import { useState } from "react";

const Contests = () => {
  const [selectedPlatform, setSelectedPlatform] = useState<string>("all");

  const contests = [
    {
      id: 1,
      name: "Codeforces Round #925 (Div. 2)",
      platform: "Codeforces",
      division: "Div. 2",
      startTime: "2025-10-16T14:35:00",
      duration: "2 hours",
      link: "https://codeforces.com",
      color: "bg-blue-500",
      ratingRange: "< 2100",
    },
    {
      id: 2,
      name: "Codeforces Round #925 (Div. 1)",
      platform: "Codeforces",
      division: "Div. 1",
      startTime: "2025-10-16T14:35:00",
      duration: "2 hours",
      link: "https://codeforces.com",
      color: "bg-blue-500",
      ratingRange: ">= 1900",
    },
    {
      id: 3,
      name: "AtCoder Beginner Contest 328",
      platform: "AtCoder",
      division: "ABC",
      startTime: "2025-10-17T17:00:00",
      duration: "1h 40m",
      link: "https://atcoder.jp",
      color: "bg-gray-500",
      ratingRange: "All",
    },
    {
      id: 4,
      name: "CodeChef Starters 108",
      platform: "CodeChef",
      division: "Div. 2",
      startTime: "2025-10-18T20:00:00",
      duration: "3 hours",
      link: "https://codechef.com",
      color: "bg-amber-600",
      ratingRange: "< 2000",
    },
    {
      id: 5,
      name: "AtCoder Regular Contest 168",
      platform: "AtCoder",
      division: "ARC",
      startTime: "2025-10-19T20:00:00",
      duration: "2 hours",
      link: "https://atcoder.jp",
      color: "bg-gray-500",
      ratingRange: ">= 1200",
    },
    {
      id: 6,
      name: "CodeChef Long Challenge",
      platform: "CodeChef",
      division: "All Divisions",
      startTime: "2025-10-20T15:00:00",
      duration: "10 days",
      link: "https://codechef.com",
      color: "bg-amber-600",
      ratingRange: "All",
    },
  ];

  const platforms = ["all", "Codeforces", "AtCoder", "CodeChef"];

  const filteredContests =
    selectedPlatform === "all"
      ? contests
      : contests.filter((c) => c.platform === selectedPlatform);

  const getTimeUntil = (startTime: string) => {
    const now = new Date();
    const start = new Date(startTime);
    const diff = start.getTime() - now.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(hours / 24);

    if (days > 0) return `in ${days}d ${hours % 24}h`;
    if (hours > 0) return `in ${hours}h`;
    return "Starting soon";
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container">
        <div className="mb-8">
          <h1 className="mb-2 text-4xl font-bold">Contest Tracker</h1>
          <p className="text-muted-foreground">
            Upcoming competitive programming contests from Codeforces, CodeChef, and AtCoder
          </p>
        </div>

        {/* Filters */}
        <Card className="mb-8 shadow-card">
          <CardContent className="pt-6">
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium">Filter by platform:</span>
              <div className="flex flex-wrap gap-2">
                {platforms.map((platform) => (
                  <Button
                    key={platform}
                    size="sm"
                    variant={selectedPlatform === platform ? "default" : "outline"}
                    onClick={() => setSelectedPlatform(platform)}
                  >
                    {platform === "all" ? "All Platforms" : platform}
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contests Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {filteredContests.map((contest) => (
            <Card
              key={contest.id}
              className="group border-border/50 shadow-card transition-all hover:border-primary/50 hover:shadow-glow"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="mb-2 flex items-center gap-2">
                      <div className={`h-3 w-3 rounded-full ${contest.color}`}></div>
                      <Badge variant="outline">{contest.platform}</Badge>
                      <Badge variant="secondary">{contest.division}</Badge>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary">
                      {contest.name}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(contest.startTime).toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>Duration: {contest.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-muted-foreground">Rating:</span>
                    <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
                      {contest.ratingRange}
                    </Badge>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <div className="font-medium text-accent">
                    {getTimeUntil(contest.startTime)}
                  </div>
                  <Button size="sm" className="gap-2" asChild>
                    <a href={contest.link} target="_blank" rel="noopener noreferrer">
                      Register
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contests;
