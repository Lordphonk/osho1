import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function ThankYouPage() {
  return (
    <main className="bg-background min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-md text-center shadow-xl rounded-2xl border-border">
        <CardHeader className="p-6 sm:p-8">
          <div className="w-16 h-16 mx-auto bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4">
            <CheckCircle2 className="w-10 h-10 text-green-500 dark:text-green-400" />
          </div>
          <CardTitle className="text-3xl font-extrabold text-primary">
            Payment Successful!
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 sm:p-8 pt-0 space-y-6">
           <p className="text-lg text-muted-foreground">
            Your purchase has been confirmed. You can now access all the files.
          </p>
          <Button asChild size="lg" className="w-full h-14 text-xl font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-accent/50">
            <Link href="https://drive.google.com/drive/folders/13-2z9EdOU-t_4HZEmoF8CUfmFhjUlWdp" target="_blank">
              Access Your Files &rarr;
            </Link>
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}
